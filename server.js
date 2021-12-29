//import express 
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
//const inputCheck = require('./utils/inputCheck');
const db = require('./db/connection');
const apiRoutes = require('./routes/apiRoutes');

//Express middleware
app.use(express.urlencoded({ extend: false }));
app.use(express.json());

app.use('/api', apiRoutes);

// Not Found response for unmatched routes
app.use((req, res) => {
  res.status(404).end();
});

// Start server after DB connection
db.connect(err => {
  if (err) throw err;
  console.log('Database connected.');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});