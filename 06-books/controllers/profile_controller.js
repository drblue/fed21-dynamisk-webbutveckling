/**
 * Profile Controller
 */

const debug = require('debug')('books:profile_controller');
const { matchedData, validationResult } = require('express-validator');
const models = require('../models');

/**
 * Get authenticated user's profile
 *
 * GET /
 */
const getProfile = async (req, res) => {
	res.send({
		status: 'success',
		data: {
			user: req.user,
		}
	});
}

/**
 * Update authenticated user's profile
 *
 * PUT /
 */
const updateProfile = async (req, res) => {
	// check for any validation errors
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(422).send({ status: 'fail', data: errors.array() });
	}

	// get only the validated data from the request
	const validData = matchedData(req);

	try {
		const updatedUser = await req.user.save(validData);
		debug("Updated user successfully: %O", updatedUser);

		res.send({
			status: 'success',
			data: {
				user: updatedUser,
			},
		});

	} catch (error) {
		res.status(500).send({
			status: 'error',
			message: 'Exception thrown in database when updating a new user.',
		});
		throw error;
	}
}

/**
 * Get authenticated user's books
 *
 * GET /books
 */
const getBooks = async (req, res) => {
	// get user and also eager-load the books-relation
	// const user = await new models.User({ id: req.user.id })
	// 	.fetch({ withRelated: ['books'] });

	// "lazy load" the books-relation
	await req.user.load('books');

	res.status(200).send({
		status: 'success',
		data: {
			books: req.user.related('books'),
		},
	});
}

module.exports = {
	getProfile,
	updateProfile,
	getBooks,
}
