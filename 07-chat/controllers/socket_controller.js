/**
 * Socket Controller
 */

const debug = require('debug')('chat:socket_controller');

// list of socket-ids and their username
const users = {};

const handleDisconnect = function() {
	debug(`Client ${socket.id} disconnected :(`);

	// let everyone connected know that user has disconnected
	this.broadcast.emit('user:disconnected', users[socket.id]);

	// remove user from list of connected users
	delete users[socket.id];
}

// Handle when a user has joined the chat
const handleUserJoined = function(username, callback) {
	// associate socket id with username
	users[socket.id] = username;

	debug(`User ${username} with socket id ${socket.id} joined`);

	// let everyone know that someone has connected to the chat
	socket.broadcast.emit('user:connected', username);

	// confirm join
	callback({
		success: true,
	});
}

const handleChatMessage = function(message) {
	debug('Someone said something: ', message);

	// emit `chat:message` event to everyone EXCEPT the sender
	this.broadcast.emit('chat:message', message);
}

module.exports = function(socket, io) {
	debug('a new client has connected', socket.id);

	io.emit("new-connection", "A new user connected");

	// handle user disconnect
	socket.on('disconnect', handleDisconnect);

	// handle user joined
	socket.on('user:joined', handleUserJoined);

	// handle user emitting a new message
	socket.on('chat:message', handleChatMessage);
}
