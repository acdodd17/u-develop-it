//import express 
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

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

//Express middleware
app.use(express.urlencoded({ extend: false }));
app.use(express.json());

db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
  });

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });