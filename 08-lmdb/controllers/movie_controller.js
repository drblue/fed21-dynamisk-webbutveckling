/**
 * Movie Controller
 */

const debug = require('debug')('08-lmdb:movie-controller');
const models = require('../models');

/**
 * Get all movies
 *
 * GET /
 */
const index = async (req, res) => {
	try {
		const movies = await models.Movie.find();

		return res.send({
			status: 'success',
			data: {
				movies,
			}
		});

	} catch (error) {
		debug(error);
		return res.status(500).send({
			status: 'error',
			message: error.message,
		});
	}
}

/**
 * Search for movies
 */
const search = async (req, res) => {
	const query = req.query.q;
	debug("Incoming search query: '%s'", query);

	const regExpQuery = new RegExp(query, 'i');

	// Search for query in movie-title
	const movies = await models.Movie.find({
		$or: [
			{ title: regExpQuery, },
			{ plot: regExpQuery, },
			{ original_title: regExpQuery, },
		],
	});

	return res.send({
		status: 'success',
		data: {
			movies,
		},
	});
}

/**
 * Get a movie
 *
 * GET /:movie
 */
const show = async (req, res) => {
	try {
		const movie = await models.Movie.findOne(getMovieFilter(req.params.movie))
			.populate('actors', 'name')
			.populate('director', 'name')
			.populate('genres');

		if (!movie) {
			return res.sendStatus(404);
		}

		return res.send({
			status: 'success',
			data: {
				movie,
			}
		});

	} catch (error) {
		debug(error);
		return res.status(500).send({
			status: 'error',
			message: error.message,
		});
	}
}

/**
 * Create a new movie
 *
 * POST /
 */
const store = async (req, res) => {
	try {
		const movie = await new models.Movie(req.body).save();

		return res.status(201).send({
			status: 'success',
			data: {
				movie,
			}
		});

	} catch (error) {
		debug(error);
		return res.status(500).send({
			status: 'error',
			message: error.message,
		});
	}
}

/**
 * Update a movie
 *
 * PUT /:movie
 */
const update = async (req, res) => {
	try {
		const movie = await models.Movie.findOneAndUpdate(
			getMovieFilter(req.params.movie),
			req.body,
			{ new: true }
		);

		if (!movie) {
			return res.sendStatus(404);
		}

		return res.send({
			status: 'success',
			data: {
				movie,
			}
		});

	} catch (error) {
		debug(error);
		return res.status(500).send({
			status: 'error',
			message: error.message,
		});
	}
}

/**
 * Delete a movie
 *
 * DELETE /:movie
 */
const destroy = async (req, res) => {
	try {
		const movie = await models.Movie.findOneAndRemove(getMovieFilter(req.params.movie));

		if (!movie) {
			return res.sendStatus(404);
		}

		return res.send({
			status: 'success',
			data: {
				movie,
			}
		});

	} catch (error) {
		debug(error);
		return res.status(500).send({
			status: 'error',
			message: error.message,
		});
	}
}

/**
 * Add actors to a movie
 *
 * POST /:movie/actors
 * {
 *   "people": ["5ed4cd8d7543355d1767aa0f"]
 * }
 */
const addActors = async (req, res) => {
	try {
		const people = req.body.people;

		const data = {
			$push: {
				actors: people,
			}
		}
		const movie = await models.Movie.findByIdAndUpdate(req.params.movieId, data, { new: true });

		if (!movie) {
			return res.sendStatus(404);
		}

		return res.send({
			status: 'success',
			data: {
				movie,
			}
		});

	} catch (error) {
		debug(error);
		return res.status(500).send({
			status: 'error',
			message: error.message,
		});
	}
}

/**
 * Remove an actor from a movie
 *
 * DELETE /:movie/actors/:personId
 */
const removeActor = async (req, res) => {
	try {
		const personId = req.params.personId;

		const data = {
			$pull: {
				actors: personId,
			}
		}
		const movie = await models.Movie.findByIdAndUpdate(req.params.movieId, data, { new: true });

		if (!movie) {
			return res.sendStatus(404);
		}

		return res.send({
			status: 'success',
			data: {
				movie,
			}
		});

	} catch (error) {
		debug(error);
		return res.status(500).send({
			status: 'error',
			message: error.message,
		});
	}
}

/**
 * Get movie filter
 *
 * If `movie` is a hexadecimal string of exactly 24 characters,
 * then search the `_id` attribute.
 * Otherwise, assume `movie` contains a slug and search the
 * `slug` attribute.
 */
const getMovieFilter = movie => {
	return (/^[0-9a-fA-F]{24}$/.test(movie))
		? { _id: movie }
		: { slug: movie };
}

module.exports = {
	index,
	search,
	show,
	store,
	update,
	destroy,
	addActors,
	removeActor,
}
