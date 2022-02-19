const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(express.static('static'));

app.use(morgan('dev'));  // combined, common, dev, short, tiny
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', require('./routes/index'));

app.listen(3000, () => {
    console.log('📙 Library Server started at http://localhost:8080');
});