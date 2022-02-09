require('dotenv').config();
const mysql = require('mysql');
console.log(process.env);
const con = mysql.createConnection(
    {
        host: process.env.DB_HOST, // Hämta host från miljövariabel
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
);

con.connect(function(err) {
    if (err) {
        throw err;
    }
    console.log("Anslutit till databasen!! Party party!");

   // con.query(sql, placeholder data, callback);
   /*
   let sql = "INSERT INTO PokemonCards (name, hp) VALUES (?, ?)";
   let data = [ 'Talonflame', 130 ];
   con.query(sql, data, function(err, result){ 
        if (err) {
            throw err;
        }
        console.log(result);
   });
   */
   /*
   let sql = "INSERT INTO PokemonCards SET ?";  // -> INSERT INTO PokemonCards SET name = "Gourgeist", hp = 100;
   let data = {
       name: "Gourgeist",
       hp: 100
    };
    con.query(sql, data, function(err, result) {
        if(err) throw err;
        console.log(result);
    });
    */
    
    let sql = "SELECT id, name, hp FROM PokemonCards WHERE hp >= ?";
    let data = [ 100 ];
    con.query(sql, data, function(err, result) {
        if(err) throw err;
        console.log(result);
    });

});