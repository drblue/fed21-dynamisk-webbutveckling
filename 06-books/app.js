const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const { body, matchedData, validationResult } = require('express-validator');

// instantiate express
const app = express();

// middlewares
app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/test', [
	body('name').exists().isLength({ min: 3 }),
	body('address').optional().isString().trim().isLength({ min: 6, max: 42 }),
], (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(422).send({ status: 'fail', data: errors.array() });
	}

	const validData = matchedData(req);

	res.send({ status: 'success', data: validData });
});

// routes
app.use(require('./routes'));

module.exports = app;
