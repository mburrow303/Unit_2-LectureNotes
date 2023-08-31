// Loops

// loops are a block of code that will be repeated a number of times
/*
For
For In
For Of
*/

// for loop takes in 3 "parameters"
//       (1)      (2)    (3)
for (let i = 0; i < 10; i++) {
  // i++ is the same as writing i += 1
  console.log(i); // 0 1 2 3 4 5 6 7 8 9
}
/*
 1. initial expression - defining a starting point of our loop
 2. condition - giving us a stopping condition
 3. increment expression - this is going to change our initial value
*/

let e = 7;

for (e = 0; e < 10; e++) {
  console.log(e);
}

console.log('after the loop:', e);

// Class Challenge - using a for loop, count from 0-20, counting by 2's
for (let m = 0; m < 21; m+=2) {
 console.log(m);
}

for (let m = 0; m <= 20; m+=2) { // additional way
  console.log(m);
 }

for (let m = 0; m <= 20; m++) { // Additional way to complete the same challenge
  if (m % 2 === 0) {
    console.log(m);
  }
}

//              i < 10   
for (let i = 0; i > -10; i--) {
  console.log(i);
}

for (let i = 0; i > -25; i-= 2) {
  console.log(i);
}


// Exploring the Parameters
/*
for ( ; ; ) {

}
*/

let i = 7;

for (; i <= 15; i++) {
  console.log(i);
}


let m = -12;
//   variable; condition; increment
for ( ; m <= 0; )
 {
  console.log(m);

 if (m % 3 === 0) {
  m += 5;
 } else {
  m--;
 }
}


let L = 0;

for ( ; ; ) {
 if (L < 10) {
  console.log(L);
  L++;
 } else {
   break;
 }
}

for (let L = 0; L < 10; L++) { // Same result just written differently
  console.log(L);
}

// CHALLENGE: Using a for loop, add all numbers from 1 to 50, then display the result

let total = 0;

for (let m = 1; ; m++) {
  if(m <= 50) {
    total += m;
  } else {
    console.log(total);
    break;
  }
}

// Additional way to display the same challenge
let start = 0;

for (let m = 1; m <= 50; m++) {
  start += m;
}

console.log(start);


// For In
/*
For In loops are great for iterating over values in an object.  Properties in an object are whats called "enumerable"

"enumerable" just means "countable"
*/

let catDog = {
  name: "CatDog",
  cat: true,
  dog: true,
  legs: 4
}

for (let key in catDog) {
  console.log(key);
 // console.log(catDog.key);  // undefined
 console.log(catDog[key]);
}

//             0          1           2           3          4
let week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

for (let day in week) {
  console.log(day);
  console.log(week[day]);
}

//            012345
let myName = "Jerome"

for (let letter in myName) {
  //console.log(letter);
  console.log(myName[letter]);
}


// Challenge: write a for in loop that capitalizes the first letter of a name, and lowercases the rest of the name

let myName2 = "kObE"
let answer = ""
 
for (let char in myName2) {
 if (char == 0) {
  answer += myName2[char].toUpperCase;
 } else {
  answer = answer += myName2[char].toLowerCase;
 }
}

console.log(answer);


//Correct Answer
let theName = "dEnVeR";
let result = "";

for (let index in theName) {
    if (index == 0) {
    result += theName[index].toUpperCase();
  } else {
    result += theName[index].toLowerCase();
  }
}
console.log(result);


// For Of
/* 
 loop over the ITERABLE values of an object, this means the values we can access by using numbers
*/

let catDog_ = {
  name: "CatDog",
  cat: true,
  dog: true,
  legs: 4
}

/*
ERROR: Objects are not iterable
for (let item of catDog_) {
  console.log(item);
}
*/

let week_ = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

for (let day of week_) {
  console.log(day);
}

let myName_ = "Jerome F";
//             ["J", "e", "r", "o", "m", "e", " ", "F"]
//console.log(myName_[1]); e

for (let letter of myName_) {
  console.log(letter);
}


// While Loops

let city = ["building", "building", "building", "light pole", "tree", "empty street"];
 
let structure = city[0];
let position = 0;

while (structure != "empty street") {
  console.log(`Spider-Man is swinging from the ${structure}`);
  position++;
  structure = city[position];                                                      
}

console.log(`Spider-Man lands in the ${structure}`);


// Do While 
// Like a while loop, it will repeat code as long as a condition is true, HOWEVER it will always run at least once

let city_block = ["empty street", "building", "building", "building", "light pole", "tree", "empty street"];

do {
  console.log("Spider-Man");
} while (city_block[0] !== "empty street");




let spideyHP = 20;
let badGuys = [
  {
    baddie: "Green Goblin",
    hp: 15
  },
  {
    baddie: "Venom",
    hp: 25
  },
  {
    baddie: "Stilt-Man",
    hp: 5
  },
  {
    baddie: "Thug",
    hp: 0
  }
];
// 0.2 * 3 => 0.6 => 0
// 0.4 * 3 => 1.2 => 1
// 0.7 * 3 => 2.4 => 2
let rand = Math.floor(Math.random()* badGuys.length); // 0, 1, 2
let villain = badGuys[rand];
// console.log(villain);
console.log (`${villain.baddie} has appeared!`);

do {
  // The villain will hit Spider-Man
  // spider-man will take some damage, and we will print some text
  console.log(`${villain.baddie} hits Spider-Man`);
  spideyHP -= 1; // spideyHP--;
  console.log(`Spider-Man HP: ${spideyHP}`);

  // Spider-Man will hit the villain
  // we will roll random damage that spider-man will do to the villain
  let spideyHit = Math.floor(Math.random() * 3);
  console.log(`Spider-Man hits: ${villain.baddie} for ${spideyHit} damage !!!`);
  villain.hp -= spideyHit;
  console.log(`${villain.baddie} HP: ${villain.hp}`);

  //if Spider-Man loses his health before the villain does, exit the loop

  /*
  if (spideyHP === 0) {
    break;
  }
  */
} while (villain.hp > 0 && spideyHP > 0);

// display text either based on spider-man winning, or the villain being victorious
// say either "spidey captures <villain>" OR "<villain> has taken down spidey"
if (villain.hp <= 0) {
  console.log(`Spider-Man captures ${villain.baddie}`);
} else {
  console.log(`${villain.baddie} has taken down Spider-Man`);
}
