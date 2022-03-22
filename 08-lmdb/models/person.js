/**
 * Person Model
 */

const mongoose = require('mongoose');

// Declare Model Schema
const PersonSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true,
		minlength: 3,
	},
	gender: {
		type: String,
		default: null,
	},
	birthdate: {
		type: Date,
		default: null,
	},
	place_of_birth: {
		city: {
			type: String,
			default: null,
		},
		country: {
			type: String,
			default: null,
			minlength: 2,
			maxlength: 2,
		}
	},
	biography: {
		type: String,
		default: null,
		trim: true,
	},
});

// Declare and Export model
module.exports = mongoose.model('Person', PersonSchema);
