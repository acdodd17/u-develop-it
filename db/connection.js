//import mysql
const mysql = require('mysql2');

//connect to database
const db = mysql.createConnection(
    {
        host: 'localhost', 
        user: 'root', 
        password:'MySQLacdr@tt3rr331713!', 
        database: 'election'
    }, 
    console.log('Connected to the election database.')
);

module.exports = db;