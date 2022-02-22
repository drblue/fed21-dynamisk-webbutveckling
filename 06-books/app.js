const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const { body, validationResult } = require('express-validator');

// instantiate express
const app = express();

// middlewares
app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/test', [
	body('name').exists().isLength({ min: 3 }),
], (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(422).send({ status: 'fail', data: errors.array() });
	}

	res.send({ status: 'success', data: req.body});
});

// routes
app.use(require('./routes'));

module.exports = app;
