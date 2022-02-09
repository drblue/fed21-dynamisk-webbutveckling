const express = require('express');
const app = express();

app.use(express.static('static'));

//app.get(URL, CALLBACK);
app.get('/bodyParser', function(req, res) {
    console.log('GET /bodyParser');
    console.log(req.query);  // Vid GET -- data i query
    console.log("Name = " + req.query.name);
    console.log("Profile = " + req.query.profile);
    res.send('OK'); // Skicka tillbaka ett svar
});

/*
const bodyParser = require('body-parser');
const urlEncodedBodyParser = bodyParser.urlencoded( { extended: false } ); 
*/

//app.post(URL, BODY PARSER, CALLBACK)
app.post('/bodyParser', express.urlencoded( { extended: false } ), function(req, res) {
    console.log(req.query); // Vid POST -- ingen data i query
    console.log(req.body); // Vid POST -- data i body OM man använder en bodyParser
    console.log("Name = " + req.body.name);
    console.log("Profile = " + req.body.profile);
    res.send('OK');
});

// curl -X POST http://localhost:3000/bodyParserJson -H 'Content-Type: application/json' -d '{"name":"martin","email":"martin@apiva.se"}'
app.post('/bodyParserJson', express.json(), function(req, res) {
    console.log(req.query); // Vid POST -- ingen data i query
    console.log(req.body); // Vid POST -- data i body OM man använder en bodyParser
    console.log("Name = " + req.body.name);
    console.log("Email = " + req.body.email);
    res.send('OK');
});

app.listen(3000, function(){
    console.log('Server started at http://localhost:3000');
});