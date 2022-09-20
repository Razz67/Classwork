let fs = require("fs");

let circle = require("./Utilities/circle");

let random = require("./Utilities/random");


for (let i = 1; i <= 10; i++) {
    console.log(`Random Number ${[i]} is: ${random(100, 200)}`);
};

console.log(`The area of a circle is ${circle.area(5).toFixed(2)}.
The circumference of a circle is: ${circle.circumference(5).toFixed(2)}`);