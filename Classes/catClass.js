// class Cat {
//     constructor(name, legs, color) {
//         this.name = name;
//         this.legs = legs;
//         this.color - color;
//     }

//     purr() {
//         console.log("I am Purring");
//     }

//     walking() {
//         console.log("I am walking");
//     }

//     eating() {
//         console.log("I am eating");
//     }
// }

//     const coolCat = new Cat("Charlie", 4, "Orange");
//     const badCat = new Cat("Odin", 2, "Blue");

// console.log(coolCat, badCat);
// coolCat.walking();
// badCat.eating();


// class Truck and create 100 instances of the Truck class
// class Truck {
//     constructor(make, model, year, color, bedSize, bedLength) {
//         this.make = make;
//         this.model = model;
//         this.year = year;
//         this.color = color;
//         this.bedSize = bedSize;
//         this.bedLength = bedLength;
//     }
// }

// class called vehicle and create 100 instances of the vehicle class and deliver them in an array called freight
class Vehicle {
    constructor(make, model, year, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }
}

class Freight extends Vehicle {
    constructor(make, model, year, color, bedSize, bedLength) {
        super(make, model, year, color);
        this.bedSize = bedSize;
        this.bedLength = bedLength;
    }
}

const freight = [];
for (let i = 0; i < 100; i++) {
    freight.push(new Freight("Ford", "F-150", "2018", "Red", "Large", "Long"));
}

console.log(freight);

