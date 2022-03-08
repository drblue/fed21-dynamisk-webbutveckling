const messageForm = document.querySelector('#message-form');
const messageEl = document.querySelector('#message');

messageForm.addEventListener('submit', e => {
	e.preventDefault();

	console.log("Someone submitted something:", messageEl.value);
	if (!messageEl.value) {
		return;
	}

});
