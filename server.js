const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});


// import the person routes 
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');
// use the person routes
app.use('/person', personRoutes);
app.use('/menu', menuItemRoutes);


app.listen(PORT, ()=> {
    console.log(`Example app listening on port ${PORT}!`);
});