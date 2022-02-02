/**
 * express
 */

const express = require('express');
const app = express();

app.listen(3000, () => {
	console.log(`🥳 Yay, server started at http://localhost:3000`);
});
