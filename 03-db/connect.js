const mysql = require('mysql');

const con = mysql.createConnection(
    {
        host: "localhost",
        port: "13306",
        user: "root",
        password: "password",
        database: "Pokemon"
    }
);

con.connect(function(err) {
    if (err) {
        throw err;
    }
    console.log("Anslutit till databasen!! Party party!");

    let sql = "SELECT id, name, hp FROM PokemonCards";
    sql = sql + " WHERE id = 2";

    con.query(sql, function(err, result) {
        if (err) {
            throw err;
        }
        console.log('Publiken vi har ett resultat!');
        console.log(result);
        /*
        result.forEach(r => {
            console.log('Pokmon har namnet ' + r.name + ' med hp till ' + r.hp);
        });
        
        for (var i=0;i<result.length;i++) {
            r = result[i];
            console.log('Pokmon har namnet ' + r.name + ' med hp till ' + r.hp);
        }
        */

        con.end();
    });
});

//console.log('Ställ fråga till MySQL!');