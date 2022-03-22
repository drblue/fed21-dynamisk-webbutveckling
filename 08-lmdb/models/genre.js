/**
 * Genre Model
 */

const mongoose = require('mongoose');

// Declare Model Schema
const GenreSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true,
		minlength: 3,
	},
});

// Declare Model
const Genre = mongoose.model('Genre', GenreSchema);

// Export model
module.exports = Genre;
