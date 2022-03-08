const messagesEl = document.querySelector('#messages'); // ul element containing all messages
const messageForm = document.querySelector('#message-form');
const messageEl = document.querySelector('#message');

const socket = io();

const addMessageToChat = message => {
	// create new `li` element
	const liEl = document.createElement('li');

	// set content of `li` element
	liEl.innerText = message;

	// append `li` element to `#messages`
	messagesEl.appendChild(liEl);

	// scroll `li` element into view
	liEl.scrollIntoView();
}

// listen for incoming messages
socket.on('chat:message', message => {
	console.log("Someone said something:", message);

	addMessageToChat(message);
});

// send message to server
messageForm.addEventListener('submit', e => {
	e.preventDefault();

	console.log("Someone submitted something:", messageEl.value);
	if (!messageEl.value) {
		return;
	}

	// send message to server
	socket.emit('chat:message', messageEl.value);

	// add message to chat
	addMessageToChat(messageEl.value);

	// clear message input element and focus
	messageEl.value = '';
	messageEl.focus();
});
