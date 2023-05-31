var mysql = require('mysql2');

const dbConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database : 'prueba_tdd',
    password: "",
});

dbConnection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});



module.exports = {
    dbConnection
}