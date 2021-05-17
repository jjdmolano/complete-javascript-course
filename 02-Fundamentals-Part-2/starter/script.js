'use strict'; // Activating Strict Mode
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive 😊');

const interface = 'Audio'; // interface and private are reserved words in strict mode
const private = 534;

// Functions
function logger() {
    console.log('My name is Jonas');
}

// calling / running / invoking function
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number(23);
console.log(num);

// Function Declarations vs. Expressions

// Function Declaration - can be used before it's declared
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(1991);

// Function Expression - essentially a function value stored in a variable
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2);

// Arrow Functions - great for quick one-line functions
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
	const retirement = 65 - age;
	// return retirement;
    return `${firstName} retires in ${retirement} years`
};

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));

// Functions Calling Other Functions

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
	const orangePieces = cutFruitPieces(oranges);

	const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
	return juice;
}

console.log(fruitProcessor(2, 3));

// Reviewing Functions
const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
	const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired 🎉`);
        return -1;
    }
};

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));

// Introduction to Arrays
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020); // non-literal way of creating arrays

console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

// Arrays can be mutated even if declared as const since only Primitive data types are immutable
friends[2] = 'Jay';
console.log(friends);

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);

const calcAge = function (birthYear) {
    return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const agesMap = years.map(year => calcAge(year));

console.log(agesMap);

// Array Methods

const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);
// unshift = add element at the first position
// pop = remove element at the last position
// shift = remove element at the first position
// indexOf = finds element and returns index number
console.log(friends.indexOf('Steven'));
// includes = finds element and returns boolean value
console.log(friends.includes('Steven'));

if (friends.includes('Steven')) {
    console.log('You have a friend named Steven');
}

// Introduction to Objects
const jonas = {
    firstName: 'Jonas',
	lastName: 'Schmedtmann',
	age: 2037 - 1991,
	job: 'teacher',
	friends: ['Michael', 'Peter', 'Steven']
};

console.log(jonas);
console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

// if(jonas[interestedIn]) {
    //     console.log(jonas[interestedIn]);
    // } else {
    //     console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
    // };

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

// Object Methods

const jonas = {
    firstName: 'Jonas',
	lastName: 'Schmedtmann',
	birthYear: 1991,
	job: 'teacher',
	friends: ['Michael', 'Peter', 'Steven'],
	hasDriversLicense: true,
	/* calcAge: birthYear => {
        return 2037 - birthYear;
	}
    calcAge: function () {
        console.log(this); // 'this' is the jonas object
		return 2037 - this.birthYear; // same as jonas.birthYear
        calcAge: function () {
            this.age = 2037 - this.birthYear;
            return this.age;
        },
        getSummary: function () {
            return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense? 'a': 'no'} driver's license`
        }
    };
}

console.log(jonas.calcAge());
console.log(jonas.age);

console.log(jonas.getSummary());

// The for Loop
for (let i = 1; i <= 10; i++) {
    console.log(`Lifting weights repetition ${i} 🏋️‍`);
};

// Looping Arrays, Breaking and Continuing
const jonas = [
    'Jonas',
	'Schmedtmann',
	2037 - 1991,
	'teacher',
	['Michael', 'Peter', 'Steven']
];
const types = [];

console.log(dice);
for (let i = 0; i < jonas.length; i++) {
    // console.log(jonas[i], typeof jonas[i]);
	// types[i] = typeof jonas[i];
	types.push(typeof jonas[i]);
};
*/

/* jonas.map(data => {
    console.log(data, typeof data);
    types.push(typeof data);
}); */ // map version of above for loop

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
// 	ages.push(2037 - years[i]);
// };
// // years.map(year => ages.push(2037 - year)) // map version of above for loop
// // console.log(ages);

// //continue and break
// console.log('=== ONLY STRINGS ===');
// for (let i = 0; i < jonas.length; i++) {
// 	if (typeof jonas[i] !== 'string') continue;
// 	console.log(jonas[i], typeof jonas[i]);
// };

// console.log('=== BREAK WITH NUMBER ===');
// for (let i = 0; i < jonas.length; i++) {
// 	if (typeof jonas[i] === 'number') break;
// 	console.log(jonas[i], typeof jonas[i]);
// };

// Looping Backwards and Loops in Loops

// const jonas = [
//     'Jonas',
// 	'Schmedtmann',
// 	2037 - 1991,
// 	'teacher',
// 	['Michael', 'Peter', 'Steven']
// ];

// for (let i = jonas.length -1; i >= 0; i--) {
//     console.log(i, jonas[i]);
// };

// for (let i = 1; i < 4; i++) {
//     console.log(`======= Starting Exercise ${i}`);
//     for (let j = 1; j < 6; i++) {
//         console.log(`Exercise ${i}: Lifting weight repetition ${j} 🏋️‍♂️`);
//     };
// };

// The while Loop
// let i = 1;
// while (i <= 10) {
//     console.log(`WHILE: Lifting weights repetition ${i} 🏋️‍`);
//     i++;
// };
/*
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
}
if (dice === 6) console.log('You rolled a 6!');
*/