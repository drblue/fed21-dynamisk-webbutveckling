/**
 * Models
 */

const debug = require('debug')('08-lmdb:models');
const mongoose = require('mongoose');

// Connect to database
mongoose.connect(process.env.DB_CONNECTION, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	// we're connected!
	debug("We're connected to MongoDB Atlas! 🥳");
});

// Set up the models we want to use in our app
const models = {};
models.Genre = require('./genre');
models.Movie = require('./movie');
models.Person = require('./person');

// Export all the things
module.exports = {
	mongoose,
	...models,
}
