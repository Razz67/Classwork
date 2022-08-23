// Arrays, Loop and Reps

// Part II JavaScript Reps
// Easy Going
// for (let i = 0; i <= 20; i++) {
//     console.log(i);  
// }

// // Get Even
// for (let i = 0; i <= 200; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// //  fizzbuzz
// const fizzbuzz = function(num) {
//     for (let i = 1; i <= num; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//         } else if (i % 3 === 0) {Fi
//         console.log("Fizz");
//         } else if (i % 5 === 0) {
//         console.log("Buzz");
//         } else {
//         console.log(i);
//         }
//     }
//     }
//     fizzbuzz(30);


// Wild Wild Life
// const wolfy = ["Wolfy", "Wolf", 16, "Yukon Territory"];
// const sharky = ["Sharky", "shark", 20, "Left Coast"];
// const plantee = ["Plantee", "plant", 5000, "Mordor"];
// const porgee = ["Porgee", "porg", 186, "Ahch-To"];
// const dart = ["D'Art", "Doberman dog", 2, "Upside Down"];

// plantee[2]++;
// wolfy[3] = "Gotham City";
// dart.push("Hawkins");
// wolfy[0] = "Gameboy";
// console.log(wolfy);

// Yell at the Ninja Turtles
// const turtle = ["Donatello", "Raphael", "Leonardo", "Michaelangelo"];
// for (let i = 0; i < turtle.length; i++) {
//     console.log(turtle[i].toUpperCase());
// }

// Methods revisited
// const favMovies = ["Jaws", "The Fellowship of the Ring", "Howl's Moving Castle", "Django Unchained", "Titanic"];
// console.log(favMovies.indexOf("Titanic")); // returns 4 because it is the 4th item in the array
// favMovies.sort(); // alphabetical sort
// favMovies.pop(); // removes last item in array and returns it
// favMovies.reverse(); // reverse the order of the array
// favMovies.shift(); // removes first element
// favMovies.unshift("The Matrix");  // add to the beginning of the array
// favMovies.splice(3, 1, "Avatar"); // add to the middle of the array
// let favMoviesSliced = favMovies.slice(2, 4); // returns the 3rd and 4th element of the array. Doesn't change the original array.
// console.log(favMovies.indexOf("Fast and Furious")); // returns -1 because it is not in the array   

// console.log(favMoviesSliced);
// console.log(favMovies);

// Where is Waldo?
// const whereIsWaldo = [
//                         ["Timmy", "Frank"], 
//                     "Eggbert",
//                         ["Lucinda", "Jacc", "Neff", "Snoop"],
//                         ["Petunia", ["Baked Goods", "Waldo"]]];

//                         let removeEggbert = whereIsWaldo.splice([1], 1);
//                         whereIsWaldo[2][2] = "No One"; // changes the 3rd element of the 2nd array to "No One"
//                         console.log(whereIsWaldo[2][1][1]); // returns "Waldo"
//                         console.log(removeEggbert);

// Excited Kitten
let str = "";
let randomString = "Why does the red dot always get away...";
for (let i = 1; i <= 20; i++) {
    if (str.length % 2 === 0) {
        str += Math.floor(Math.random(randomString) * randomString);
    } else {
    str += "Love me, pet me! HSSSSSS!\n";
}
}
console.log(str);

