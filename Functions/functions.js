//  Defining Functions
//  Function declaration / definition

// function sayHello() {
//     console.log("Hello");
// }
// sayHello();

//  Function expression

// const sayHi = function() {
//     console.log("Hi");
// }

// Arrow Functions
// const sayBye = () => {
//     console.log(sayBye());

// }


// function add(num1, num2) {
//     return num1 + num2;
// }
// console.log(add(2, 3));


// ************** Exercises ****************

// function computeArea(width, height) {
//     return "The area of a rectangle with a width of " + width + " and a height of " + height + " is " + (width * height) + " square units.";
// }
// console.log(computeArea(2, 3));

// ************** Compute Area with arrow function **************
// const computeArea = (width, height) => {
//     return "The area of a rectangle with a width of " + width + " and a height of " + height + " is " + (width * height) + " square units.";
// }
// console.log(computeArea(2, 3));



// function planetHasWater(planet) {
//     if (planet === "Earth") {
//         return "Yes, " + planet + " has water";
//     } else {
//         return "No, " + planet + " does not have water";
//     }
// }

// console.log(planetHasWater("Earth"));

// planet has water with arrow function

const planetHasWater = planet => {
    if (planet === "Earth") {
        return "Yes, " + planet + " has water";
    } else {
        return "No, " + planet + " does not have water";
    }
}
console.log(planetHasWater("Earth"));


// ******************************** Classwork *************************************
// ************** Exercise 1 **************
// **create function maxOfTwoNumbers with two parameters return the largest of two numbers if they are equal return the that number
// function maxOfTwoNumbers(x, y) {
//     if (x > y) {
//         return x;
//     } else {
//         return y;
//     }
// }
// console.log(maxOfTwoNumbers(10, 25));


// Exercise 2
// **a function expression name maxOfThree takes three arguments return the  largest
// const  maxOfThree = function(x, y, z) {
//     if (x > y && x > z) {
//         return x;
//     } else if (y > x && y > z) {
//         return y;
//     } else {
//         return z;
//     }
// console.log(maxOfThree(10, 25, 30));


// ************** Exercise 3 **************
// **function isCharAVowel takes one argument and returns true if it is a vowel and false if it is a vowel

// function isCharAVowel(char) {
//     if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isCharAVowel("a"));
// console.log(isCharAVowel("b"));


// ************** Exercise 4 **************
// **function sumArray takes an array of numbers and returns the sum of all the numbers in the array

// const sumArray = function(numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }
//     return sum;
// }
// console.log(sumArray([1, 2, 3, 4, 5]));

// ************** Exercise 5 ***************
//**function multiplyArray takes an array of numbers and returns the product of all the numbers in the array
// function multiplyArray(numbers) {
//     let product = 1;
//     for (let i = 0; i < numbers.length; i++) {
//         product *= numbers[i];
//     }
//     return product;
// }
// console.log(multiplyArray([1, 2, 3, 4, 5]));

// ************** Exercise 6 **************
// **Function expression numArgs; returns the number of args passed to the function
// const numArgs = function(...args) {
//   return args.length;
// }
// console.log(numArgs(1, 2, 3, 4, 5))

// *************** Exercise 7 **************
// ** Function reversString takes a string as an argument, 
// ** reverses the chars and returns it

// function reverseString(str) {
//   let reversedStr = "";
//   for (let index = str.length-1; index >= 0; index--) {
//     reversedStr += str[index];
//   }
//   return reversedStr;
// }
// console.log(reverseString("Sponge Bob"));


// *************** Exercise 8 **************
// **Function expression longestStringArray takes an array of strings as an argument 
// **returns the length of the longest string

// const longestStringArray = (...strings) => {
//   let longStr = "";
//   for (let index = 0; index < strings.length; index++) {
//   if (strings[index].length > longStr.length) {
//     longStr = strings[index];
//   }    
//   }
//   return longStr;
// }
// console.log(longestStringArray("The", "Dallas", "Cowboys"));


// ************** Exercise 9 **************
// ** Function stringsLongerThan, takes an array of strings  and a number as arguments
// **returns an array of the strings that are longer than the number passed

// function stringsLongerThan(strings, num) {
//   let longStr = [];
//   for (let index = 0; index < strings.length; index++) {
//   if (strings[index].length > num) {
//     longStr.push(strings[index]);
//   }    
//   }
//   return longStr;
// }
// console.log(stringsLongerThan(["Say", "hello", "in", "the", "morning"], 3));



// *************** Challenge: addList ***************
// **Write a function called addList that accepts any quantity of numbers as arguments 
// **adds them together and returns the sum.

// function addList(...nums) {
//     let sum = 0;
//     for (let index = 0; index < nums.length; index++) {
//       sum += nums[index];
//     }
//     return sum;
// }
// console.log(addList(10, 20, 30));


//Classwork 8/15/22

// Fizz Buzz Exercise
// function fizzBuzz(num) {
//     if (num % 3 === 0 && num % 5 === 0) {
//         return "FizzBuzz";
//     } else if (num % 3 === 0) {
//         return "Fizz";
//     } else if (num % 5 === 0) {
//         return "Buzz";
//     } else {
//         return num;
//     }
// }
// console.log(fizzBuzz(15));


// cookies cost $4 paid with $10 how many quarters do you get back?
// function cookies(cost, paid) {
//     let quarters = paid / cost;
//     return Math.floor(quarters);
// }
// console.log(cookies(4, 10));
