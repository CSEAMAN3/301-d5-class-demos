"use strict";
console.log("Someone bring me an apple this is a Class");

// create an AnimalOne class
class AnimalOne {
  constructor() {
    this.type = "Tiger";
    this.color = "black and orange";
    this.age = 4;
  }
}

// declare a new instance of AnimalOne
let wildAnimal = new AnimalOne();
// console log to see the new instance that was created
console.log(wildAnimal);

// create an AnimalTwo class
class AnimalTwo {
  constructor() {
    this.type = props.type;
    this.color = props.color;
    this.age = props.age;
  }
}

// declare a new instance of AnimalTwo
// uncomment
// const reallyWildAnimal = new AnimalTwo();
// lets see what happens when we log to the console
// uncomment
// console.log(reallyWildAnimal.name);
// We get an error, we have not paresed any arguments we need to parse an object when we invoke the class.

const reallyWildAnimal = new AnimalTwo({ type: "Mole", color: "brown", age: 56 });
console.log(reallyWildAnimal.name);

const housePet = new AnimalTwo({ type: "Dog", color: "red", age: 6 });

// Demostrate Object.assign() method

class AnimalThree {
  constructor(props) {
    Object.assign(this, props);
  }
}

const anotherWildAnimal = new AnimalThree({ type: "Bat", color: "black", age: 1007 });
console.log(anotherWildAnimal);

// add a method to a class
class AnimalFour {
  constructor(props) {
    Object.assign(this, props);
  }
  speak() {
    console.log(this.sound);
  }
}

const goldFish = new AnimalFour({ name: "Goldfish", color: "gold", age: 1, sound: "bubble" });
goldFish.speak();

// demonstrate class inheritance

class Vehicle {
  constructor(props) {
    this.make = props.make;
    this.color = props.color;
    this.age = props.age;
  }
  vehicleNoise() {
    console.log("broom broom");
  }
}

class Van extends Vehicle {
  constructor(props, model, speed, payload) {
    super(props);
    this.model = model;
    this.speed = speed;
    this.payload = payload;
  }
  // van extends vehicle but also has
  // its own parameters/arguments and
  // can also have its own methods
  vanPayload = () => {
    console.log(`A ${this.make} ${this.type} has a payload of ${this.payload}`);
  };
  maxSpeed = () => {
    console.log(`A ${this.make} ${this.type} has a maximum speed of ${this.speed}mph`);
  };
}

const merc = new Van({ make: "Mercedes", color: "white", age: 10 }, "sprinter", 70, "3.5");
console.log(merc);
// invoke the Vehicle method on the van
merc.vehicleNoise();
// invoke the Van methods
merc.vanPayload();
merc.maxSpeed();

// lets look at functions

// function declaration
function myName(name) {
  return `Hey, my name is ${name}`;
}

// function expression
const theName = function (name) {
  return `what, my name is ${name}`;
};

// arrow function
const thatName = (name) => {
  return `huh, my name is ${name}`;
};
// re-write as one line
// const thatName = name => `huh, my name is ${name}`

myName("chka, chka, slim shady");
theName("chka, chka, slim shady");
thatName("chka, chka, slim shady");
