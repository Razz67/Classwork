// simple Dinner class that expects three parameters for setting up three properties
class Dinner {
	// the three parameters can be named whatever we like, but why not give them the same name as the property?
	constructor(appetizer, entree, dessert) {
		// when we say "this.appetizer" we are referring to a property of the current instance/object called "appetizer"
		// when we say " = appetizer" we are taking the parameter value and assigning it to the property of the same name
		this.appetizer = appetizer;
		this.entree = entree;
		this.dessert = dessert;
	}
}
// the Chef class is a factory of Dinner. We create a factory object/instance (ramsey) from it.
// this special object/instance (ramsey) will be in charge of creating dinners for us.
class Chef {
	// this is a special method that creates objects/instances of Dinner
	// we can create other objects (dinners) from within this one (chef)
	makeDinner(app, ent, des) {
		return new Dinner(app, ent, des);
	}
}
// we first create the factory object (the chef)
const ramsey = new Chef();
// and let the factory (the chef) do the work of making dinners
ramsey.makeDinner("fries", "pizza", "ice cream");
// how we make dinners without a factory (the chef)
// const dinner1 = new Dinner("fries", "pizza", "ice cream")
// const dinner2 = new Dinner("fish sticks", "kimchi", "flan") // returns the new object
console.log(dinner1);
console.log();
console.log(dinner2);
dinn