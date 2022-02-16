const express = require('express');
const app = express();

// Använd static filer
app.use(express.static('static'));

// Ladda bodyParsers
app.use(express.json());
app.use(express.urlencoded( { extended: false } ));

app.use('/', require('./routes/index'));

app.listen(3000, () => {
    console.log('Server started at http://localhost:3000');
});