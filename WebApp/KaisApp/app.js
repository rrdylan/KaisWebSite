var express = require('express');
var app = express();

var UserController = require('./app-rest/Controller/UserController');
app.use('/', UserController);

module.exports = app;
