"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveURL = saveURL;

// Contains the db schemas models and getter/setter functions and accompanying logic
require('dotenv').config({
  silent: true
});

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
mongoose.connect(process.env.MONGO_URI);
var docSchema = new Schema({
  source_url: {
    type: String,
    unique: true,
    required: true
  },
  shortened_url: {
    type: String,
    unique: true,
    required: true
  }
});
var url_pair_model = mongoose.model('url', docSchema);

function saveURL(source_url, shortened_url, done) {
  var url = new urlmodel({
    source_url: source_url,
    shortened_url: shortened_url
  });
  url.save(function (err, data) {
    if (err) {
      return done(err);
    }

    return done(null, data);
  });
}

saveURL();