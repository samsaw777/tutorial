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
