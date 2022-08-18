// 1. Examining Properties

// const checkObject = {
//     oddNum: 1,
//     evenNum: 2,
//     foundNum: 5,
//     randomNum:18
// };

// let found = 0;
// // for in loop to loop through the object to determine if the object has the property foundNum
// for (let key in checkObject) {
//     if (key === 'foundNum') {
//         found = 1;
//     }
// }
// console.log(found);

// 2. Iterating with for in loop
// const objToArray = [];
// for (let  obj in checkObject) {
//     // if checkOject is greater than or equul to 2 push it to the array
//     if (checkObject[obj] >= 2) {
//         objToArray.push(checkObject[obj]);
//     }
// }
// console.log(objToArray);

// 3. Iterating with for loop
// let divBy6 = false;
// const objToArray = Object.values(checkObject);
// for (let i = 0; i < objToArray.length; i++) {
//     if (objToArray[i] % 6 === 0) {
//         divBy6 = true;
//     }
// }
// // console.log(objToArray)
// console.log(divBy6);

// 4. Nested Arrays
// const nestedArr = [];
// for (let i = 0; i < 5; i++) {
//   nestedArr.push(["loop" + i,  i]);
// }
// console.log(nestedArr);


// 5. Adding Properties
// const possibleIterable = [4, 3, 9, 6, 23];
// const divByThree= {};
// for (let i = 0; i < possibleIterable.length; i++) {
//     if (possibleIterable[i] % 3 === 0) {
//         divByThree[possibleIterable[i]] = i;
//     }
// }
// console.log(divByThree);


const sumMe = {
    hello: 'there', 
    you: 0,
    are: 7,
    almost: 'done',
    done: '!'
};
let total = 0;
for (let key in sumMe) { // iterate through the keys of sumMe
    if ( typeof sumMe[key] === 'number') { // if the value of the key is a number 
    total += sumMe[key]; // add it to the total
}
}
console.log(total);
