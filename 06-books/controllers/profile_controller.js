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
	res.status(405).send({
		status: 'error',
		message: 'This is a workshop.',
	});
}

/**
 * Get authenticated user's books
 *
 * GET /books
 */
const getBooks = async (req, res) => {
	res.status(405).send({
		status: 'error',
		message: 'This is a workshop.',
	});
}

module.exports = {
	getProfile,
	updateProfile,
	getBooks,
}
