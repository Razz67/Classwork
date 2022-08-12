// let learners = ["Chris", "Sami", "Aranjyothi"];
// let shifted = learners.shift[0];

// console.log(shifted);



// Spread Operator

// let learners = ["kristy", "Nathan", "Sami"];
// let otherLearners = ["Sponge Bob", "Super Man", "Bugs Bunny"];
// let everyOne = [...learners, ...otherLearners];

// console.log(everyOne);

// From MDN
// function sum(x, y, z) {
//     return x + y + z;
//   }
  
//   const numbers = [1, 2, 3];
  
//   console.log(sum(...numbers));
  // expected output: 6
  
//   console.log(sum.apply(null, numbers));
  // expected output: 6


//  Rest Parameters
// function add(...numbers) {
//     console.log(numbers);
// for (let i = 0; i < numbers.length; i++) {
//     console.log(i);
// }
// }
// add(4, 5, 6, 7, 8);


// From MDN
// function sum(...theArgs) {
//     let total = 0;
//     for (const arg of theArgs) {
//       total += arg;
//     }
//     return total;
//   }
  
//   console.log(sum(1, 2, 3));
//   // expected output: 6
  
//   console.log(sum(1, 2, 3, 4));
//   // expected output: 10


//create function maxOfTwoNumbers with two parameters return the largest of two numbers if they are equal return the that number
// function maxOfTwoNumbers(x, y) {
//     if (x > y) {
//         return x;
//     } else {
//         return y;
//     }
// }
// console.log(maxOfTwoNumbers(10, 25));

// a function expression name maxOfThree takes three arguments return the  largest
// function maxOfThree(x, y, z) {
//     if (x > y && x > z) {
//         return x;
//     } else if (y > x && y > z) {
//         return y;
//     } else {
//         return z;
//     }
// console.log(maxOfThree(10, 25, 30));

// function isCharAVowel takes one argument and returns true if it is a vowel and false if it is a vowel
// function isCharAVowel(char) {
//     if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isCharAVowel("a"));
// console.log(isCharAVowel("b"));

// function sumArray takes an array of numbers and returns the sum of all the numbers in the array
// function sumArray(numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }
//     return sum;
// }
// console.log(sumArray([1, 2, 3, 4, 5]));

//function multiplyArray takes an array of numbers and returns the product of all the numbers in the array
// function multiplyArray(numbers) {
//     let product = 1;
//     for (let i = 0; i < numbers.length; i++) {
//         product *= numbers[i];
//     }
//     return product;
// }
// console.log(multiplyArray([1, 2, 3, 4, 5]));

// Exercise 6
// const numArgs = function(...args) {
//   return args.length;
// }
// console.log(numArgs(1, 2, 3, 4, 5))

// Exercise 7

// function reverseString(str) {
//   let reversedStr = "";
//   for (let index = str.length-1; index >= 0; index--) {
//     reversedStr += str[index];
//   }
//   return reversedStr;
// }
// console.log(reverseString("Sponge Bob"));

// Exercise 8
//Function expression longestStringArray that takes an array of string of strings as an argument returns the length of the longest string

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