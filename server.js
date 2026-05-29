const express = require('express');
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});


// import the person routes 
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');
// use the person routes
app.use('/person', personRoutes);
app.use('/menu', menuItemRoutes);


app.listen(3000, ()=> {
    console.log('Example app listening on port 3000!');
});