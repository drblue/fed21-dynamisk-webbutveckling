/**
 * Models
 */

const debug = require('debug')('chat:models');
const mongoose = require('mongoose');

// Setting up the database connection
const connect = async () => {
	try {
		await mongoose.connect(process.env.DB_CONNECTION);
		debug("Successfully connected to MongoDB Atlas!");

	} catch (e) {
		debug("Error when trying to connect to MongoDB Atlas:", e);
		throw e;
	}
}

// Set up the models we want to use in our app
const models = {}
models.Message = require('./Message');
models.Room = require('./Room');

// Export all the things
module.exports = {
	connect,
	...models,
};
