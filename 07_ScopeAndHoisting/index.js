// Scope

// Global Scope: the entire file
// Local Scope: the current block of code

let x = 12;

function scope() {
  let x = 33;
  // start by looking for a local variable with that given name, then expand into the previous code block and search again
  console.log(x); // 33
}

scope();
console.log(x); // 12

let y = 12;

function scopeY() {
  y = 33; // redefining
  console.log(y); // 33
}

scopeY();
console.log(y); // 33


/*
 Variable Keywords:
 - var: scoped to the nearest function block
 - let: scoped to the nearest enclosing block
 - const: cannot be reassigned
*/

// VAR
var z = 12;

function varTest() {
  var z = 33;

  if (1 == 1) {
    var z = 45;
    console.log(`VAR - Within If: ${z}`); // 45
  }

  console.log(`VAR - Outside If: ${z}`); //  45
}

varTest();
console.log(`VAR - Outside Function: ${z}`); // 12


// LET 
let a = 12;

function letTest() {
  let a = 33;

  if(true) {
    let a = 45;
    console.log(`LET - Within If: ${a}`); // 45
  }

  console.log(`LET - Outside If: ${a}`); // 33  
}

letTest();
console.log(`LET - Outside Function: ${a}`); // 12


// CONST
// const follows the same block rules as let
const b = 12;

function letTest() {
  const b = 33;

  if(true) {
    const b = 45;
    console.log('CONST - Within If: ${b}'); //45
     }

     console.log('CONST - Outside If: ${b}'); // 33
}

letTest();
console.log('CONST - Outside Function: ${b}'); // 12


/*
HOISTING

When we write and run JavaScript, our file get read 2 times
 1. Loof for Variable Names, Functions and store those in memory
 2. Variables are assigned values, and we execute our code.

 Certain Values, such as let or const, do NOT get hoisted
*/
// var myName;

// A valid variable, automatically uses the "var" keyword
// myName = "Jerome";

console.log(myName);
let myName = "Jerome";
/*
 When I run both lines of this code, I am given a reference Error.cannot access myName before initilization
  - because myName is a "let" variable, my code knows it exists, however I have not yet declared or assigned it a value on line 104, so I get an error

 When I simply run the console.log(). I am given a reference Error. myName is not defined
  - this is because I do not have ANY variable named myName when I only run the console.log()
*/   

example();

// Function Declarations DO get hoisted, meaning I can call them higher within my file than I have defined them
function example() {
  // console.log(exampleVariable);
  // let exampleVariable = "something cool";
  console.log('Yes! I do get hoisted!');
}

// coolFunction();
// Function Expressions do NOT get hoisted, and follow the rules of whichever keyword was used (let)
let coolFunction = () => {
  console.log('This is a cool function!');
}

coolFunction();