/**
 * Author Controller
 */

const debug = require('debug')('books:author_controller');
const models = require('../models');

/**
 * Get all resources
 *
 * GET /
 */
const index = async (req, res) => {
	const all_authors = await models.Author.fetchAll();

	res.send({
		status: 'success',
		data: {
			authors: all_authors
		}
	});
}

/**
 * Get a specific resource
 *
 * GET /:authorId
 */
const show = async (req, res) => {
	const author = await new models.Author({ id: req.params.authorId })
		.fetch({ withRelated: ['books'] });

	res.send({
		status: 'success',
		data: {
			author,
		}
	});
}

/**
 * Store a new resource
 *
 * POST /
 */
const store = async (req, res) => {
	const data = {
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		birthyear: req.body.birthyear,
	};

	try {
		const author = await new models.Author(data).save();
		debug("Created new author successfully: %O", author);

		res.send({
			status: 'success',
			data: {
				author,
			},
		});

	} catch (error) {
		res.status(500).send({
			status: 'error',
			message: 'Exception thrown in database when creating a new author.',
		});
		throw error;
	}
}

/**
 * Update a specific resource
 *
 * POST /:authorId
 */
const update = (req, res) => {
	res.status(405).send({
		status: 'fail',
		message: 'Method Not Allowed.',
	});
}

/**
 * Destroy a specific resource
 *
 * DELETE /:authorId
 */
const destroy = (req, res) => {
	res.status(405).send({
		status: 'fail',
		message: 'Method Not Allowed.',
	});
}

module.exports = {
	index,
	show,
	store,
	update,
	destroy,
}
