/**
 * Authentication Middleware
 */

const debug = require('debug')('books:auth');
const { User } = require('../models');

/**
 * HTTP Basic Authentication
 */
const basic = async (req, res, next) => {
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

	// if authSchema isn't "basic", then bail
	if (authSchema.toLowerCase() !== "basic") {
		debug("Authorization schema isn't basic");

		return res.status(401).send({
			status: 'fail',
			data: 'Authorization required',
		});
	}

	// decode payload from base64 => ascii
	const decodedPayload = Buffer.from(base64Payload, 'base64').toString('ascii');
	// decodedPayload = "username:password"

	// split decoded payload into "<username>:<password>"
	const [username, password] = decodedPayload.split(':');

	// check if a user with this username and password exists
	const user = await new User({ username, password }).fetch({ require: false });
	if (!user) {
		return res.status(401).send({
			status: 'fail',
			data: 'Authorization failed',
		});
	}

	// finally, attach user to request
	req.user = user;

	// pass request along
	next();
}

module.exports = {
	basic,
}
