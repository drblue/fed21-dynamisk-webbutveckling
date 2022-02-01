/**
 * Do all things geometry-related
 *
 * SUCH FUN!
 */

const { PI } = Math;

// πr^2
const area = r => PI * r ** 2;

// 2πr
const circumference = r => 2 * PI * r;

// Export all the stuff!
module.exports = {
	area,
	circumference,
}
