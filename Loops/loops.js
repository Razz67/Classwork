// Anatomy of a For Loop
// 3 staments inside a for loop
// Statement 1:  Declare and initialze a variable scoped to the for loop (executed before the loop starts)
// Statement 2: A condition that when true runs the ocde in the for loop
// Statement 3: Increment the variable in order to eventually break the loop

// for (let index = 0; index < 4; index++) {
//     console.log(index);
// }

// 1st iteration index is = 0 (loop continues 1 is added to index)
// 2nd iteration index is = 1 ( 1 is added to index, loop continues)
// 3rd iteration index is = 2 ( 1 is added to index, loop continues)
// 4th iteration index is = 3 ( 1 is added to index, loop continues)
// 5th iteration index is = 4 ( loop ends because 4 is not less than 4)

// ************** Exercises ************

// Exercise 1
// for (let num = 10; num >= 1; num--) {
// console.log(num);
// }

//Exercise 2

// for (let index = 1; index <= 10; index += 2) {
//   console.log(index);
//   if (index < 10 && index % 2 != 0) {
//     console.log(index);
//   } else if (index > 10 && index % 2 == 0) {
//     console.log(index - 10);
//   }
// }

// Exercise 3
// for (let index = 6; index <= 60; index++) {
//     if ( index % 3 === 0) {
//         console.log(index);
//     }

// }

// Exercise 4
// let text = "";
// for (let index = 0; index < 7; index++) {
//     console.log(text += "#");
// }


//  Exercise 5
// print prime numbers between 1 and 20
// for (let index = 1; index <= 20; index++) {
//     if (index % 2 != 0) {
//         console.log(index);
//     }
// }

// Exercise 6
// print even numbers between 1 and 20
// for (let index = 1; index <= 20; index++) {
//     if (index % 2 == 0) {
//         console.log(index);
//     }
// }

// ************** While Loops *************

// Excersise 1
// print integers in multiples of 3 between 1 and 35
// let index = 1;
// while (index <= 35) {
//     if (index % 3 === 0) {
//         console.log(index);
//     }
//     index++;
// }

// Exercise 2
//while loop multiples of 5 between 1 and 100
// let index = 1;
// while (index < 100) {
//     if (index % 5 === 0) {
//         console.log(index);
//     }
//     index++;
// }

// Exercise 3
// While loop print integers between 0 and 20/ numbers divisible by 2 multiplied by 3 and 5
// let index = 0;
// let times3 = 0;
// while (index <= 20) {
//     if (index % 2 === 0) {
//         times3 = index * 3;
//         console.log(times3);
// }
//     index++;
// }

// Exercise 4
// print all prime numbers between 0 and 20
// let index = 0;
// while (index <= 20) {
//     if (index % 3 === 0) {
//         console.log(index);
//     }
//     index++;
// }

// Exercise 5 Bonus
// Cookies
// let paid = 10;
// let cost = 4;
// let change = paid - cost;
// let quarters = 0;
// while (change >= 0.25) {
//     quarters++;
//     change -= 0.25;
// }
// console.log(quarters);

// Exercise 6 Bonus
//output 10, 30, 50, 70, 90, 20, 40, 60, 80, 100

// let index = 10;
// while ( index <= 100)
// console.log(index);
//       if (index === 10 && index < 91) {
//         console.log(index += 20);
//       } else if (index >= 90) {
//         console.log(index += 20);
//       }
//       index++;
    

// Exercise 7 Bonus
// while loop that prints numbers from 500 to 800 if divisible by 4
// let index = 500;
// while (index <= 800) {
//     if (index % 4 === 0) {
//         console.log(index);
//     }
//     index++;
// }

// Class exercise
/** Create two nested for loops - one for each output.
 * Afterwards, try rewriting as nested while loops.
 * 
 * OUTPUT 1:
 * 
 * 1
 * 123
 * 1234
 * 12345
 * 
 * OUTPUT 2:
 * 
 * 55555
 * 4444
 * 333
 * 22
 * 1
 */

// Challenge 1 {For Loop}

// for (let i = 1; i <= 3 ; i++) {
//     let str = "";
//     for (let j = 1; j <= i; j++) {
//         str += j;
//     }
//     console.log(str);
// }

// fizzBuzz function {While Loop}
let index = 1;  
while (index <= 100) {
    if (index % 3 === 0 && index % 5 === 0) {
        console.log("FizzBuzz");
    } else if (index % 3 === 0) {
        console.log("Fizz");
    } else if (index % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(index);
    }
    index++;
}
console.log(index);


// FizzBuzz Terenary
// for (let i = 0; i < 100;) {
//    console.log((++i % 3 ? "" : "Fizz") + (i % 5 ? "" : "buzz") || i); 
// }
