"use strict";

//Takes user inputted url and generates a unique string then returns both as an array
//Input should be sanitized
//Input should be checked to make sure it is valid url
var mocha = require('mocha');

var source_url = document.getElementbyId('url-input').value;

function create_pair(source_url) {
  var pair = [source_url, uniqueStr];
  return pair;
}