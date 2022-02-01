/**
 * Calc stuff
 */

const geo = require('./modules/geometry');
const num = require('./modules/num');

// console.log("geo", geo);

let radius = 4;

let area = geo.area(radius);
let approxArea = num.round(area, 8);

console.log(`The area of a circle with radius ${radius} is:`, area);
console.log(`The approx. area of a circle with radius ${radius} is:`, approxArea);

let circumference = geo.circumference(radius);
console.log(`The circumference of a circle with radius ${radius} is:`, circumference);

radius = 1337;
// let circ = geo.circumference(radius);
// let approxCirc = num.round(circ, 3);

let approxCirc = geo.approxCircumference(radius, 3);
console.log(`The approx. circumference of a circle with radius ${radius} is:`, approxCirc);
