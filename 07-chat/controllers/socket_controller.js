/**
 * Socket Controller
 */

const debug = require('debug')('chat:socket_controller');
const models = require('../models');

let io = null; // socket.io server instance

// list of rooms and their connected users
const users = {}
const rooms = [];

/**
 * Get rooms from database
 */
const getRooms = async () => {
	const res = await models.Room.find();
	res.forEach(room => {
		rooms.push({
			id: room._id.toString(),
			name: room.name,
			users: {},
		});
	})
	console.log(rooms);
}
getRooms();

/**
 * Get room by ID
 *
 * @param {String} id ID of Room to get
 * @returns
 */
const getRoomById = id => {
	return rooms.find(room => room.id === id)
}

/**
 * Get room by User ID
 *
 * @param {String} id Socket ID of User to get Room by
 * @returns
 */
const getRoomByUserId = id => {
	return rooms.find(chatroom => chatroom.users.hasOwnProperty(id));
}

const handleDisconnect = function() {
	debug(`Client ${this.id} disconnected :(`);

	// find the room that this socket is part of
	const room = getRoomByUserId(this.id);

	// if socket was not in a room, don't broadcast disconnect
	if (!room) {
		return;
	}

	// let everyone in the room know that this user has disconnected
	this.broadcast.to(room.id).emit('user:disconnected', room.users[this.id]);

	// remove user from list of users in that room
	delete room.users[this.id];

	// broadcast list of users in room to all connected sockets EXCEPT ourselves
	this.broadcast.to(room.id).emit('user:list', room.users);
}

// Handle when a user has joined the chat
const handleUserJoined = async function(username, room_id, callback) {
	debug(`User ${username} with socket id ${this.id} wants to join room '${room_id}'`);

	// join room
	this.join(room_id);

	// add socket to list of online users in this room
	// a) find room object with `id` === `general`
	const room = getRoomById(room_id);

	// b) add socket to room's `users` object
	room.users[this.id] = username;

	// let everyone know that someone has connected to the chat
	this.broadcast.to(room.id).emit('user:connected', username);

	// one hour ago
	const one_hour_ago = Date.now() - (1000 * 60 * 60)

	// get all messages from the database
	const messages = await models.Message
		// .find({ room: room.id })
		.where('room').equals(room.id) // same as the above `.find`-line
		.where('timestamp').gte(one_hour_ago); // you can chain `.where` and they work as AND

	// confirm join
	callback({
		success: true,
		roomName: room.name,
		messages,
		users: room.users
	});

	// broadcast list of users in room to all connected sockets EXCEPT ourselves
	this.broadcast.to(room.id).emit('user:list', room.users);
}

const handleGetRoomList = function(callback) {
	// generate a list of rooms with only their id and name
	const room_list = rooms.map(room => {
		return {
			id: room.id,
			name: room.name,
		}
	});

	// send list of rooms back to the client
	setTimeout(() => {
		callback(room_list);
	}, 1500);
}

const handleChatMessage = async function(data) {
	debug('Someone said something: ', data);

	const room = getRoomById(data.room);

	// emit `chat:message` event to everyone EXCEPT the sender
	this.broadcast.to(room.id).emit('chat:message', data);

	// save message in database
	try {
		const message = new models.Message({
			...data,
			users: Object.values(room.users),
		});
		await message.save();
	} catch (e) {
		debug("Could not save message in the database.", data);
		this.emit('chat:notice', { message: "Could not save your message in the database." });
	}
}

module.exports = function(socket, _io) {
	// save a reference to the socket.io server instance
	io = _io;

	debug('a new client has connected', socket.id);

	// handle user disconnect
	socket.on('disconnect', handleDisconnect);

	// handle user joined
	socket.on('user:joined', handleUserJoined);

	// handle get room list request
	socket.on('get-room-list', handleGetRoomList);

	// handle user emitting a new message
	socket.on('chat:message', handleChatMessage);
}
