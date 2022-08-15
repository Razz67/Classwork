// ************** Arrays **************

// Shift method

// let learners = ["Chris", "Sami", "Aranjyothi"];
// let shifted = learners.shift();

// console.log(learners);

// **************** Spread Operator **************

// let learners = ["kristy", "Nathan", "Sami"];
// let otherLearners = ["Sponge Bob", "Super Man", "Bugs Bunny"];
// let everyOne = [...learners, ...otherLearners];

// console.log(everyOne);

// From MDN
// function sum(x, y, z) {
//     return x + y + z;
//   }
//   console.log(sum(1, 2, 3));


  //  ************** Rest Parameters **************

// function add(...numbers) {
//   let sum = 0;
//   for (let num of numbers) {
//     sum += num;
//   }
//   return sum;
// }
// console.log(add(4, 5, 6, 7, 8));

// From MDN
// function sum(...theArgs) {
//     let total = 0;
//     for (const arg of theArgs) {
//       total += arg;
//     }
//     return total;
//   }
//   console.log(sum(1, 2, 3));  // expected output: 6

//   console.log(sum(1, 2, 3, 4));  // expected output: 10
