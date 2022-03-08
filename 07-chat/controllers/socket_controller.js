/**
 * Socket Controller
 */

const debug = require('debug')('chat:socket_controller');

module.exports = function(socket) {
	debug('a new client has connected', socket.id);

	// handle user disconnect
	socket.on('disconnect', function() {
		debug(`Client ${this.id} disconnected :(`);
	});

	// handle user emitting a new message
	socket.on('chat:message', function(message) {
		debug('Someone said something: ', message);

		// emit `chat:message` event to everyone EXCEPT the sender
		this.broadcast.emit('chat:message', message);
	});
}
