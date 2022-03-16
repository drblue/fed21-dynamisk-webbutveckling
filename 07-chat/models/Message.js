/**
 * Message Model
 */
const mongoose = require('mongoose');

// Declare Model Schema
const messageSchema = new mongoose.Schema({
	username: String,
	room: String,
	content: String,
	timestamp: Number,
});

// Declare Model
const Message = mongoose.model('Message', messageSchema);

// Export Model
module.exports = Message;
