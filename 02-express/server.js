/**
 * express
 */

const express = require('express');
const app = express();

// When a GET request for `/` (http://localhost:3000/) is received, run this function
app.get('/', (req, res) => {
	// req = information om den inkommande förfrågan
	// res = metoder för att skicka ett svar på förfrågan
	console.log("Someone requested my root!");

	res.send('😋🍽!');
});

// Start listening for incoming requests on port 3000
app.listen(3000, () => {
	console.log(`🥳 Yay, server started at http://localhost:3000`);
});
