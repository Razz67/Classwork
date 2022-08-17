class Character {
    constructor (name, age, eyes, hair, lovesCats = true, lovesDogs) {
      this.legs = 2;
      this.arms = 2;
      this.name = name;
      this.age = age;
      this.eyes = eyes;
      this.hair = hair;
      this.lovesCats = lovesCats;
      this.lovesDogs = lovesDogs || false;  // short-circuit evaluation
      console.log('inside of Character constructor...')
    }
    greet (otherCharacter) {
      console.log('hi ' + otherCharacter + '!');
    }
    classyGreeting (otherClassyCharacter) {
      console.log('Howdy ' + otherClassyCharacter.name + '!');
    }
    setHair (hairColor) {
      this.hair = hairColor;
    }
    smite () {
      console.log('i smited thee.');
    }
  
  }
// child class and/or sub class
// use extend to inherit properties and methods 
// from parent and/or super class
class Hobbit extends Character {
    constructor(name, age, eyes, hair, height, weight) { // setup parameters...
        super(name, age, eyes, hair) // pass them as arguments...
        this.height = height
        this.weight = weight
        console.log('inside of Hobbit constructor...')
    }
    static steal() {
        console.log('woohoo!')
    }
    greet(name) {
        console.log('teeheee hi ' + name)
        super.smite()
        
    }
}
const frodo = new Hobbit('Frodo', 30, 'brown', 'black', 10, 100)
// console.log(frodo)
// frodo.greet('Sam')
