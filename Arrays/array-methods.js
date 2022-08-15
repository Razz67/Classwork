// *************** .splice() Method ***************

// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. To access part of an array without modifying it, see slice().

/******* Syntax ***********/
/*
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2, itemN)

***** Return value *****
An array containing the deleted elements.
If only one element is removed, an array of one element is returned.
If no elements are removed, an empty array is returned.
*/


// Example
/*
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]
*/

// *************** .Fill() Method *************** 

/*
The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.

Syntax
fill(value)
fill(value, start)
fill(value, start, end)

Return value
The modified array, filled with value.
*/ 

// Example
/*
const array1 = [1, 2, 3, 4];

// fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// expected output: [1, 2, 0, 0]

// fill with 5 from position 1
console.log(array1.fill(5, 1));
// expected output: [1, 5, 5, 5]

console.log(array1.fill(6));
// expected output: [6, 6, 6, 6]
*/

// ******************* .forEach() ********************
/*
The forEach() method executes a provided function once for each array element.
*/

// ********** Syntax **********

// Arrow function
// forEach((element) => { /* … */ })
// forEach((element, index) => { /* … */ })
// forEach((element, index, array) => { /* … */ })

// // Callback function
// forEach(callbackFn)
// forEach(callbackFn, thisArg)

// // Inline callback function
// forEach(function(element) { /* … */ })
// forEach(function(element, index) { /* … */ })
// forEach(function(element, index, array){ /* … */ })
// forEach(function(element, index, array) { /* … */ }, thisArg)

// ********** Converting a for loop to forEach **********
/*
const items = ['item1', 'item2', 'item3'];
const copyItems = [];

// before
for (let i = 0; i < items.length; i++) {
  copyItems.push(items[i]);
}

// after
items.forEach((item) => {
  copyItems.push(item);
});
*/

// ********** Example 2 **********

/* Modifying the array during iteration
The following example logs one, two, four.

When the entry containing the value two is reached, the first entry of the whole array is shifted off—resulting in all remaining entries moving down one position. Because element four is now at an earlier position in the array, three will be skipped.

forEach() does not make a copy of the array before iterating.
*/

// const words = ['one', 'two', 'three', 'four'];
// words.forEach((word) => {
//   console.log(word);
//   if (word === 'two') {
//     words.shift(); //'one' will delete from array
//   }
// }); // one // two // four

// console.log(words); // ['two', 'three', 'four']

/*
// *************** .includes() Method ****************
The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

Syntax
includes(searchElement)
includes(searchElement, fromIndex)

*/

// *************** Example ***************

// const array1 = [1, 2, 3];

// console.log(array1.includes(2));
// // expected output: true

// const pets = ['cat', 'dog', 'bat'];

// console.log(pets.includes('cat'));
// // expected output: true

// console.log(pets.includes('at'));
// expected output: false


// *************** .map() Method ***************

// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

/* ********** Syntax **********

// Arrow function
/*
map((element) => { /* … */ })
// map((element, index) => { /* … */ })
// map((element, index, array) => { /* … */ })

// // Callback function
// map(callbackFn)
// map(callbackFn, thisArg)

// // Inline callback function
// map(function(element) { /* … */ })
// map(function(element, index) { /* … */ })
// map(function(element, index, array){ /* … */ })
// map(function(element, index, array) { /* … */ }, thisArg)

//  *********** Return value **********
// A new array with each element being the result of the callback function.

// Example 1:

// The following code takes an array of numbers and creates a new array containing the square roots of the numbers in the first array.

// const numbers = [1, 4, 9];
// const roots = numbers.map((num) => Math.sqrt(num));
// roots is now     [1, 2, 3]
// numbers is still [1, 4, 9]

// Example 2:

/*
The following code shows how map works when a function requiring one argument is used with it. The argument will automatically be assigned from each element of the array as map loops through the original array.*/

// const numbers = [1, 4, 9];
// const doubles = numbers.map((num) => num * 2);

// doubles is now   [2, 8, 18]
// numbers is still [1, 4, 9]
