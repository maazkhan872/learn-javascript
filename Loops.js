
// 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 10 to 1
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// Print Even Numbers
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

// Print odd number
for (let i = 1; i <= 20; i+=2){
    console.log(i);
}

// Sum
let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum += i;
}

console.log(sum);

// Even Number
for (let i = 1; i <= 100; i++){
    if (i % 2 == 0){
        console.log(i);
    }
}

// Odd Number
for (let i = 1; i <= 100; i++){
    if(i % 2 !== 0){
        console.log(i);
    }
}

// factorial
let number = 5;
let factorial = 1;

for (let i = 0; i <= number; i++){
    factorial *= i;
}
console.log(factorial)

// Table
let table = 8;

for (let i = 1; i <= 10; i++){
    console.log(`${table} * ${i} = ${table * i}`);
}