/**
 * Book Controller
 */

const debug = require('debug')('books:book_controller');
const models = require('../models');

/**
 * Get all resources
 *
 * GET /
 */
const index = async (req, res) => {
	const all_books = await models.Book.fetchAll();

	res.send({
		status: 'success',
		data: {
			books: all_books
		}
	});
}

/**
 * Get a specific resource
 *
 * GET /:bookId
 */
const show = async (req, res) => {
	const book = await new models.Book({ id: req.params.bookId })
		.fetch({ withRelated: ['author', 'users'] });

	res.send({
		status: 'success',
		data: {
			book,
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
		title: req.body.title,
		isbn: req.body.isbn,
		pages: req.body.pages,
		author_id: req.body.author_id,
	};

	try {
		const book = await new models.Book(data).save();
		debug("Created new book successfully: %O", book);

		res.send({
			status: 'success',
			data: {
				book,
			},
		});

	} catch (error) {
		res.status(500).send({
			status: 'error',
			message: 'Exception thrown in database when creating a new book.',
		});
		throw error;
	}
}

/**
 * Update a specific resource
 *
 * POST /:bookId
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
 * DELETE /:bookId
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
