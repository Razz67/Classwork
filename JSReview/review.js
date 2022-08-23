/***

I. ***** Variables and Data Types *****

A. Q&A

1. How do we assign a value to a variable?
   Answer: By  using a equals(=) sign.

2. How do we change the value of a variable
   Answer: assign a new value to it.

3. How do we assign an existing variable to new variable?
   Answer: let newVariable = oldVariable;

4. Remind me, what are declare, assign, and define?
   Answer: Creating a variable is declaring
   assigning is giving a value to a variable
   A variable is defined when it has been declared.

5. What is psuedocoding and why should you do it?
   Answer: Psuedocode is an artificial and informal language that helps programmers develop algorithims.
   you should do it cause it helps gives you a text based understanding of code before you write it

   6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
   70%,
***/

// B. Strings

// 1.
// let firstVariable;

// // 2.
// firstVariable = 'Hello World';

// // 3.
// firstVariable = 12;

// // 4.
// let secondVariable = firstVariable;

// // 5.
// secondVariable = 'Hello World, I"m tired';

// // 6.
// 12

// // 7.
// let yourName= "Stephin"
// console.log ('Hello my name is ' + yourName);

// // C. Booleans

// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin'
// console.log(a < b);
// console.log(c > d);
// console.log('Name'=== 'Name')
// //FOR THE NEXT TWO, USE ONLY && OR ||
// console.log(true || false)
// console.log(false && false && false && false && false || true);
// console.log(false >= false);
// console.log(e ==='Kevin');
// console.log(a != b != c);
// console.log(a === a != d);
// console.log(48 =='48');

// //D The Farm
// let animal = 'Tiger'
// let sound =''
// if (animal === 'Cow'){
//     sound = "Moo"
// }
// else {
//     sound ="Hey! You're not a cow"
// }
// console.log(sound);

// // E. Driver's Ed

// let age= 17
// let resp =''
// if (age >= 16 ){
//     resp = "Here are the keys!";
// }
// else{
//     return "Sorry, you're too young"
// }
// console.log(resp);

// ***** II Loops *****
// A. The Basics

// 1.
// for (let i = 0; i <= 10; i++){
//      console.log(i)
//  }

// // 2.
//  for (let i = 10; i <= 400; i++){
//      console.log(i);
//  }

// 3.
//  for (let i = 12; i <= 4000; i += 3){
//      console.log(i)
//  }

// B. Get Even

// 1.
// for (let i = 1; i < 100; i++){
//     console.log(i);
// }

// 2.
// let numbers = 1;
// while (numbers <= 100) {
//     if (numbers % 2 === 0) {
//         console.log(`${numbers} <--is an even number`);
//     } else
//     console.log(numbers);
//     numbers++;
// }

// C. Give me Five
// for (let index = 1; index < 100; index++) {
//     if (index % 3 === 0 && index % 5 === 0) {
//         console.log(`I found a ${index}, Three is a crowd, High five!`)
//     } else if ( index % 3 === 0) {
//         console.log(`I found a ${index}, Three is a crowd`)
//         } else if (index % 5 === 0) {
//         console.log(`I found a ${index}, High five!`)
//     } else {
//         console.log(`${index}`);
//     }
// }

// D. Savings Account

// 1.
// let bank_account = 1;
// let sum = 0;
// while (bank_account <= 10) {
//    sum += bank_account;
//     bank_account++;
// }
// console.log("$" + new Intl.NumberFormat("en-IN", { maximumFractionDigits: 3 }).format(sum)
// );

// 2.
// let bank_account = 1;
// let sum = 0;
// while (bank_account <= 100) {
// 	sum += bank_account * 2;
// 	bank_account++;
// }
// // change format to U.S currency
// console.log("$" + new Intl.NumberFormat("en-IN", { maximumFractionDigits: 3 }).format(sum));


// ***** III. Arrays & Control flow *****

// A. Talk about it:

// 1. What are the things in an array?  Answer: a collection of elements(valuesw)
// 2. Do arrays guaruntee those things will be in order? Answer: No
// 3. What real-life thing could you model with an array? Answer: Database

//B. Easy Does It
// let quotes = ["May the force be with you", "Easy is as easy does", "Mama told me not to talk to strangers"];

// C. Accessing elements

// const randomThings = [1, 10, "Hello", true];
// console.log(randomThings[0]);
// randomThings[2] = "World"; 
// console.log(randomThings);

// D Changing Values
// const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
// console.log(ourClass[2]);    // (1)
// ourClass[4] = "Octocat";     // (2)
// ourClass.push("Cloud City"); // (3)
// console.log(ourClass);

// E. Mix it up
// const myArray = [5, 10, 500, 20];
// myArray.push("Aegon");
// myArray.shift();
// myArray.unshift("Bob Marley");
// myArray.pop[-2];
// myArray.reverse();
// console.log(myArray);

// F. Biggie Smalls
// let number = 6;
// let answer = "";
// if (number < 100) {
//     answer = "Little number";  // (1)
// } 
// else ( number >= 100) {      // (2)
//     answer = "Big number";
// } 
// console.log(answer);

// G Monkey in the Middle
// let number = 6;
// let answer = "";
// if (number < 100) {
//     answer = "Little number";  // (1)
// } 
// else if ( number >= 100) {      // (2)
//     answer = "Big number";
// } 
// else {
//     answer = "Monkey";       // (3)
// }
// console.log(answer);

// ********** H What's in Your Closet **********

// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     "right sock",
//     "GA hoodie",
//     "green pants",
//     "yellow knit hat",
//     "marshmellow peeps"
// ];

// // Thom' Closet
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
//         // Thom's accessories
//         "wool mittens",
//         "wool scarf",
//         "raybans"
//     ]
// ];

// console.log(`Krystyn is rocking that ${kristynsCloset[2]} today.`) // (1);

// kristynsCloset.splice(6, 0, 'raybans');  // (2)

// kristynsCloset.splice(5, 1, 'stained knit hat');  // (3)

// let tomsShirt = `${thomsCloset[0][0]}`;  // (4)

// let tomsPants = `${thomsCloset[1][1]}`;  // (5)

// let tomsAccessory = `${thomsCloset[2][2]}`;  // (6)

// console.log(`Thom is looking fierce in ${tomsShirt}, ${tomsPants} and ${tomsAccessory}.`); // (7)

// // change PJs to footie Pajamas
// thomsCloset[1][2] = "Footie Pajamas";  // (8)
// console.log(kristynsCloset);
// console.log(thomsCloset);

// ***** IV: Functions *****

// A. printGreeting
// const printGreeting = name => {
//     console.log(name);
// }
// printGreeting("Slimer");

// B. printCool
// const printCool = name => {
//     console.log(`${name} is cool`);
// }
// printCool("Captain Reynolds");

// C. calculateCube
// const calculateCube = num => {
//     return num * num * num;
// }
// console.log(calculateCube(5));

// D. isVowel
// const isVowel = char => {
//     return "aeiouAEIOU".includes(char);
// }
// console.log(isVowel("a"));
// console.log(isVowel("U"));
// console.log(isVowel("w"));

// E. getTwoLengths
// const getTwoLengths = (str1, str2) => {
//   return [str1.length, str2.length];   
// }
// console.log(getTwoLengths("Chocolate", "Banana"));

// // F. getMultipleLengths
// function getMultipleLengths(...str) {
//     return str.map(word => word.length);
//     }
//     console.log(getMultipleLengths("Chocolate", "Banana", "Onions", "Tangerines"));

// G. maxOfThree 
// function maxOfThree(num1, num2, num3) {
//     return Math.max(num1, num2, num3);
// }
// console.log(maxOfThree(5, 6, 7));

// H. printLongestWord
// function printLongestWord(...words) {
//     let longestWord = words.reduce((longest, word) => {
//         return word.length > longest.length ? word : longest;
//      },"");
//     console.log(longestWord);
// }
// printLongestWord("Chocolate", "Banana", "Onions", "Tangerines");

// ***** Objects *****

// A. Make a user object
const user = {
    name: 'Razz',
    email: 'itsomn@perscholas.com',
    age: 55,
    purchased: []
};

// B. Update the user
user.email = 'someoneelse@perscholas.com'; // (1)
user.age++;  // (2)

// C. Adding keys and values
user.location = "some-or-other location";

// D. shopaholic!
user.purchased.push("carbohydrates");  // (1)

user.purchased.push("peace of mind");  // (2)

user.purchased.push("Merino jodhpurs");  // (3)
// console.log(user.purchased[2]);  // (4)
// console.log(user);

// E. Object-within-objec
user.friend = {              // (1) add friend to user objec
    name: "Marco",
    age: 42,
    location: "Tha Moon",
    purchased: []
}
// console.log(user.friend.name);  // (2) print friends name

// console.log(user.friend.location);  // (3) print friends location

user.friend.age = 55;  // (4) change friends age to 55

user.friend.purchased.push("The One Ring"); // (5) add "The One Ring" to friends purchased array

user.friend.purchased.push("A Latte");     // (6) add "A Latte to friends purchased array"

// console.log(user.friend.purchased[1]);  // (7) print friends "A latte"

// F. Loops

// (1) create a for lop that iterates through the user.purchased array and prints each item in the array
// for (let i = 0; i < user.purchased.length; i++) {
//     console.log(user.purchased[i]);
// }

// (2) create a for lop that iterates through the user.friend.purchased array and prints each item in the array
// for (let i = 0; i < user.friend.purchased.length; i++) {
//     console.log(user.friend.purchased[i]);
// }

// G. Functions can operate on objects

// (1) create  a function that updates the user age and changes name to upper case.
// const updateUser = () => {
//     console.log(user.age++);
//     console.log(user.name.toUpperCase());
// }
// updateUser();

// (2)
// function oldAndLoud(person) {
//     console.log(person.name.toUpperCase());
//     console.log(person.age++);
// }
// oldAndLoud(user);

// ***** Hungry for  more *****

// Cat combinator

// Mama cat
let cat1 = {
    name: "Fluffy",
    age: 7,
    breed: "Persian"
}
// console.log(cat1.age, cat1.breed);

// Papa cat
let cat2 = {
    name: "Whiskers",
    age: 10,
    breed: "Mixed"
}


// 3. combine the two cats into an object
const combineCats = (mama, papa) => {
    let twoCats =  {
         age: 1,   
        name: mama.name + papa.name,
        breed: mama.breed +  '-' + papa.breed
    };
    return twoCats;
}
console.log(cat1, cat2);

// 4. Cat brain bender
console.log(combineCats(combineCats(cat1, cat2), combineCats(combineCats(cat1, cat2), combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2), combineCats(cat1, cat2), combineCats(cat1, cat2), combineCats(cat1, cat2)))));


