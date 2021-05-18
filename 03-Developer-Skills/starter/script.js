'use strict';
/*
const calcAge = birthYear => 2037 - birthYear;

console.log(calcAge(1991));

// Set a goal!
// specific, measurable, realistic and time-based
// Don't copy-paste code, understand it
// Reinforce newly learned code, try it and use it
// challenge yourself
// Practice, practice, practice
// You can always refactor code later
// Embrace the fact that you will never know everything
// Don't lose motivation!

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// Ignore error
// Find max and min value
// Subtract min from max and return the value

const calcTempAmplitude = function (temps) {
	let max = temps[0];
	let min = temps[0];

	for (let i = 0; i < temps.length; i++) {
		const curTemp = temps[i];
		if (typeof curTemp !== 'number') continue;

		if (temps[i] > max) max = curTemp;
		if (temps[i] < min) min = curTemp;
	}
	console.log(max, min);
	return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// Problem 2, same as 1 but accepts 2 arrays

const calcTempAmplitude2 = function (t1, t2) {
	const temps = t1.concat(t2);
	let max = temps[0];
	let min = temps[0];

	for (let i = 0; i < temps.length; i++) {
		const curTemp = temps[i];
		if (typeof curTemp !== 'number') continue;

		if (temps[i] > max) max = curTemp;
		if (temps[i] < min) min = curTemp;
	}
	console.log(max, min);
	return max - min;
};
const amplitude2 = calcTempAmplitude2([3, 5, 1], [9, 0, 5]);
console.log(amplitude2);
*/

// Debugging
/* const measureKelvin = function () {
	const measurement = {
		type: 'temp',
		unit: 'celsius',
		value: Number(prompt('Degrees celsius:')) // remember that prompt always returns a string, so we have to convert it to a number
	};
	console.log(measurement);
    console.table(measurement);
	const kelvin = measurement.value + 273;
	return kelvin;
};

console.log(measureKelvin());

// Using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
    const temps = t1.concat(t2);
	let max = 0;
	let min = 0;

	for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
		if (typeof curTemp !== 'number') continue;

		if (temps[i] > max) max = curTemp;
		if (temps[i] < min) min = curTemp;
	}
	console.log(max, min);
	return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
console.log(amplitudeBug);
*/