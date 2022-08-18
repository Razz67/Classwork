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
let firstVariable;

// 2
firstVariable = "Hello World",

// 3
firstVariable = 10;

// 4
let secondVariable = firstVariable;

// 5
secondVariable = "Hello Perscholas";

// 6
"Hello Perscholas"

// 7
let yourName = "Stephine";
let myExpression = "Hello my name is " + yourName;


// C Booleans

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = "Kevin";
console.log(a < b);
console.log(c > d);
console.log("Name" === "Name");
//FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log((false && false && false && false && false) || true);
console.log(false >= false);
console.log(e === "Kevin");
console.log((a != b) != c);
console.log((a === a) != d);
console.log(48 == "48");


//D The Farm
let animal = "Tiger";
let sound = "";
if (animal === "Cow") {
	sound = "Moo";
} else {
	sound = "Hey! You're not a cow";
}
console.log(sound);

