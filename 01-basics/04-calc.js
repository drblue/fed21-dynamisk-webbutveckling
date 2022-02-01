/**
 * Calc stuff
 */

const geo = require('./modules/geometry');

// console.log("geo", geo);

let radius = 4;

let area = geo.area(radius);
// let approxArea = Math.round(area * 10) / 10;
// let approxArea = num.roundWith1Decimal(area); // * 10/10
// let approxArea = num.roundWith2Decimals(area); // * 100/100
// let approxArea = num.round(area, 4);

console.log(`The area of a circle with radius ${radius} is:`, area);
console.log(`The approx. area of a circle with radius ${radius} is:`, approxArea);

let circumference = geo.circumference(radius);
console.log(`The circumference of a circle with radius ${radius} is:`, circumference);
