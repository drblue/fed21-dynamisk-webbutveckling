/**
 * Author Validation Rules
 */

const { body } = require('express-validator');
const currentYear = (new Date).getFullYear();

/**
 * Create Author validation rules
 *
 * Required: first_name, last_name, birthyear
 * Optional: -
 */
const createRules = [
	body('first_name').exists().isLength({ min: 2 }),
	body('last_name').exists().isLength({ min: 2 }),
	body('birthyear').exists().isInt({ min: 1700, max: currentYear }),
];

/**
 * Update Author validation rules
 *
 * Required: -
 * Optional: first_name, last_name, birthyear
 */
const updateRules = [
	body('first_name').optional().isLength({ min: 2 }),
	body('last_name').optional().isLength({ min: 2 }),
	body('birthyear').optional().isInt({ min: 1700, max: currentYear }),
];

module.exports = {
	createRules,
	updateRules,
}
