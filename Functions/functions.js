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


// For and While Loops
