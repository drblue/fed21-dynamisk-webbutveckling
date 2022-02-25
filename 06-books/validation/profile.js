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
	body('book_id').exists().isInt({ min: 1 }),
];

module.exports = {
	addBookRules,
	updateRules,
}
