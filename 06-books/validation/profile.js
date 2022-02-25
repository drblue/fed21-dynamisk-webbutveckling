/**
 * Profile Validation Rules
 */

const { body } = require('express-validator');
const models = require('../models');

/**
 * Update Profile validation rules
 *
 * Required: -
 * Optional: password, first_name, last_name
 */
const updateRules = [
	body('password').optional().isLength({ min: 4 }),
	body('first_name').optional().isLength({ min: 2 }),
	body('last_name').optional().isLength({ min: 2 }),
];

/**
 * Add book to profile validation rules
 *
 * Required: book_id
 * Optional: -
 */
const addBookRules = [
	body('book_id').exists().bail().custom(async value => {
		const book = await new models.Book({ id: value }).fetch({ require: false });
		if (!book) {
			return Promise.reject(`Book with ID ${value} does not exist.`);
		}

		return Promise.resolve();
	}),
];

module.exports = {
	addBookRules,
	updateRules,
}
