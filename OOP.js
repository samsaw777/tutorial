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

// Hotel Booking System Code.
const Hotel = function (roomNumber, roomType, roomStatus) {
  this.roomNumber = roomNumber;
  this.roomType = roomType;
  this.roomStatus = roomStatus;
};

Hotel.prototype.checkHotelStatus = function () {
  if (this.roomStatus) {
    console.log("Room is already booked!");
  } else {
    console.log("Room is not booked!");
  }
};

Hotel.prototype.checkIn = function () {
  if (this.roomStatus) {
    console.log("Oops, this room is booked!");
  } else {
    this.roomStatus = true;
    console.log("Welcome to the Hotel,have a nice vacation!");
  }
};

Hotel.prototype.checkOut = function () {
  this.roomStatus = false;
  console.log("Thank you for the stay!");
};

const room1 = new Hotel(1, "single", false);
room1.checkHotelStatus();
room1.checkIn();
room1.checkHotelStatus();
room1.checkIn();
room1.checkOut();
room1.checkHotelStatus();

// setters and getters in an object.
const Card = {
  number: 1232,
  cardName: ["Sameep", "Jon", "Dejong"],

  get cardname() {
    return this.cardName.slice(0, 4);
  },

  set cardname(name) {
    this.cardName.push(name);
  },
};

console.log(Card.cardname);
Card.cardname = "Gavi";
console.log(Card.cardname);
