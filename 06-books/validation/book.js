/**
 * Book Validation Rules
 */

const { body } = require('express-validator');
const models = require('../models');

/**
 * Create Book validation rules
 *
 * Required: title, author_id
 * Optional: isbn, pages
 */
const createRules = [
	body('title').exists().isLength({ min: 4 }),
	body('isbn').optional().isLength({ min: 10, max: 13 }),
	body('pages').optional().isInt({ min: 1 }),
	body('author_id').exists().bail().custom(async value => {
		const author = await new models.Author({ id: value }).fetch({ require: false });
		if (!author) {
			return Promise.reject(`Author with ID ${value} does not exist.`);
		}

		return Promise.resolve();
	}),
];

/**
 * Update Book validation rules
 *
 * Required: -
 * Optional: title, isbn, pages, author_id
 */
const updateRules = [
	body('title').optional().isLength({ min: 4 }),
	body('isbn').optional().isLength({ min: 10, max: 13 }),
	body('pages').optional().isInt({ min: 1 }),
	body('author_id').optional().custom(async value => {
		const author = await new models.Author({ id: value }).fetch({ require: false });
		if (!author) {
			return Promise.reject(`Author with ID ${value} does not exist.`);
		}

		return Promise.resolve();
	}),
];

module.exports = {
	createRules,
	updateRules,
}
