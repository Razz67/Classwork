class Car {
	constructor(maker, serialNumber) {
		this.maker = maker;
		this.serialNumber = serialNumber;
	}
	drive() {
        console.log("I'm Driving");
    }
}

class Factory {
	constructor(company) {
		this.company = company;
		this.cars = [];
	}

	generateCar() {
		const newCar = new Car(this.company, this.cars.length);
		this.cars.push(newCar);
		return this;
	}

	findCar(index) {
		return this.cars[index];
	}
}

// Singleton (only need one)
const tesla = new Factory("Tesla");

for (let i = 0; i < 100; i++) {
	tesla.generateCar();
}
console.log(tesla);
