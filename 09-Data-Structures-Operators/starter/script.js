'use strict';

// Data needed for a later exercise
const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
    [weekdays[3]]: {
        open: 12,
        close: 22,
    },
    [weekdays[4]]: {
        open: 11,
        close: 23,
    },
    [weekdays[5]]: {
        open: 0, // Open 24 hours
        close: 24,
    },
};

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    // ES6 enhanced object literals
    orderDelivery({
        starterIndex = 1,
        mainIndex = 0,
        time = '20:00',
        address,
    }) {
        console.log(
            `Order received! ${this.starterMenu[starterIndex]}, and ${this.mainMenu[mainIndex]}, will be delivered to ${address} at ${time}`
        );
    },

    orderPasta(ing1, ing2, ing3) {
        console.log(
            `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
        );
    },

    orderPizza(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    },
    openingHours,
};

// // Array Destructuring
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // Switching variables
// [main, secondary] = [secondary, main];
// // console.log(main, secondary);

// // Returning multiple variables in one function call
// const [starter, mainCourse] = restaurant.order(2, 0);
// // console.log(starter, mainCourse);

// // Nested destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, ,j] = nested;
// // console.log(i, j);

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Setting default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// // Object Destructuring
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//     name: restaurantName,
//     openingHours: hours,
//     categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating Variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// // Nested objects
// const {
//     fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// restaurant.orderDelivery({
//     time: '22:30',
//     address: 'Via del Sole, 21',
//     mainIndex: 2,
//     starterIndex: 2,
// });

// restaurant.orderDelivery({
//     address: 'Via del Sole, 21',
//     starterIndex: 1,
// });

// // Spread Operator
// const arr = [7, 8, 9];
// const arr2 = [4, 5, 6];
// const newArr = [1, 2, ...arr];
// // console.log(newArr);
// // console.log(...newArr);
// const newArr2 = [...arr, ...arr2];
// // console.log(newArr2);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// // console.log(newMenu);

// // Copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// // Join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// // console.log(menu);

// // Iterables: arrays, strings, maps, sets. NOT objects
// const str = 'Jonas';
// const letters = [...str, ' ', 'S.'];
// // console.log(letters);
// // console.log(...str);

// // const ingredients = [prompt("Let's make pasta! Ingredient 1?"), prompt("Let's make pasta! Ingredient 2?"), prompt("Let's make pasta! Ingredient 3?")];

// // restaurant.orderPasta(...ingredients);

// // SPREAD, because on RIGHT side of =
// const arr = [1, 2, ...[3, 4]];

// // REST, because on LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// // console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//     ...restaurant.mainMenu,
//     ...restaurant.starterMenu,
// ];
// // console.log(pizza, risotto, otherFood);

// // Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// // console.log(weekdays);

// // Functions
// const add = function (...numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }
//     console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms');

// // Short-circuiting
// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// // Nullish: null and undefined (NOT 0 or '')
// restaurant.numGuests = 0;
// const guests = restaurant.numGuests ?? 10;
// console.log(guests);

// // The for-of loop
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);
// // menu.map(item => console.log(item)); // map version

// for (const [i, el] of menu.entries()) {
//     console.log(`${i + 1}: ${el}`);
// }

// if (restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// // WITH optional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// // Example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//     console.log(day);
//     const open = restaurant.openingHours[day]?.open ?? 'closed';
//     console.log(`On ${day}, we open at ${open}`);
// }

// // Methods
// console.log(restaurant.order?.(0,1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0,1) ?? 'Method does not exist');

// // Arrays
// const users = [{ name: 'Jonas', email: 'hello@jonas.io'}];
// console.log(users[0]?.name ?? 'User array empty');

// // Property NAMES
// const properties = Object.keys(openingHours);
// console.log(properties);
// let openStr = `We are open on ${properties.length} days: `;
// for (const day of properties) {
//     openStr += `${day}, `;
// }
// console.log(openStr);

// // Property VALUES
// const values = Object.values(openingHours);
// console.log(values);

// // Entire object
// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [key, { open, close }] of entries) {
//     console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

// // Sets
// const ordersSet = new Set([
//     'Pasta',
//     'Pizza',
//     'Pizza',
//     'Risotto',
//     'Pasta',
//     'Pizza',
// ]);
// console.log(ordersSet);
// console.log(new Set('Jonas'));
// console.log(ordersSet.size);
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread'));
// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');
// console.log(ordersSet);

// for (const order of ordersSet) console.log(order);

// // Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique =[...new Set(staff)];
// console.log(staffUnique);
// console.log(new Set(staff).size);

// console.log(new Set('jonasschmedtmann').size);

// // Maps
// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon, Portugal'));

// rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']).set('open', 11).set('close', 23).set(true, 'We are open 😊').set(false, 'We are closed 😢')

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// console.log(rest);
// console.log(rest.size);

// const question = new Map([
//     ['question', 'What is the best programming language in the world?'],
//     [1, 'C'],
//     [2, 'Java'],
//     [3, 'Javascript'],
//     ['correct', 3],
//     [true, 'Correct ✔'],
//     [false, 'Try again! ❌']
// ]);
// console.log(question);

// // Convert object to map
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// // Quiz app
// console.log(question.get('question'));
// for (const [key, value] of question) {
//     if(typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// // const answer = Number(prompt('Your answer?'));
// // console.log(answer);
// // console.log(question.get(question.get('correct') === answer));

// // Convert map to array
// console.log([...question]);
// console.log([...question.keys()]);
// console.log([...question.values()]);

// const airline = 'TAP Air Portugal';
// const plane = 'A320';
// console.log('B737'[0]);
// console.log(airline.length);
// console.log('B737'.length);
// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Air'));
// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));
// const newAir = airline.slice(4);
// console.log(newAir);
// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));
// console.log(airline.slice(airline.indexOf(' ') + 1, airline.lastIndexOf(' ')));
// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//     // B and E are middle seats
//     const s = seat.slice(-1);
//     if (s === 'B' || s === 'E') console.log('You got the middle seat 😢');
//     else console.log('You got lucky 😎');
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// const airline = 'TAP Air Portugal';
// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());
// console.log('Jonas'.toUpperCase());

// // Fix capitalization in name
// const passenger = 'jOnAS'; // Jonas
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// // Comparing emails
// const email = 'hello@jonas.io';
// const loginEmail = '    Hello@jonas.io \n';
// // const lowerEmail = loginEmail.toLowerCase();
// // const trimmedEmail = lowerEmail.trim();
// // console.log(trimmedEmail);

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// // Replacing parts of strings
// const priceGB = '288,97£';
// const priceUS = priceGB.replace('£','$').replace(',','.');
// console.log(priceUS);

// const announcement = 'All passengers come to boarding door 23. Boarding door 23!';
// console.log(announcement.replaceAll('door','gate'));
// console.log(announcement.replace(/door/g,'gate'));

// // Booleans
// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('Boeing'));
// console.log(plane.startsWith('Air'));

// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//     console.log('Part of the NEW Airbus family');
// }

// // Practice exercise
// const checkBaggage = function(items) {
//     const baggage = items.toLowerCase();
//     if (baggage.includes('knife') || baggage.includes('gun')) {
//         console.log('You are NOT allowed on board ❌');
//     } else {
//         console.log('Welcome aboard! ✈');
//     }
// };

// checkBaggage('I have a laptop, some Food and a pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');

// console.log('a+very+nice+string'.split('+'));
// console.log('Jonas Schmedtmann'.split(' '));

// const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');
// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitalizeName = function (name) {
//     const names = name.split(' ');
//     const namesUpper = [];

//     for (const n of names) {
//         // namesUpper.push(n[0].toUpperCase() + n.slice(1))
//         namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//     }
//     console.log(namesUpper.join(' '));
// };

// capitalizeName('jessica ann smith davis');
// capitalizeName('jonas schmedtmann');

// // Padding
// const message = 'Go to gate 23!';
// console.log(message.padStart(25, '+').padEnd(35,'+'));
// console.log('Jonas'.padStart(25, '+'));

// const maskCreditCard = function(number) {
//     const str = number + '';
//     const last = str.slice(-4);
//     return last.padStart(str.length, '*');
// }

// console.log(maskCreditCard(12312098));
// console.log(maskCreditCard(4332233591824792));
// console.log(maskCreditCard('3247823947982105738934798'));

// // Repeat
// const message2 = 'Bad Weather. All Departures Delayed.';
// console.log(message2.repeat(5));

// const planesInLine = function(n) {
//     console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
// }

// planesInLine(5);
// planesInLine(3);
// planesInLine(12);

// #1 PARTIALLY DONE
// function solution(A, B) {
//     const numberCheck =
//         typeof A === 'number' && typeof B === 'number' ? true : false;
//     const invalid = -1;
//     const regExA = new RegExp(A);
//     const strB = B.toString();
//     const strBMatch = strB.search(regExA);
//     return numberCheck ? strBMatch : invalid;
// }

// solution(78, 195378678);

// #2 DONE
// function solution(S, A) {
//     const check = typeof S === 'string' && A instanceof Array ? true : false;
//     const invalid = 'Invalid input!';
//     const arrS = [...S];
//     const mergedSA = [];
//     const message = [];
//     let currentPerson = 0;
//     //  A0 = S0(C) > A3 = S3(O) > A1 = S1(D) > A2 = S2(E) > A0
//     // console.log(arrS);
//     for (let i = 0; i < A.length; i++) {
//         mergedSA.push({ letter: arrS[i], nextPerson: A[i] });
//     }

//     do {
//         message.push(mergedSA[currentPerson].letter);
//         currentPerson = mergedSA[currentPerson].nextPerson;
//     } while (mergedSA[currentPerson].nextPerson !== 0);
//     mergedSA[currentPerson].nextPerson === 0 ? message.push(mergedSA[currentPerson].letter) : -1;

//     console.log(message);
//     const finishedMessage = message.toString().replace(/,/g,'');
//     console.log(finishedMessage);

//     const answer = finishedMessage;
//     return check ? answer : invalid;
// }

// solution('cdeo', [3, 2, 0, 1]);
// solution('cdeenetpi', [5, 2, 0, 1, 6, 4, 8, 3, 7]);
// solution('bytdag', [4, 3, 0, 1, 2, 5]);

// #3 DONE
// function solution(A) {
//     const treeDiffs = [];
//     const notAestheticTreeIndex = [];

//     for (let i = 0; i < A.length - 1; i++) {
//         treeDiffs.push(A[i + 1] - A[i]);
//     }
//     for (let i = 0; i < A.length - 1; i++) {
//         A[i + 1] -1 === A[i] || A[i] - 1 === A[i - 1]  ? notAestheticTreeIndex.push(i) : -1;
//     }

//     const removedDupes = new Set(notAestheticTreeIndex);

//     const preResult = notAestheticTreeIndex.length === treeDiffs.length ? -1 : removedDupes.size;
//     const result = preResult == 1 ? 0 : preResult;
//     return result;
// }
// console.log(solution([3, 4, 5, 3, 7]));
// console.log(solution([1, 2, 3, 4]));
// console.log(solution([1, 3, 1, 2]));

// #4 DONE
// function solution(S) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     const check = typeof S === 'string' ? true : false;
//     const invalid = 'Invalid input!';
//     const reg = /\.|\?|\!/g;
//     const answer = S
//         .replace('  ', ' ')
//         .split(reg).map(string => string.trim().split(' '))
//         .map(arr => arr.length)
//         .reduce((acc, str) => (acc = acc > str ? acc : str));
//     return check ? answer : invalid;
// }

// solution('We test coders. Give us a try?');
// solution('Forget CVs..Savetime . x x');

// #5
// function solution(A) {
//     const N = A.length;
//     let result = 0;
//     var i, j;
//     // for (i = 0; i < N; i++)
//     //     for (j = 0; j < N; j++)
//     //         if (A[i] == A[j])
//     //             result = Math.max(result, Math.abs(i - j));

//     for (i = 0; i < N; i++)
//         for (j = 0; j < N; j++)
//             A[i] === A[j] ? result = Math.max(result, Math.abs(i - j)) : null;
//     console.log(result);
// }

// solution([4, 6, 2, 2, 6, 6, 1]);

// #6 DONE
// function solution(A) {
//     const velocity = [];
//     let stableCount = 0;

//     for(let i = 0; i < A.length - 1; i++) {
//         velocity.push(A[i + 1] - A[i]);
//     }

//     for(let i = 0; i < velocity.length - 1; i++) {
//         velocity[i + 1] === velocity[i] ? stableCount++ : -1;
//     }

//     for(let i = 0; i < velocity.length - 1; i++) {
//         velocity[i + 1] === velocity[i] && velocity[i + 2] === velocity[i] ? stableCount++ : -1;
//     }

//     return result = stableCount <= 1000000000 ? stableCount : -1;
// }

// console.log(solution([-1, 1, 3, 3, 3, 2, 3, 2, 1, 0]));
