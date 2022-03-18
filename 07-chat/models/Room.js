/**
 * Room Model
 */
const mongoose = require('mongoose');

// Declare Model Schema
const roomSchema = new mongoose.Schema({
	name: {
		type: String,
		trim: true,
		required: true,
	},
});

// Declare Model
const Room = mongoose.model('Room', roomSchema);

// Export Model
module.exports = Room;
