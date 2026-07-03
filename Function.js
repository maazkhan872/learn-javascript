
// Fucntion
function welcome(){
    console.log("Welcome to Javascript");
}

welcome();

// Function with parameter
function greet(name){  // paramter passing
    console.log("Hello Brother Welcome to Here " + name + " wish you best luck!");
}

greet("Maaz Khan");  // argument
greet("Ashar Khan"); 
greet("Fatima Khan"); 

// Function with paramter
function city_name(cityname){
    console.log("Welcome to " + cityname);
}

city_name("Karachi");
city_name("Islamabad");
city_name("Lahore");

// Fucntion with multiple parameters
function details(name,age){
    console.log("Your name is " + name + " and age is " + age);
}

details("Maaz", 23);
details("Khan", 25);
details("Abdul",54);

// Addition
function add(a,b){
    return a + b;
}

let result = add(5,4);
console.log("The addition of two number is " + result);

// Subraction
function sub(c,d){
    return c - d;
}

let result1 = sub(10,5);
console.log("The subraction of two number is " + result1);

// Multiplication
function multiply(e,f){
    return e * f;
}

let result2 = multiply(3,7);
console.log("The multiplication of two number is " + result2);

// Division
function division(x,y){
    return x / y;
}

let result3 = division(20,5);
console.log("The division of two number is " + result3);

// Calculate square
function calculate_square(num){
    return num * num;
}

console.log("The square of two number is " + calculate_square(5));

// even and odd 
function even_and_odd(num){
    if (num % 2 == 0){
        return "even";
    }
    else{
        return "odd";
    }
}
console.log(even_and_odd(4));

// largest number
function largest_number(num1, num2){
    if (num1 > num2){
        return num1;
    }
    else{
        return num2;
    }
}
console.log(largest_number(8,3));

function factorial(num){
    
}

// Factorial
function factorial(num){
    let result = 1;

    for(let i = 1; i <= num; i++){
        result = result * i;
    }
    return result;
}
console.log(factorial(6));


// Reversed
function reversed(str){
    let reversed = "";

    for(let i = str.length - 1; i >= 0; i--){
        reversed +=  str[i];
    }
    return reversed;
}
console.log(reversed("America"));


// Sum of array
function arraysum(arr){
    let sum = 0;
     
    for(let num of arr){
        sum += num;
    }

    return sum;
}
console.log(arraysum([10, 20, 30, 50]));


// Find lowest
function lowest(array){
    let lowest = array[0];

    for(let number of array){
        if (number < lowest){
            lowest = number;
        }
    }
    return lowest;
}


// Find Maximum
function maximum(arr){
    let max = arr[0];
 
    for(let num of arr){
        if (num > max){
            max = num;
        }
    }
    return max;
}

console.log(maximum([40,25,52,80]));




// Palindrome
function Palindrome(str) {
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return str === reversed;
}

console.log(Palindrome("madam"));
console.log(Palindrome("zoom"));

// Count Occurence
function count_character(str, target) {
    let count = 0;

    for (let char of str) {
        if (char === target) {
            count++;
        }
    }
    return count;
}

console.log(countCharacter("javascript", "a"));


