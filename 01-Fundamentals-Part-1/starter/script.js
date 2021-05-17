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

// Operator Precedence
let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

// Strings and Template Literals
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonas);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);

// Taking Decisions: if / else Statements
const age = 15;

if (age >= 18) {
	console.log('Sarah can start her driving license 🚗');
} else {
    const yearsLeft = 18 - age;
	console.log(`Sarah is too young. Wait another ${yearsLeft} years 😊`);
}

const birthYear = 2012;
let century;
if (birthYear <= 2000) {
	century = 20;
} else {
	century = 21;
}
console.log(century);

// Type Conversion and Coercion
// Type Conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23, '👌');

// Type Coercion
console.log('I am ' + 23 + ' years old'); // add operator triggers number conversion to string
console.log('23' - '10' - 3); // minus operator triggers string conversion to numbers
console.log('23' * '2', '23' / '2'); // same behavior as above
console.log('23' > '18'); // same behavior as above

// Truthy and Falsy Values
// 5 Falsy Values: 0, '', undefined, null, NaN
// will be converted to false when attempted to convert to boolean
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({})); // blank object
console.log(Boolean(''));

const money = 100;
if (money) {
    console.log("Don't spend it all 😉");
} else {
    console.log("You should get a job!");
}

let height;
if(height) { // since height is undefined, it's falsy and will be converted to false
    console.log('Yay! Height is defined 📏');
} else {
    console.log('Height is undefined ❌');
}

// Equality Operators
const age = '18';
if (age === 18) console.log('You just became an adult 😊 (strict)');
if (age == 18) console.log('You just became an adult 😊 (loose)');

const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
    console.log('Cool! 23 is an amazing number!');
} else if (favorite === 7) {
    console.log('7 is also a cool number!');
} else if (favorite === 9) {
    console.log('9 is also a cool number!');
} else {
    console.log('Number is not 23 or 7');
}

if (favorite !== 23) console.log('Why not 23?');

// Boolean Logic
const age = 16;
const varA = age >= 20; // false
const varB = age < 30; // true
console.log(varA, varB);

const checkNotA = varA !== true; // false is not true, therefore true
console.log(checkNotA);

const checkAAndB = varA && varB === true; // false and true are not true, therefore false
console.log(checkAAndB);

const checkAOrB = varA || varB === true; // true or true are true, therefore true
console.log(checkAOrB);

const checkNotAAndB = varA !== true && varB === true; // false is not true, and true, therefore true
console.log(checkNotAAndB);

const checkAOrNotB = varA === true && varB !== true; // false is not true, and true is not false, therefore false
console.log(checkAOrNotB);
*/

// Logical Operators
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive...');
// }

const isTired = true;
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}