const Person = function (firstName, lastName) {
  this.name = firstName;
  this.lastname = lastName;
};

Person.prototype.getName = function () {
  return this.name;
};

const variable = new Person("John", "Doe");

console.log(variable.__proto__.__proto__);

//coding challenge 1

const Car = function (carName, carSpeed) {
  this.carName = carName;
  this.carSpeed = carSpeed;
};

Car.prototype.increaseSpeed = function () {
  return (this.carSpeed += 10);
};

Car.prototype.decreaseSpeed = function () {
  return (this.carSpeed -= 105);
};

const car1 = new Car("BMW", 120);
const car2 = new Car("Mercedes", 70);

console.log(car1.carName);
console.log(car1.carSpeed);
console.log(car1.increaseSpeed());
console.log(car1.increaseSpeed());
console.log(car1.increaseSpeed());
console.log(car1.decreaseSpeed());
console.log(car2.carName);
console.log(car2.carSpeed);
console.log(car2.increaseSpeed());
console.log(car2.increaseSpeed());
console.log(car2.increaseSpeed());
console.log(car2.decreaseSpeed());
console.log(car2.decreaseSpeed());
console.log(car2.decreaseSpeed());
console.log(car2.decreaseSpeed());
console.log(car2.decreaseSpeed());

// Bank Account Challenge
const BankAccount = function () {
  this.balance = 1000;
};

//diposite an ammount
BankAccount.prototype.deposite = function (amount) {
  this.balance += amount;
  console.log(`Your account's balance is ${this.balance}`);
};

//retrive balance
BankAccount.prototype.getBalance = function () {
  console.log(`Your account's balance is ${this.balance}`);
};

//withdraw balance
BankAccount.prototype.withdraw = function (ammount) {
  if (this.balance <= 0 || ammount >= this.balance) {
    console.log("Not sufficient balance");
  } else {
    this.balance -= ammount;
    console.log(`Your account's balance is ${this.balance}`);
  }
};

const account1 = new BankAccount();
account1.getBalance();
account1.deposite(2000);
account1.withdraw(300);
