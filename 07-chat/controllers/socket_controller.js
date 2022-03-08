/**
 * Socket Controller
 */

const debug = require('debug')('chat:socket_controller');

module.exports = function(socket) {
	debug('a new client has connected', socket.id);

	// broadcast that a new user has connected
	socket.broadcast.emit('user:connected');

	// handle user disconnect
	socket.on('disconnect', function() {
		debug(`Client ${this.id} disconnected :(`);

		this.broadcast.emit('user:disconnected');
	});

	// handle user emitting a new message
	socket.on('chat:message', function(message) {
		debug('Someone said something: ', message);

		// emit `chat:message` event to everyone EXCEPT the sender
		this.broadcast.emit('chat:message', message);
	});
}
