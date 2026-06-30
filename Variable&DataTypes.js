console.log("Hey, It is our Javascript Learning Toturial");

console.log("Hei, this is a Markhor you not beat them");

// This is a single line comment
//consolele.log("Learning Javascript");

/*  This is a multi line comment
console.log(100);
console.log(34);
console.log(8888);
*/


let city = "Karachi";
console.log(city);

let number = 67;
console.log(number);

let age = 45;
age = 56;
console.log(age);

let first_name = "Pak";
let last_name = "Avenue";
console.log(first_name + " " + last_name);

/* Error provide  
const pi = 2.4;
pi = 7;
console.log(pi);
*/

const country_name = "Pakistan";
console.log(country_name);


// Swap Two Variables
let a = 8;
let b = 7;

[a,b] = [b,a];
console.log("a = "+a);
console.log("b = "+b);


// Area of Rectangle
let length = 8.9;
let width = 6.7;

let area = length * width;
console.log("Area is " + area);

// Total MArks and Percentge
let literature_marks = 87;
let Java_marks = 89;
let coal_marks = 81;

let total = literature_marks + Java_marks + coal_marks;
let percentage = (total/300) * 100;

console.log("Total = " + total);
console.log("PErcentage = " + percentage + "%");

// Check types
let num = 8;
let name = "ABC";
let salary;
let city_name = null;
let isstudent = true;

console.log(typeof num);
console.log(typeof name);
console.log(typeof salary);
console.log(typeof city_name);
console.log(typeof isstudent);

// Why does typeof null return "object"? It is a historical bug in JavaScript. It remains for backward compatibility.

// Student Information
const student_name = "Maaz Khan";
let student_age = 23;
const university_name = "ABC Uni";
const department_name = "Computer Science";

console.log("Student name is " + student_name);
console.log("Student age is " + age);
console.log("STudent University name is " + university_name);
console.log("Student department name is " + department_name);

// calculate average
let x = 3;
let y = 7;
let c = 9;
let d = 14;
let e = 65;

let f = x + y + c + d + e/5;
console.log("average of number is "+f);

// cart
let laptop = 45000;
let charger = 1000;
let pin = 700;

let total1 = laptop + charger + pin;
console.log(total1);

let basic_salary = 50000;
let bonus = 10000;
let tax = 3000;

let net_salary = basic_salary + bonus - tax;
console.log("Salary will be: "+net_salary);