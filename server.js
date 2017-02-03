//jshint esversion:6
const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const bubbleSort = require('./bubbleSort.js');
const bubble = require('./routes/bubble.js');
const PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const hbs = handlebars.create({
  extname: '.hbs',
  defaultLayout: 'app'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

app.use('/bubble', bubble);
  console.log('this line');


app.listen(PORT, () => {
  console.log('listening on port 3000');
});




module.exports = app;