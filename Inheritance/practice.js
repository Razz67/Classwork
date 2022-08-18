// class Governer {
//     static staticProperty = "I am honest";
//     static  staticMethod() {
//         return "I am an American";
//     }

// }
// console.log(Governer.staticProperty);
// console.log(Governer.staticMethod());

// class Person {
// 	constructor(name, age, eyeColor) {
// 		this.name = name;
// 		this.age = age;
// 		this.eyeColor = eyeColor;
// 	}

// toString()
//sras}

// class PostalWorker extends Person {
// 	walks() {
// 		console.log("I deliver mail");
// 	}
// }

// class Chef extends Person {
// 	cooks() {
// 		console.log("I cook hot water");
// 	}
// 	cuts() {
// 		console.log("I can cut onions");
// 	}
// }
// const postalWorker1 = new PostalWorker("Sammie", 36, "Brown");

// const postalWorker2 = new PostalWorker("Charles", 45, "green");

// const chef1 = new Chef("Sammie", 36, "Brown");

// const chef2 = new Chef("Charles", 45, "green");

// console.log(postalWorker1);
// console.log(postalWorker2);
// console.log(chef1);
// console.log(chef2);

// chef1.cooks();
// postalWorker1.walks();


// given a string oe words, return the length of the shortest word(s)
// function findShortest(s) {
// 	let arr = s.split(' ');
// 	let shortest = arr[0].length;
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i].length < shortest) {
// 			shortest = arr[i].length;
// 		}
// 	}
// 	return shortest;
// }
// console.log(findShortest("The quick brown fox jumped over the lazy dog"), 3);

// given a string made up of letters a, b, and c. switch the positions of the letters a and b. leave c where it is.
// function switchPos(s) {
// 	let arr = s.split('');
// 	let temp = arr[0];
// 	arr[0] = arr[1];
// 	arr[1] = temp;
// 	return arr.join('');
// }
// console.log(switchPos("abc"));



function switcheroo(x) {
	
}