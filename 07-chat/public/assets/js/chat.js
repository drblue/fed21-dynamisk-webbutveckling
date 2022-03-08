const messageForm = document.querySelector('#message-form');
const messageEl = document.querySelector('#message');

const socket = io();

// listen for 'welcome' event
socket.on('welcome', (data) => {
	console.log("A welcome message was received:", data);
});

messageForm.addEventListener('submit', e => {
	e.preventDefault();

	console.log("Someone submitted something:", messageEl.value);
	if (!messageEl.value) {
		return;
	}

});
