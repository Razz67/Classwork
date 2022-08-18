// Lab

//Part 1
// class Governer {
//     static staticProperty = "I am honest";
//     static  staticMethod() {
//         return "I am an American";
//     }

// }
// console.log(Governer.staticProperty);
// console.log(Governer.staticMethod());


// Part 2

// class Person {
// 	constructor(name, age, eyeColor) {
// 		this.name = name;
// 		this.age = age;
// 		this.eyeColor = eyeColor;
// 	}


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

// Part 3
class BankAccount {
	constructor(ownerName, balance, acctNum) {
		this.ownerName = ownerName;
		this.balance = balance;
		this.acctNum = acctNum;
	}
	deposit(depositAmt) {
		this.balance += depositAmt;
		console.log(
			"After your deposit of " +
				depositAmt +
				" your balance is: " +
				this.balance
		);
	}
	withdraw(withdrawAmt) {
		this.balance -= withdrawAmt;
		console.log(
			"After your withdrawl of " +
				withdrawAmt +
				" your balance is: " +
				this.balance
		);
	}
}

class checkingAccount extends BankAccount {
	constructor(ownerName, balance, acctNum, overdraftEnabled = true) {
		super(ownerName, balance, acctNum); //calls the constructor of the parent class(BankAccount)
		this.overdraftEnabled = overdraftEnabled;
	}
	withdraw(withdrawAmt) {
		if (this.overdraftEnabled && withdrawAmt > this.balance) {
			console.log("You are overdrafting");
			super.withdraw(withdrawAmt);
		} else {
			this.balance -= withdrawAmt;
			console.log(
				"You withdrew " + withdrawAmt + " your balance is: " + this.balance
			);
		}
	}
}

class savingsAccount extends BankAccount {
	constructor(ownerName, balance, acctNum, overdraftEnabled = false) {
		super(ownerName, balance, acctNum); //calls the constructor of the parent class(BankAccount)
		this.overdraftEnabled = overdraftEnabled;
	}
}

const razzAccnt = new BankAccount("Razz", 1000, "12345");

const razzChecking = new checkingAccount("Razz", 1000, "12345");

const razzSavings = new savingsAccount("Razz", 1000, "12345");

console.log(razzAccnt);
console.log(razzChecking);
console.log(razzSavings);
razzAccnt.deposit(100000);
razzAccnt.withdraw(1000);
