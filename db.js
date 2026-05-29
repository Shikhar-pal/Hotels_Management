const mongoose = require('mongoose');

// define the connection string to the MongoDB database
const mongoURL = 'mongodb://localhost:27017/hotels';
// connect to the MongoDB database using Mongoose
mongoose.connect(mongoURL);

// get the default connection
const db = mongoose.connection;

db.on('connected', () => {
  console.log('Mongoose connected to ' + mongoURL);
});

db.on('error', (err) => {
  console.log('Mongoose connection error: ' + err);
});

db.on('disconnected', () => {
  console.log('Mongoose disconnected');
});


// export the database connection

module.exports = db;
