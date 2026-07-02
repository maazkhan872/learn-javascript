
// Arithmetic Operator
let a = 8;
let b = 9;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a%b);

// Unary Operator
let a1 = 5;

a++;
console.log(a);


let p = 7;
a--;
console.log(a);

let p1 = 5;
console.log(++a);

// Post Increment
let a2 = 5;
console.log(a++);
console.log(a);

// Assignment Operator
let marks = 80;
marks += 10;
console.log(marks);

let salary = 50000;
salary -= 5000;
console.log(salary);

// Comparison Operator
console.log(10 < 5);
console.log(10 > 5);
console.log(10 <= 5);
console.log(10 >= 5);
console.log(5 < 5);

// Logical Operators
// AND
let age2 = 20;
console.log(age2 > 18 && age2 < 30);

// OR
console.log(10 > 20 || 30 > 20);

// NOT
console.log(!(10 > 5));

/*
// Ternary Operator
let age = 18;
let result = age >= 18 ? "Adult" : "Minor";
console.log(result);
*/

// If Statement
let age1 = 20;

if (age1 >= 18) {

console.log("Eligible");
}

//if-else condition 
let number = 16;

if (number >= 18) {
console.log("Adult");
}

else {
console.log("Minor");
}


let markss = 93;

if (markss >= 90) {
console.log("A");
}

else if (markss >= 80) {
console.log("B");
}

else if (markss >= 70) {
console.log("C");
}

else{
    console.log("Fail");
}



