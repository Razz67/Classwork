Classess

class Vehicle {
​
    // vin: 'X123Y',
    // make: 'Boeing'
​
    // constructor() {}
​
    constructor(vinParam, makeParam, modelParam) {
        this.vin = vinParam;
        this.make = makeParam;
        this.model = modelParam;
        this.running = false;
        // console.log('creating a new instance of Vehicle')
    }
​
​
    goVroom() {
        console.log('vroom!')
    }
​
    start() {
        this.running = true;
        console.log('running')
    }
    
    // toString() {
    //     return 'Vehicle (' + this.vin + ') is a ' +
    //         this.make + ' model ' + this.model;
    // }
​
    toString() {
        return 'Vehicle (' + this.vin + ') is a ' +
             this.make + ' model ' + this.model;
    }
​
​
}
​
// class Object { }
// class Vehicle { }
​
const toyota = new Vehicle('X123Y', 'Boeing', 'shine')
const tesla = new Vehicle()
​
// toyota.goVroom()
// tesla.goVroom()
​
// toyota.start()
// tesla.start()
​
// console.log(toyota, tesla)
​
let arr = [1,2,3]
let arr2 = new Array()
​
// arr.forEach()
​
console.log(toyota.toString())
