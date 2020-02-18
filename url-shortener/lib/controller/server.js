"use strict";

var _minified_url = _interopRequireDefault(require("./minified_url"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var express = require('express');

var app = express();
//Request Logger Middleware
app.use(function (req, res, next) {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
}); //Serves HTML

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
}); //Link Shortener API

app.post('/api/shorturl/new', function (req, res) {//Should start a post request to the db
  //A url and randomized four char string should be saved to a JSON object
  //The url and four char string should both be unique in the db
  //If the url is not unique it should return an existing record
  //If the four char string is not unique it should be regenerated until it is
  //If both strings are a unique record it is saved to the db
});
app.listen(8080);
console.log('Server started and listening on 8080');