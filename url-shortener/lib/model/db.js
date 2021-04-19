"use strict";

// Contains the db schemas models and getter/setter functions and accompanying logic
import dotenv from 'dotenv'
dotenv.config();

import mongoose from 'mongoose';

var Schema = mongoose.Schema;
mongoose.set('useUnifiedTopology', true);
mongoose.connect(
  process.env.MONGO_URI,
  //Options obj 
  { 
    useNewUrlParser: true, 
    useCreateIndex: true, 
    useUnifiedTopology: true
  }
);

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

function findURL(url, ) {
  const query = url_pair_model.find(
    {"source_url": url}, 
    (err, person) => {
      if(err) {
        return err;
      }
  
      else {
        console.log(person.source_url);
      }
  });
}

export { saveURL, findURL };