// function takes a string as an argument and returns an object that keeps track of how many times each letter occurs in the string.


function countLetters(str) {
  const obj = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (obj[char]) {  // if previous key is the same current key, return that key and add 1 to its value if not just add the key and 1 to the value
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }
  return obj;
}
console.log(countLetters("hello all"));


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
