// Values & Variables
const country = 'Philippines';
const continent = 'Asia';
let population = 110;

// console.log(country);
// console.log(continent);
// used toLocaleString to display integer with commas
// console.log(population.toLocaleString());

// Data Types
const isIsland = true;
let language;
// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// let, const and var
language = 'Tagalog';

// Basic Operators

let halfPopulation = population / 2;
// console.log(halfPopulation);
population++;
// console.log(population);

let finlandPopulation = 6;
finlandComparison = population > finlandPopulation;
// console.log(finlandComparison);

let averagePopulation = 33;
averageComparison = population < averagePopulation;
// console.log(averageComparison);

// Strings and Template Literals
let description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
// console.log(description);

// Taking Decisions: if / else Statements
if (population > 33) {
	console.log(`${country}'s population is above average`);
} else {
	let belowAverage = 33 - population;
	console.log(
		`${country}'s population is ${belowAverage} million below average`
	);
}