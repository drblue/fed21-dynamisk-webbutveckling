/**
 * express
 */

const express = require('express');
const _ = require('lodash');
const path = require('path');
const app = express();
const oneliners = require('./data/oneliners.json');

// Inject logic to all incoming requests
app.use((req, res, next) => {
	console.log(`Incoming ${req.method} request for ${req.url}`);
	next();
});

// Respond to GET request for `/`
app.get('/', (req, res) => {
	res.send('Hello from the root.');
});

// Respond with current time
app.get('/now', (req, res) => {
	res.send(`The current time is ${new Date()}`);
})

// Respond with a random oneliner joke
app.get('/jokes', (req, res) => {
	// 1. Somehow read the JSON-contents of data/oneliners.json

	// 2. Get a random item from the array
	const oneliner = _.sample(oneliners);

	// 3. Respond with the item (`res.send(item)`)
	res.send(oneliner);
});

// Serve files from `/public` if no other route matches
app.use( express.static('public') );

// Start listening for incoming requests on port 3000
app.listen(3000, () => {
	console.log(`🥳 Yay, server started at http://localhost:3000`);
});
