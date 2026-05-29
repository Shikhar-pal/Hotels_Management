const mongoose = require('mongoose');
require('dotenv').config();
// define the connection string to the MongoDB database
// const mongoURL = process.env.DB_URL_LOCAL 
const mongoURL = process.env.DB_URL;
// connect to the MongoDB database using Mongoose
mongoose.connect(process.env.DB_URL || process.env.DB_URL_LOCAL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.log('Error connecting to MongoDB: ' + err);
});

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
