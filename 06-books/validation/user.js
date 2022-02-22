/**
 * User Validation Rules
 */

const { body } = require('express-validator');

const createRules = [
	body('username').exists().isLength({ min: 3 }),
	body('password').exists().isLength({ min: 4 }),
	body('first_name').exists().isLength({ min: 2 }),
	body('last_name').exists().isLength({ min: 2 }),
];

// allow only password, first_name, last_name to be updated, and only optionally
const updateRules = [

];

module.exports = {
	createRules,
	updateRules,
}
