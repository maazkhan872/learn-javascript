// ===========================================
// STUDENT GRADING SYSTEM — script.js
// ===========================================
 
// ==========================
// DOM SELECTION
// ==========================
 
const photo        = document.getElementById("photo");
const previewImage = document.getElementById("previewImage");
const studentName  = document.getElementById("studentName");
const rollNumber   = document.getElementById("rollNumber");
const department   = document.getElementById("department");
const semester     = document.getElementById("semester");
const email        = document.getElementById("email");
const jsMarks      = document.getElementById("jsMarks");
const htmlMarks    = document.getElementById("htmlMarks");
const cssMarks     = document.getElementById("cssMarks");
const saveBtn      = document.getElementById("saveBtn");
const generateBtn  = document.getElementById("generateBtn");
const resetBtn     = document.getElementById("resetBtn");
const reportContainer = document.getElementById("reportContainer");
const tableBody    = document.getElementById("tableBody");
 
// ==========================
// EDIT MODE TRACKER
// ==========================
 
let editingStudentId = null; // null = Save mode, number = Update mode
 
// ==========================
// IMAGE PREVIEW
// ==========================
 
photo.addEventListener("change", function () {
    const file = photo.files[0];
    if (!file) {
        previewImage.style.display = "none";
        return;
    }
    const reader = new FileReader();
    reader.onload = function (e) {
        previewImage.src = e.target.result;
        previewImage.style.display = "block";
    };
    reader.readAsDataURL(file);
});
 
// ==========================
// FORM VALIDATION
// ==========================
 
function validateForm() {
    if (studentName.value.trim() === "") { alert("Enter Student Name");       studentName.focus(); return false; }
    if (rollNumber.value.trim()  === "") { alert("Enter Roll Number");        rollNumber.focus();  return false; }
    if (department.value.trim()  === "") { alert("Enter Department");         department.focus();  return false; }
    if (semester.value.trim()    === "") { alert("Enter Semester");           semester.focus();    return false; }
    if (email.value.trim()       === "") { alert("Enter Email");              email.focus();       return false; }
    if (jsMarks.value            === "") { alert("Enter JavaScript Marks");   jsMarks.focus();     return false; }
    if (htmlMarks.value          === "") { alert("Enter HTML Marks");         htmlMarks.focus();   return false; }
    if (cssMarks.value           === "") { alert("Enter CSS Marks");          cssMarks.focus();    return false; }
    return true;
}
 
// ==========================
// CALCULATIONS
// ==========================
 
function calculateTotal()      { return Number(jsMarks.value) + Number(htmlMarks.value) + Number(cssMarks.value); }
function calculatePercentage(t){ return ((t / 300) * 100).toFixed(2); }
function calculateGrade(p)     {
    if (p >= 90) return "A+";
    if (p >= 80) return "A";
    if (p >= 70) return "B";
    if (p >= 60) return "C";
    if (p >= 50) return "D";
    return "F";
}
function calculateResult() {
    return (Number(jsMarks.value) >= 40 &&
            Number(htmlMarks.value) >= 40 &&
            Number(cssMarks.value)  >= 40) ? "PASS" : "FAIL";
}
 
// ==========================
// GET STUDENT DATA
// ==========================
 
function getStudentData() {
    const total      = calculateTotal();
    const percentage = calculatePercentage(total);
    return {
        name:       studentName.value.trim(),
        rollNumber: rollNumber.value.trim(),
        department: department.value.trim(),
        semester:   semester.value,
        email:      email.value.trim(),
        jsMarks:    jsMarks.value,
        htmlMarks:  htmlMarks.value,
        cssMarks:   cssMarks.value,
        total:      total,
        percentage: percentage,
        grade:      calculateGrade(percentage),
        result:     calculateResult()
    };
}
 
// ==========================
// GENERATE REPORT
// ==========================
 
generateBtn.addEventListener("click", function () {
    if (!validateForm()) return;
    const s = getStudentData();
    reportContainer.innerHTML = `
        <h3>Student Report Card</h3><hr>
        <p><strong>Name :</strong> ${s.name}</p>
        <p><strong>Roll Number :</strong> ${s.rollNumber}</p>
        <p><strong>Department :</strong> ${s.department}</p>
        <p><strong>Semester :</strong> ${s.semester}</p>
        <p><strong>Email :</strong> ${s.email}</p><hr>
        <p><strong>JavaScript :</strong> ${s.jsMarks}</p>
        <p><strong>HTML :</strong> ${s.htmlMarks}</p>
        <p><strong>CSS :</strong> ${s.cssMarks}</p><hr>
        <p><strong>Total :</strong> ${s.total}</p>
        <p><strong>Percentage :</strong> ${s.percentage}%</p>
        <p><strong>Grade :</strong> ${s.grade}</p>
        <p><strong>Result :</strong> ${s.result}</p>
    `;
});
 
// ==========================
// RESET FORM
// ==========================
 
function resetForm() {
    photo.value           = "";
    previewImage.src      = "";
    previewImage.style.display = "none";
    studentName.value     = "";
    rollNumber.value      = "";
    department.value      = "";
    semester.value        = "";
    email.value           = "";
    jsMarks.value         = "";
    htmlMarks.value       = "";
    cssMarks.value        = "";
    reportContainer.innerHTML = "Report will appear here...";
 
    // Reset edit mode
    editingStudentId      = null;
    saveBtn.textContent   = "Save Student";
    saveBtn.style.background = "#1565c0";
}
 
resetBtn.addEventListener("click", resetForm);
 
// ==========================
// SAVE BUTTON CLICK
// ==========================
 
saveBtn.addEventListener("click", function () {
    if (!validateForm()) return;
 
    if (editingStudentId !== null) {
        // UPDATE mode
        updateStudent(editingStudentId);
    } else {
        // INSERT mode
        saveStudent();
    }
});
 
// ==========================
// SAVE (INSERT) STUDENT
// ==========================
 
function saveStudent() {
    const formData = new FormData();
    formData.append("action",     "save");
    formData.append("name",       studentName.value.trim());
    formData.append("rollNumber", rollNumber.value.trim());
    formData.append("department", department.value.trim());
    formData.append("semester",   semester.value);
    formData.append("email",      email.value.trim());
    formData.append("jsMarks",    jsMarks.value);
    formData.append("htmlMarks",  htmlMarks.value);
    formData.append("cssMarks",   cssMarks.value);
 
    if (photo.files.length > 0) {
        formData.append("photo", photo.files[0]);
    }
 
    fetch("StudentServlet", { method: "POST", body: formData })
        .then(r => r.text())
        .then(msg => {
            alert(msg);
            if (!msg.startsWith("ERROR")) {
                resetForm();
                loadStudents();
            }
        })
        .catch(err => { console.log(err); alert("Unable to save student."); });
}
 
// ==========================
// UPDATE STUDENT
// ==========================
 
function updateStudent(id) {
    const formData = new FormData();
    formData.append("action",      "update");
    formData.append("studentId",   id);
    formData.append("name",        studentName.value.trim());
    formData.append("rollNumber",  rollNumber.value.trim());
    formData.append("department",  department.value.trim());
    formData.append("semester",    semester.value);
    formData.append("email",       email.value.trim());
    formData.append("jsMarks",     jsMarks.value);
    formData.append("htmlMarks",   htmlMarks.value);
    formData.append("cssMarks",    cssMarks.value);
 
    if (photo.files.length > 0) {
        formData.append("photo", photo.files[0]);
    }
 
    fetch("StudentServlet", { method: "POST", body: formData })
        .then(r => r.text())
        .then(msg => {
            alert(msg);
            if (!msg.startsWith("ERROR")) {
                resetForm();
                loadStudents();
            }
        })
        .catch(err => { console.log(err); alert("Unable to update student."); });
}
 
// ==========================
// LOAD STUDENTS
// ==========================
 
function loadStudents() {
    fetch("StudentServlet?action=view")
        .then(r => r.json())
        .then(students => displayStudents(students))
        .catch(err => console.log(err));
}
 
// ==========================
// DISPLAY STUDENTS
// ==========================
 
function displayStudents(students) {
    tableBody.innerHTML = "";
 
    if (students.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="7">No Student Found</td></tr>`;
        return;
    }
 
    students.forEach(function (student) {
        tableBody.innerHTML += `
            <tr>
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.rollNumber}</td>
                <td>${student.total}</td>
                <td>${student.grade}</td>
                <td>${student.result}</td>
                <td>
                    <button onclick="editStudent(${student.id})">Edit</button>
                    <button onclick="deleteStudent(${student.id})">Delete</button>
                </td>
            </tr>
        `;
    });
}
 
// ==========================
// EDIT STUDENT
// ==========================
 
function editStudent(id) {
    fetch("StudentServlet?action=edit&id=" + id)
        .then(r => r.json())
        .then(function (student) {
 
            // Form mein data load karo
            studentName.value = student.name;
            rollNumber.value  = student.rollNumber;
            department.value  = student.department;
            semester.value    = student.semester;
            email.value       = student.email;
            jsMarks.value     = student.jsMarks;
            htmlMarks.value   = student.htmlMarks;
            cssMarks.value    = student.cssMarks;
 
            // Photo preview (existing photo from server)
            if (student.photo && student.photo !== "") {
                previewImage.src          = "uploads/" + student.photo;
                previewImage.style.display = "block";
            }
 
            // Edit mode ON karo
            editingStudentId        = student.id;
            saveBtn.textContent     = "Update Student";
            saveBtn.style.background = "#e65100"; // orange = update mode
 
            // Scroll to top
            window.scrollTo({ top: 0, behavior: "smooth" });
 
        })
        .catch(err => console.log(err));
}
 
// ==========================
// DELETE STUDENT
// ==========================
 
function deleteStudent(id) {
    if (!confirm("Are you sure you want to delete this student?")) return;
 
    fetch("StudentServlet?action=delete&id=" + id)
        .then(r => r.text())
        .then(msg => {
            alert(msg);
            loadStudents();
        })
        .catch(err => console.log(err));
}
 
// ==========================
// PAGE LOAD
// ==========================
 
window.onload = function () {
    loadStudents();
};