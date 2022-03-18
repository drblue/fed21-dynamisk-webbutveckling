/**
 * Message Model
 */
const mongoose = require('mongoose');

// Declare Model Schema
const messageSchema = new mongoose.Schema({
	username: String,
	room: String,
	content: {
		type: String,
		trim: true,
	},
	timestamp: {
		type: Number,
		min: 1640995200000, // 2022-01-01T00:00:00+01:00
	},
	users: [String],
});

// Declare Model
const Message = mongoose.model('Message', messageSchema);

// Export Model
module.exports = Message;
