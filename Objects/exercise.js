// function takes a string as an argument and returns an object that keeps track of how many times each letter occurs in the string.
// ex:
// countLetters("hello") // { h: 1, e: 1, l: 2, o: 1 }  // note: case matters   // note: spaces count as a character
// countLetters("") // {}

// function countLetters(str) {
//   var obj = {};
//   for (var i = 0; i < str.length; i++) {
//     var char = str[i];
//     if (obj[char]) {
//       obj[char]++;
//     } else {
//       obj[char] = 1;
//     }
//   }
//   return obj;
// }
// console.log(countLetters("hello"));


// plaid shirt for $27.83 paid with $100.00 cashier return an object with each denomination of change as a key and the number of that denomination as the value.


// function denominations(price, cash) {
//   let change = cash - price;
//   let obj = {};

  // TODO:  figure out how to pass strings
//   let denominations = ["Hundre", "Fifties", "Twenties", "Tens", "Fives", "Ones"];
  
//   let denominations = [100, 50, 20, 10, 5, 1];
//   for (let i = 0; i < denominations.length; i++) {
//     let denomination = denominations[i];
//     let numOfDenominations = Math.floor(change / denomination);
//     obj[denomination] = numOfDenominations;
//     change = change % denomination;
//   }
//   return obj;
// }
// console.log(denominations(27.83, 100));
// let denominations = [100, 50, 20, 10, 5, 1];
