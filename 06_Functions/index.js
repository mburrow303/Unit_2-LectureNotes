/*
 Functions:
  - a block of code that performs a particular task
  - simplified  programs that run a task when *invoked*
*/

//  (1)   (2)
function hi() {
  // our block of code
  console.log("HI");
}

/*
Function Declaration

1 - keyword, this tells javascript we are making a function
2 - a name for our function, this can be anything we want, followed by parenthesis for parameters
*/

// (1)
let hey = function hi() {
  console.log("HI");
};

/*
Function Expression

 1 - the variable "hey" is now representing the function "hi"

 Expression vs Declaration
  expression do NOT get "hoisted"
  declaration DO get "hoisted"
*/

function hi() {
  console.log("HI");
}

// Invoking the function / AKA "calling" the function
hi();

// Our function does not get invoked if we do not use ()
// hi;
// let myName = "Jerome";
// myName;

let hello = function hi() {
  console.log("HI");
};

hello();

console.log(hello);
console.log(hello());

// Create a function that, when invoked, lists out the numbers 1-10

function counting() {
  // list the numbers from 1-10
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}

counting();

/*let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
} */

/*
can also use a while loop or a for of loop to solve the problem
*/

/* 

In JavaScript, we use camelCasing as our standard naming convention. However, there are some cases where it can be argued to use PascalCasing

PascalCasing: the first letter of the first word is capital, and the first letter of each subsequent word is capital

camelCasing: the first word is all lower case, and the first letter of subsequent words is capital

kebab-casing: has a hyphen - (or dash) between each word, all lowercase

snake_casing: has an underscore_between each word, all lowercase
*/

let challengeObject = {
  first: "This",
  second: "is",
  third: "really",
  fourth: "cool!",
};

// Given the object, print out each value individually using a function

function result() {
  console.log(challengeObject.first);
  console.log(challengeObject.second);
  console.log(challengeObject.third);
  console.log(challengeObject.fourth);
}

/*
function result() {
for (let property in challengeObject) {
  console.log(challengeObject[property]);
 }

 // Recursion - calling a function within itself - creates an infinite loop
 // result();
}
*/

result();

// Parameters & Arguments
//             1
function hi(nameInput) {
  console.log(`Hi, ${nameInput}`);
  //                      (2)
}

//     (3)
hi("Jamiroquai");
hi("Jack Black");

/*
  1 - parameter(s) that the function is accepting or holding
  2 - using string interpolation to refer to the value held in the parameter
  3 - this is where we give the function an "argument" which becomes the value of the parameter
*/

let register = function order(ticket) {
  console.log(`I exchanged my ticket for a ${ticket}`);
};

register("cheese pizza");
register("Taco Pack");

function myName(fName, lName) {
  let fullName = fName + " " + lName;
  console.log(`Hello, my name is ${fullName}`);
}

let firstName;
let lastName = "Wayne";

myName("Bruce", "Wayne"); // Bruce Wayne
myName("Bruce"); // Bruce undefined
myName(undefined, "Wayne"); // undefined Wayne
myName(firstName, lastName); // undefined Wayne

// Return

function myName(fName, lName) {
  let fullName = fName + " " + lName;
  console.log(`Hello, my name is ${fullName}`);
  // return - allow us to send information OUTSIDE of a function
  return fullName;
  // We are not allowed to run any code in a function after we return. Be careful of where and when we use this
  console.log("Testing the console.log"); // Doesn't run since after a return
}

let fullName = myName("Jerome", "Flaherty");

console.log("myName:", myName("Jerome", "Flaherty"));
console.log("fullName", fullName);

function capitalize(word) {
  // let word = "pReTzEl"
  let capName = "";
  for (let letter in word) {
    if (letter == 0) {
      capName += word[letter].toUpperCase();
    } else {
      capName += word[letter].toLowerCase();
    }
  }

  return capName;
}

let capital = capitalize("pReTzEl");
console.log(capital);
capital = capitalize("SoMEthinG elSE");
console.log(capital);

/*
  Challenge: Create a function that calculates tip on a bill, assuming a 20% tip. The function should take in a bill amount, and give back the amount of tip you should be paying based on the bill. 

  Stretch Goal: Change the function to take in not only the bill amount, but also what tip percentage you want to pay, then give you back how much money the tip should be
*/

function tip(cost) {
  // let tipNum = cost * 0.2;
  return cost * 0.2;
}

console.log(10);

function tip(cost, percentage) {
  // let tipNum = cost * percentage;
  return cost * (percentage / 100);
}

console.log(tip(100, 30));

function calcBill(bill) {
  let tipAmount = bill * 0.2;
  return tipAmount;
  // return bill * .2;
}

console.log("The tip is $ " + calcBill(100));

function calcBill(bill, percent) {
  let tipAmount = bill * (percent / 100);
  return tipAmount;
  // return bill * .2;
}

console.log("The tip is $ " + calcBill(100, 30));

// Arrow Function

// Function Expression
let hola = function hi() {
  console.log("HI");
};

// Block Body Arrow Function
let hallo = () => {
  console.log("HI");
};

hallo();

let tipCalc = (bill, percent) => {
  return bill * (percent / 100);
};

console.log(tipCalc(100, 20));

// if I have exactly one parameter, I do not NEED parenthesis
let greeting = (yourName) => {
  console.log("Hello! + yourName");
};

greeting("Matt");

// Block Body
let fiveSquared = () => {
  // I must have {} in order to make a clock body arrow function
  // this allows me to write as much code as I want
  let solution = 5 * 5;
  return solution;
};

console.log(fiveSquared());

// Concise Body
// has an *implied* return;
// you can only write one single line of code within a concise body arrow function
let sevenSquared = () => 7 * 7;

console.log(sevenSquared());
// 49

sevenSquared = () => console.log(7 * 7);

console.log(sevenSquared());
// gives us undefined as console.log() does not give us back a value to return
// 49 & Undefined

// IIFE
// Immediately Invoked Function Expression
// invoke a function as soon as it is read
(function ghostDog() {
  console.log("IIFE Invoked");
})();
// function does not need a name such as ghostDog as it is invoked immediately and not referenced later
