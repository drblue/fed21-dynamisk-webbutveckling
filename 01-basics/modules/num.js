/**
 * Do fun stuff with numbers
 */

const roundWith1Decimal = num => Math.round(num * 10) / 10;  // 0,0
const roundWith2Decimals = num => Math.round(num * 10 ** 2) / 10 ** 2; // 0,00

const round = (num, precision) => Math.round(num * 10 ** precision) / 10 ** precision;  // num * 10^x

module.exports = {
	roundWith1Decimal,
	roundWith2Decimals,
	round,
}
