/* let js = 'amazing';
// if(js === 'amazing') alert('Javascript is fun!');
let eq = 40 + 8 + 23 - 10;
console.log(eq);

console.log('Jonas');
console.log(23);

// Values and Variables
let firstName = 'Matilda';
console.log(firstName);

// variables can start with or include: $ or _
let $function = 27;
let jonas_matilda = 'JM';
let person = 'jonas';
let PI = 3.1415;

// variables should be descriptive for easier code readability
let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';
console.log(myFirstJob);

let javascriptIsFun = true;
console.log(javascriptIsFun);

// Data Types
// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

// let const and var
let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);
console.log(typeof null);

let age = 30;
age = 31;

const birthYear = 1991;

var job = 'programmer';
job = 'teacher';

lastName = 'Molano';
console.log(lastName);
*/

// Basic Operators
// Math Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2
const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + " " + lastName);
console.log(`${firstName} ${lastName}`); //Template Literal version

// Assignment Operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x  = x + 1
x--; // x = x - 1
x--;
console.log(x);

// Comparison Operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);