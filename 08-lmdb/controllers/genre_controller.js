/**
 * Genre Controller
 */

const debug = require('debug')('08-lmdb:genre-controller')
const models = require('../models');

/**
 * Get all genres
 *
 * GET /
 */
const index = async (req, res) => {
	try {
		const genres = await models.Genre.find();

		res.send({
			status: 'success',
			data: {
				genres,
			}
		});

	} catch (error) {
		return res.status(500).send({
			status: 'error',
			message: 'Exception thrown when trying to get all genres.',
		});
	}
}

/**
 * Get a genre
 *
 * GET /:genreId
 */
const show = async (req, res) => {
	try {
		const genre = await models.Genre.findById(req.params.genreId);

		if (!genre) {
			res.sendStatus(404);
			return;
		}

		res.send({
			status: 'success',
			data: {
				genre,
			}
		});

	} catch (error) {
		return res.status(500).send({
			status: 'error',
			message: error.message,
		});
	}
}

/**
 * Create a new genre
 *
 * POST /
 */
const store = async (req, res) => {
	try {
		const genre = await new models.Genre(req.body).save();
		debug('New genre created: %j', req.body);

		res.status(201).send({
			status: 'success',
			data: {
				genre,
			}
		});

	} catch (error) {
		return res.status(500).send({
			status: 'error',
			message: error.message,
		});
	}
}

/**
 * Update a genre
 *
 * PUT /:genreId
 */
const update = async (req, res) => {
	try {
		const genre = await models.Genre.findByIdAndUpdate(req.params.genreId, req.body);

		if (!genre) {
			res.sendStatus(404);
			return;
		}

		res.send({
			status: 'success',
			data: {
				genre,
			}
		});

	} catch (error) {
		return res.status(500).send({
			status: 'error',
			message: error.message,
		});
	}
}

/**
 * Delete a genre
 *
 * DELETE /:genreId
 */
const destroy = async (req, res) => {
	try {
		const genre = await models.Genre.findByIdAndRemove(req.params.genreId);

		if (!genre) {
			res.sendStatus(404);
			return;
		}

		res.send({
			status: 'success',
			data: {
				genre,
			}
		});

	} catch (error) {
		return res.status(500).send({
			status: 'error',
			message: error.message,
		});
	}
}

module.exports = {
	index,
	show,
	store,
	update,
	destroy,
}
