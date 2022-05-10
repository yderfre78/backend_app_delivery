const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Andrew780828',
    database: 'flutter_delivery'
});

db.connect(function(err) {
    if (err) throw err;
    console.log('DATABASE CONNECTED!')
});

module.exports = db;