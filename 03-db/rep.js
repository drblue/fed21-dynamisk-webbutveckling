const mysql = require('mysql');

const setting = {
    host: "localhost",
    port: "13306",  // standard är 3306
    user: "root",
    password: "password", // i MAMP är detta root
    database: "Repetition"
};

const con = mysql.createConnection(setting);

con.connect(function(err){
    if(err) {
        throw err;
    }
    console.log('Nu har vi anslutit till databasen!');

    let sql = "SELECT id, make, type FROM Vehicles";
    con.query(sql, function(err, result) {
        if(err) {
            throw err;
        }

        console.log(result);

        con.end();
    });
});

console.log('Slutet!');