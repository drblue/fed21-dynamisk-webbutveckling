/**
 * User Validation Rules
 */

const { body } = require('express-validator');
const models = require('../models');

/**
 * Create User validation rules
 *
 * Required: username, password, first_name, last_name
 * Optional: -
 */
const createRules = [
	body('username').exists().isLength({ min: 3 }).custom(async value => {
		const user = await new models.User({ username: value }).fetch({ require: false });
		if (user) {
			return Promise.reject("Username already exists.");
		}

		return Promise.resolve();
	}),
	body('password').exists().isLength({ min: 4 }),
	body('first_name').exists().isLength({ min: 2 }),
	body('last_name').exists().isLength({ min: 2 }),
];

/**
 * Update User validation rules
 *
 * Required: -
 * Optional: password, first_name, last_name
 */
const updateRules = [
	body('password').optional().isLength({ min: 4 }),
	body('first_name').optional().isLength({ min: 2 }),
	body('last_name').optional().isLength({ min: 2 }),
];

module.exports = {
	createRules,
	updateRules,
}
