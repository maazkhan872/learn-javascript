
// Arrays

let name = ["Muhammad Amir", "Javed Miandad", "Shane Warne", 
    "Dale Styen"
];
console.log("The Name of Cricketer is: " + name);

let bucket = ["Milky Bread", "Chips", "Juice", "ColdDrink", "Biscuits"];
console.log(bucket[1]);

for(let i = 0; i <= bucket.length; i++){
    console.log(bucket);
}

// let footballer_name = ["Lionel Messi", "Christiano Ronaldo", "Kylian Mbappe", "Eden Hazards"];
// console.log(footballer_name);


let color = ["Red", "Black", "Green", "White"];
console.log(color[0]);  // accessing elements
console.log(color[1]);
console.log(color[2]);

let fruits_names = ["Orange", "Mango", "Graphes"];
fruits_names[1] = "Banana";  // append elements
console.log("The Name of Fruits is: " + fruits_names);

// Array Indices
let cities_names = ["Karachi", "Islamabad", "Lahore", "Quetta"];
console.log(cities_names[1]);


// Using Loops
let footballer_names = ["Lionel Messi", "Christiano Ronaldo", "Kylian Mbappe", "Eden Hazards", "Osmane Dembelle", "Harry Kane", "Ronaldinho", "Maradona", "Emilo Martinez"];

for (let i = 0; i < footballer_names.length; i++){
    console.log("The Name of Footballer is: " + footballer_names[i]);
}

// Sum using array
let numbers = [2, 6, 4, 87, 3];

let sum = 0;

for (let i = 0; i < numbers.length; i++){
    sum += numbers[i];
}
console.log("The sum of elements is: " + sum);


// Find largest number in array
let nums = [10,50,30,80,20];
let largest = nums[0];

for (let i=1; i<nums.length;i++){
    if (nums[i] > largest){
        largest = nums[i];
    }    
}
console.log("The largest value is: " + largest);

// Arrays Built-in methods
let fruits = ["Apple","Mango"];
fruits.push("Banana");  // push
fruits.pop();  // pop
fruits.unshift("Banana");  // unshift
fruits.shift();  // shift 
fruits.splice(1,1);
console.log(fruits.indexOf("Mango"));  // indexing
console.log(fruits.includes("Banana"));  // includes
console.log(fruits);  // print elements from a list