const express = require('express');
const pug = require('pug');
const routes = require('./routes/index');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

//routing
app.use('/',routes);

module.exports = app;


