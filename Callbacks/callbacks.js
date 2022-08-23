// filter method
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
const panagram = [
	"The",
	"quick",
	"brown",
	"fox",
	"jumps",
	"over",
	"the",
	"lazy",
	"dog",
];
// .filter() method
// const filtered = nums.filter(num => num < 4);
// const filtered2 = panagram.filter(word => word.length % 2 === 0);
// console.log(filtered);
// console.log(filtered2);

// // .reduce method
// // add up all the numbers in the array
// const initialValue = 0;
// const sum = nums.reduce((accumulator, nums) => accumulator + nums, initialValue);
// console.log(sum);

// // concatenate all the words in the array
// const concat = panagram.reduce((accumulator, word) => accumulator + " " + word, "");
// console.log(concat);

// .sort() method
// nums.sort();
// panagram.sort();
// console.log(nums);
// console.log(panagram);

// log in acsending order
nums.sort((a, b) => a - b);
console.log(nums);

// log in descending order
nums.sort((a, b) => a - b).reverse();
console.log(nums);