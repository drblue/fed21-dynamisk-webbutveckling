/**
 * User Controller
 */

const debug = require('debug')('books:user_controller');
const models = require('../models');

/**
 * Get all resources
 *
 * GET /
 */
const index = async (req, res) => {
	const all_users = await models.User.fetchAll();

	res.send({
		status: 'success',
		data: {
			users: all_users
		}
	});
}

/**
 * Get a specific resource
 *
 * GET /:userId
 */
const show = async (req, res) => {
	const user = await new models.User({ id: req.params.userId })
		.fetch({ withRelated: ['books'] });

	res.send({
		status: 'success',
		data: {
			user,
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
		username: req.body.username,
		password: req.body.password,
		first_name: req.body.first_name,
		last_name: req.body.last_name,
	};

	try {
		const user = await new models.User(data).save();
		debug("Created new user successfully: %O", user);

		res.send({
			status: 'success',
			data: {
				user,
			},
		});

	} catch (error) {
		res.status(500).send({
			status: 'error',
			message: 'Exception thrown in database when creating a new user.',
		});
		throw error;
	}
}

/**
 * Update a specific resource
 *
 * POST /:userId
 */
const update = async (req, res) => {
	const userId = req.params.userId;

	// make sure user exists
	const user = await new models.User({ id: userId }).fetch({ require: false });
	if (!user) {
		debug("User to update was not found. %o", { id: userId });
		res.status(404).send({
			status: 'fail',
			data: 'User Not Found',
		});
		return;
	}

	const data = {};

	// update password if part of the request
	if (req.body.password) {
		data.password = req.body.password;
	}

	// update first_name if part of the request
	if (req.body.first_name) {
		data.first_name = req.body.first_name;
	}

	// update last_name if part of the request
	if (req.body.last_name) {
		data.last_name = req.body.last_name;
	}

	try {
		const updatedUser = await user.save(data);
		debug("Updated user successfully: %O", updatedUser);

		res.send({
			status: 'success',
			data: {
				user,
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
 * Destroy a specific resource
 *
 * DELETE /:userId
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
