/**
 * Person Controller
 */

const debug = require('debug')('08-lmdb:person-controller')
const models = require('../models');

/**
 * Get all people
 *
 * GET /
 */
const index = async (req, res) => {
	try {
		const people = await models.Person.find();

		res.send({
			status: 'success',
			data: {
				people,
			}
		});

	} catch (error) {
		res.status(500).send({
			status: 'error',
			message: 'Exception thrown when trying to get all people.',
		});
		throw error;
	}
}

/**
 * Get a person
 *
 * GET /:personId
 */
const show = async (req, res) => {
	try {
		const person = await models.Person.findById(req.params.personId);

		if (!person) {
			res.sendStatus(404);
			return;
		}

		// get movies where person is director
		const director_for = await models.Movie.find({ director: req.params.personId }, 'title');

		// get movies where person is actor
		const acting_in = await models.Movie.find({ actors: req.params.personId }, 'title');

		res.send({
			status: 'success',
			data: {
				person,
				director: {
					movies: director_for,
				},
				actor: {
					movies: acting_in,
				},
			}
		});

	} catch (error) {
		res.status(500).send({
			status: 'error',
			message: error.message,
		});
		throw error;
	}
}

/**
 * Create a new person
 *
 * POST /
 */
const store = async (req, res) => {
	try {
		const person = await new models.Person(req.body).save();
		debug('New person created: %j', req.body);

		res.status(201).send({
			status: 'success',
			data: {
				person,
			}
		});

	} catch (error) {
		res.status(500).send({
			status: 'error',
			message: error.message,
		});
		throw error;
	}
}

/**
 * Update a person
 *
 * PUT /:personId
 */
const update = async (req, res) => {
	try {
		const person = await models.Person.findByIdAndUpdate(req.params.personId, req.body, { new: true });

		if (!person) {
			res.sendStatus(404);
			return;
		}

		res.send({
			status: 'success',
			data: {
				person,
			}
		});

	} catch (error) {
		res.status(500).send({
			status: 'error',
			message: error.message,
		});
		throw error;
	}
}

/**
 * Delete a person
 *
 * DELETE /:personId
 */
const destroy = async (req, res) => {
	try {
		const person = await models.Person.findByIdAndRemove(req.params.personId);

		if (!person) {
			res.sendStatus(404);
			return;
		}

		res.send({
			status: 'success',
			data: {
				person,
			}
		});

	} catch (error) {
		res.status(500).send({
			status: 'error',
			message: error.message,
		});
		throw error;
	}
}

module.exports = {
	index,
	show,
	store,
	update,
	destroy,
}
