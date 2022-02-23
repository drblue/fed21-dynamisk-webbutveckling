/**
 * Authentication Middleware
 */

const debug = require('debug')('books:auth');
const { User } = require('../models');

/**
 * HTTP Basic Authentication
 */
const basic = (req, res, next) => {
	debug("Hello from auth.basic!");

	// make sure Authorization header exists, otherwise bail
	if (!req.headers.authorization) {
		debug("Authorization header missing");

		return res.status(401).send({
			status: 'fail',
			data: 'Authorization required',
		});
	}

	debug("Authorization header: %o", req.headers.authorization);

	// split header into "<authSchema> <base64Payload>"
	// "Basic cGVsbGU6c3ZhbnNsb3M="
	// =>
	// [0] = "Basic"
	// [1] = "cGVsbGU6c3ZhbnNsb3M="
	const [authSchema, base64Payload] = req.headers.authorization.split(' ');

	// if authSchema isn't "basic", then pass request along
	if (authSchema.toLowerCase() !== "basic") {
		// not ours to authenticate
		next();
	}

	// 🍜

	// pass request along
	next();
}

module.exports = {
	basic,
}
