/**
 * Do all things geometry-related
 *
 * SUCH FUN!
 */

const { PI } = Math;
const num = require('./num');

// πr^2
const area = r => PI * r ** 2;

// 2πr
const circumference = r => 2 * PI * r;

const approxArea = (r, precision) => num.round(area(r), precision);
const approxCircumference = (r, precision) => num.round(circumference(r), precision);

// Export all the stuff!
module.exports = {
	area,
	circumference,
	approxArea,
	approxCircumference,
}
