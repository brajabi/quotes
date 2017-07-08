const express = require('express');
const pug = require('pug');
const routes = require('./routes/index');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname,'public/dist')));

app.use((req, res, next) => {
  res.locals.title = 'title';
  next();
});

//routing
app.use('/',routes);

module.exports = app;


