// Conditionals are going to check and statement, and run code depending on whether that statement is true or false

/*
 Falsy Values: values that, when used in a boolean context, evaluate to "false"

  - false
  - 0 
  - '',"",`` (any empty string)
  - null
  - undefined
  - NaN (Not a Number)
*/

let isOn = true;

// if statement
if (isOn == true) {
// this block of code will run only if the statement evaluates to true
console.log('The light is on!');
}

 /*
  Structure:
  if (statement to evaluate) {
     code that runs if the statement is true
  }
 */ 

if (isOn) {
  console.log('The light is on!');
}


isOn = false;

if (isOn == false) {
  console.log('The light has turned off...');
}



/*
let weather = 85;
if (weather <= 70) {
  console.log("It's a nice day");
  } else {
  console.log('Maybe not time for a walk')
}
*/

let weather = 85;
let rain = false;
if (weather <= 70 || rain) {
  console.log("Wear a jacket");
} else {
  console.log('No jacket required')
}

// ! -> NOT (bang!) operator, we are checking whether this is not true, false is not true, meaning false == false -> true
if (!rain) { 
  console.log('Seems to be a clear day');
}


let myName = 'alex';
let targetName = 'matt';

if (myName !== "matt") {
  console.log('Hello, is your name ' + myName + '?');
} else {
  console.log('Hello, my name is ' + targetName);
}




let grade = 39;

if (grade >= 75) {
  console.log('passing');
} else if (grade >= 60) {
  console.log('please see the instructor or TAs');
} else if (grade > 40) {
  console.log('failing');
} else {
  console.log('need more information');
}



// let age = 50;

if (age <= 17) {
  console.log("Sorry you're too young to do anything");
} else if (age >= 18 && age < 21) {
  console.log('You can vote');
} else if (age >= 21 && age < 25) {
  console.log('You can drink');
} else if (age >= 25) {
  console.log('You can rent a car');
} 


// let age = 25;

if (age <= 17) {
  console.log("Sorry you're too young to do anything");
} else if (age < 21) {
  console.log('You can vote');
} else if (age < 25) {
  console.log('You can drink');
} else {
  console.log('You can rent a car');
} 
// This version runs the same code but is written better


let age = 26;

if (age >= 25) {
  console.log("You can rent a car");
} else if (age >= 21) {
  console.log('You can drink');
} else if (age >= 18) {
  console.log('You can vote');
} else {
  console.log('You are too young to do anything');
} 
// Written in reverse descending order

// Ternary
let num = 6;

num > 0 ? console.log('Yes') : console.log('No');

// If Statement - Longer version without ternary does the same thing (Only one line of code in ternary is the limitation)
if (num > 0) {
  console.log('Yes');
  console.log('Your Number is bigger than 0'); /*cant have multiple lines in ternary*/
} else {
  console.log('No');
}

// Ternary
let newNum = 7;

newNum == 0 ? console.log('Zero') : newNum > 0 ? console.log('Positive') : console.log('Negative');

// Else If Statement
// let newNum = 7;
if(newNum == 0) {
  console.log('Zero');
} else if (newNum > 0) {
  console.log('Positive');
} else {
  console.log('Negative');
}


// Switch Statement
let officeCharacter = "Pam";
// officeCharacter = officeCharacter.toLowerCase();

switch(officeCharacter) {
 // if officeCharacter === "Michael"
 case "Michael":
  console.log("My mind is going a mile an hour");
  break;
 case "Dwight":
  console.log("Perfectenshlag!");
  break; 
 case "Jim":
  console.log("Bears,Beets, Battlestar Galactica");
  break;
 // else { 
 default:
  console.log(`I'm sorry, ${officeCharacter}, but do I know you?`);
  // String Interpolation: when we can insert variables or other values into a string
  // made possible by using ``, and we have to write a ${} in order to insert information
}


let dessert = "pudding";

switch (dessert) {
 case "pie":
  console.log("Pie, pie, me oh my!");
  break;
 case "cake":
  console.log('Cake is great!');
  break;
 case "ice cream":
  console.log('I scream for ice cream!');
  break;
 default:
  console.log(`I'm sorry, ${dessert} is not on the menu`);
}


let myAge = 37;
// my age > 21
switch(true) {
  case myAge >= 25:
   console.log('You can rent a car');
   break;
  case myAge >= 21:
   console.log('You can drink');
   break;
  case myAge >= 18:
   console.log('You can vote');
   break;
  default:
   console.log('You are too young to do anything');    
}
// You can take out break statements to display multiple cases in console log






