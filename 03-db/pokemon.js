const express = require('express');
const app = express();

app.use(express.static('static'));

const parser = express.urlencoded( { extended: false } );
app.post('/savePokemon', parser, function(req, res) {
    insertPokemonCard(req.body.name, req.body.hp);
    res.end();
});

app.listen(3000, function(){
    console.log('Server started at http://localhost:3000');
});


// ----
// Funktioner
// ----
require('dotenv').config();
const mysql = require('mysql');
function createMysqlConnection() {
    return mysql.createConnection(
        {
            host: process.env.DB_HOST, 
            port: process.env.DB_PORT,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        }
    );    
}

function insertPokemonCard(name, hp) {
    const con = createMysqlConnection();
    con.connect(function(err) {
        if (err) throw err;
        console.log('Connected to database!');

        let sql = "INSERT INTO PokemonCards (name, hp) VALUES (?, ?)"; // <- SQL fråga 
        let data = [ name, hp]; // <- Data för placeholders
        con.query(sql, data, function(err, result) {
            if (err) throw err;
            console.log('Pokemon Card created');
            console.log(result);
            con.end();
        });
    });
}
