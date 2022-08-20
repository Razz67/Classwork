/* 

// A. Q&A

1. How do we assign a value to a variable
    Answer: with the equals(=) sign (let variable = 2;)

2.  How do we change the value of a varialble
    Answer: variable = 20;

3.How do we assign an existing variable to a new variable
    Answer: let variable2 = variable

4. What are declare, assign and define
    Answer: Declaring is the same as creating a variable
            Assigning adds value to the declared value
            Defining is the act of declaring and assinging

5. What is pseudocoding and wy should you do it
    Answer: psuedocode is code-like syntax to aid in creating code

6. What percentage of time should be spent thinking about how your're going to solve a problem vs actually typing in code to solve it.

    Answer: 90%;
*/

// Part B

// 1.
// let firstVariable;

// // 2
// firstVariable = "Hello World",

// // 3
// firstVariable = 10;

// // 4
// let secondVariable = firstVariable;

// // 5
// secondVariable = "Hello Perscholas";

// // 6
// "Hello Perscholas"

// // 7
// let yourName = "Stephine";
// let myExpression = "Hello my name is " + yourName;

// // C Booleans

// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = "Kevin";
// console.log(a < b);
// console.log(c > d);
// console.log("Name" === "Name");
// //FOR THE NEXT TWO, USE ONLY && OR ||
// console.log(true || false);
// console.log((false && false && false && false && false) || true);
// console.log(false >= false);
// console.log(e === "Kevin");
// console.log((a != b) != c);
// console.log((a === a) != d);
// console.log(48 == "48");

// //D The Farm
// let animal = "Tiger";
// let sound = "";
// if (animal === "Cow") {
// 	sound = "Moo";
// } else {
// 	sound = "Hey! You're not a cow";
// }
// console.log(sound);

// // E
// let age= 17
// let resp =''
// if (age >= 16 ){
//     resp = "Here are the keys!";
// }
// else{
//     return "Sorry, you're too young"
// }
// console.log(resp);

// // Loops
// // A: The Basics

// // Exercise 1

//  for (let i = 0; i <= 10; i++){
//      console.log(i)
//  }

// //  Exercise 2

// let toFourHundred = "";
//  for (let i = 10; i <= 400; i++){
//     toFourHundred += i;
//  }
//  console.log(toFourHundred);

//  Exercise 3
// let divByThree = "";
//  for (let i = 12; i <= 4000; i+=3){
//     if ( i % 3 === 0) {
//              divByThree += i;
//     }
//  }
// console.log(divByThree);

// Part B
// Exercise 1 & 2

// print number from 1 to 100 if number is divisible by 2 print "<--is an even number"

// for (let i = 1; i <= 100; i++){
//     if (i % 2 === 0){
//         console.log(i + " <--is an even number");
//     } else {
//         console.log(i);
//     }
// }

// Par C
// Exercise 1

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(`I found a ${i}. Three is a crowd. and I found a ${i}. High five!`);
// 	}else if (i % 5 === 0) {
// 		console.log(`I found a ${i}. High five!`);
// 	}
//     else if (i % 3 === 0) {
//         console.log(`I found a ${i}. Three is a crowd!`);

//         } else {
// 		console.log(i);
// 	}
// }

// Part D
// Exercise 1

// let bank_account = 0;
// for (let i = 1; i <= 10; i++) {
//     bank_account += i;
// }
// console.log(bank_account);

// Exercise 2

// let bank_account = 0;
// for (let i = 1; i <= 100; i++) {
//     bank_account += i * 2;
// console.log(bank_account);
// }

// Part III Array and Control Flow
// Exercise A

// part 1
// 1. What are the things in a array called?   (Paramaters)
// 2. Do Arrays guarantee those things will be in order?  (No)
// 3. What real-life things could ou model with an array?  (Storing tabular data such as phone contacts)

// Part B
// exercise 1

// const qoutes = ["Easy come easy go", "Birds of a feather", "Harder the head, softer the butt"]

// // Part C Accessing elements

// const randomThings= [1, 10, 'Hello', true];
// let firstElement = randomThings[0];
// console.log(firstElement);
// randomThings[2] = "World";
// console.log(randomThings);

// Part D Change Values

// const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
// const element3 = ourClass[2];
// ourClass[4] = "Octocat";
// ourClass.push("Cloudy City");
// console.log(ourClass);

// Part E Mix it Up
// const myArray = [5, 10, 500, 20];
// myArray.push("Aegon", "Max Payne");
// myArray.unshift("Bob Marley");
// myArray.splice(myArray.length -2, 1);
// myArray.reverse(); // array is mutated/ mutate means changes the array/ returns the reversed array

// console.log(myArray);

// Part F Biggie Smalls

// const intVariable = 10;
// if (intVariable < 100) {
//     console.log("Little number");
// } else{
//     console.log("Big number");
// }
// console.log(intVariable);

// Part G Monkey in the Middle

// const myNum = 6;
// if (myNum < 5) {
// 	console.log("Little number");
// }
// else if (myNum > 10) {
// 	console.log("Big number");
// } else {
//     console.log("monkey");
// }
// console.log(myNum);

// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     "right sock",
//     "GA Hoodie",
//     "green pants",
//     "yellow knit hat",
//     "marshmellow peeps"
// ];

// const thomsCloset = [
//     [
//         // Thom's shirts
//         "grey button-up",
//         "dark grey button-up",
//         "light blue button-up",
//         "blue button-up"
//     ],
//     [
//         // Thom's pants
//         "grey jeans",
//         "jeans",
//         "PJs"
//     ],
//     [
//         // Thom's accesories
//         "wool mittens",
//         "wool scarf",
//         "raybans"
//     ],
// ];

// console.log(`kristyn is rocking that ${kristynsCloset[2]} today`); // (1)
// kristynsCloset.splice(6, 0, "raybans"); // (2)
// kristynsCloset.splice(5, 1, "stained knit hat"); // (3)

// console.log(kristynsCloset);

// console.log(thomsCloset[0][0]); // (4)

// console.log(thomsCloset[1][1]);  // (5)

// console.log(thomsCloset[2][2]);  // (6)

// console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][1]} and ${thomsCloset[2][1]}`);  // (7)

// console.log(thomsCloset[1][2].replace("PJs", "Footie Pajamas"));

// console.table(thomsCloset);

// IV Functions

// A. printGreeting

// function printGreeting(name) {
//     console.log(`Hello ${name}`);
// }
// printGreeting("Slimer");

// B. printCool
// function printCool(name) {
//     console.log(`${name} is cool`);
// }
// printCool("Captain Reynolds");

// C. calculateCube

// function calculateCube(num) { // function  that calculates the cube of a number
//     return num * num * num;
// }
// console.log(calculateCube(5));

// D. isVowel

// function isVowel(char) {            // creat a function that takes a character as a parameter
//     return "aeiou".includes(char);  // include is a method that checks if a character is in a string
// }
// console.log(isVowel("a"));
// console.log(isVowel("e"));
// console.log(isVowel("b"));

// E. getTwoLengths

// function getTwoLengths(str1, str2) {    // create a function that takes in two strings as parameters
//     return [str1.length, str2.length];  // return array of numbers, each number is the length of the corresponding string
// }
// console.log(getTwoLengths("hello", "world"));

// F. getMultipleLengths

// function getMultipleLengths(...str) {
// 	// holds the lengths of the strings
// 	let arr = [];

//     // loop through the strings
// 	while (str.length > 0) {

// 		// removes the first element of the array and returns it. push adds the element to the end of the array
// 		arr.push(str.shift().length);
// 	}
// 	return arr;
// }
// console.log(getMultipleLengths("hello", "what", "is", "up", "dude"));

// G. maxOfThree
// create an arrow function that takes 3 numbers as arguments

// const maxOfThree = (num1, num2, num3) => {
// 	return Math.max(num1, num2, num3);  //return the largest number using Math.max
// }
// console.log(maxOfThree( 16, 19, 9));

// H. printLongestWord

function printLongestWord([str]) {
	// split the string into an array of words
	let words = str.split(" ");

	// create a variable to hold the longest word
	let longestWord = "";

	// loop through the words array
	for (let i = 0; i < words.length; i++) {

		// if the current word is longer than the longest word
		if (words[i].length > longestWord.length) {

			// set the longest word to the current word
			longestWord = words[i];
		} 
	}
	// return the longest word
	return longestWord;
}
console.log(printLongestWord(["Bojack", "Princess", "Diane", "a", "Max", "Peanutbutter", "Feanutbuttter", "big"]));
