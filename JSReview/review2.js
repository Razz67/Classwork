// Arrays, Loop and Reps

// Part II JavaScript Reps
// Easy Going
for (let i = 0; i <= 20; i++) {
    console.log(i);  
}
//  fizzbuzz for loop exercise

const fizzbuzz = function(num) {
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
        } else if (i % 3 === 0) {Fi
        console.log("Fizz");
        } else if (i % 5 === 0) {
        console.log("Buzz");
        } else {
        console.log(i);
        }
    }
    }
    fizzbuzz(30);
