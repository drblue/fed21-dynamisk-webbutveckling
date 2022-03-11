/**
 * Socket Controller
 */

const debug = require('debug')('chat:socket_controller');

let io = null; // socket.io server instance

// list of rooms and their connected users
const users = {}
const rooms = [
	{
		id: 'general',
		name: 'General',
		users: {},
	},
	{
		id: 'major',
		name: 'Major',
		users: {},
	},
	{
		id: 'sergant',
		name: 'Sergant',
		users: {},
	},
];

const handleDisconnect = function() {
	debug(`Client ${this.id} disconnected :(`);

	// let everyone connected know that user has disconnected
	this.broadcast.to().emit('user:disconnected', users[this.id]);

	// remove user from list of connected users
	delete users[this.id];
}

// Handle when a user has joined the chat
const handleUserJoined = function(username, room_id, callback) {
	debug(`User ${username} with socket id ${this.id} wants to join room '${room_id}'`);

	// join room
	this.join(room_id);

	// add socket to list of online users in this room
	// a) find room object with `id` === `general`
	const room = rooms.find(chatroom => chatroom.id === room_id)

	// b) add socket to room's `users` object
	room.users[this.id] = username;

	// let everyone know that someone has connected to the chat
	this.broadcast.to(room).emit('user:connected', username);

	// confirm join
	callback({
		success: true,
	});
}

const handleChatMessage = function(message) {
	debug('Someone said something: ', message);

	// emit `chat:message` event to everyone EXCEPT the sender
	this.broadcast.to(message.room).emit('chat:message', message);
}

module.exports = function(socket, _io) {
	io = _io;

	debug('a new client has connected', socket.id);

	io.emit("new-connection", "A new user connected");

	// handle user disconnect
	socket.on('disconnect', handleDisconnect);

	// handle user joined
	socket.on('user:joined', handleUserJoined);

	// handle user emitting a new message
	socket.on('chat:message', handleChatMessage);
}
