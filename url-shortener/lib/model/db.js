"use strict";

// Contains the db schemas models and getter/setter functions and accompanying logic
import dotenv from 'dotenv'
dotenv.config();

import mongoose from 'mongoose';

//Connection Set Up
mongoose.connect(
  process.env.MONGO_URI,
  //Options obj 
  { 
    useNewUrlParser: true, 
    useCreateIndex: true, 
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log("✅ Connection to DB established");
})
///////////////////

const Schema = mongoose.Schema;

const urlSchema = new Schema({
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

const URL_PAIR_MODEL = mongoose.model('url', urlSchema);

function saveURL(pair) {
  //Make Model from Input
  console.log(`👨‍🍳 Preparing Model`);
  const url = new URL_PAIR_MODEL({
    source_url: pair[0],
    shortened_url: pair[1]
  });

  url.save(function (err, data) {
    console.log(`💾 Attempting to Save`);
    if (err) {
      return err;
    }
    return data;
    
  });
}

async function findUserURL(input_url) {
  console.log(`🚦 Mongoose Ready State: ${mongoose.connection.readyState ? '🟢' : '🔴'}`);
  console.log(`🔍 Searching for duplicate USER URL...`);
  return await URL_PAIR_MODEL.find( {"source_url": input_url}, 
    //Result Logic
    (err, match) => {
      if(err) {
        console.error(`🛑 Error: ${err}`);
        return err;
      }
  
      else {
        if (match.length === 0) {
          console.log(`🔴 No Match`);
          return false;
        } else {
          console.log(`🟢 Match: ${match}`);
          return match;
        }
      }
  });
}

async function findUURL(input_url) {
  console.log(`🔍 Searching for redirect link...`);
  return await URL_PAIR_MODEL
  .find( {"shortened_url": input_url}, 
    //Result Logic
    (err, match) => {
      if(err !== null) {
        return err;
      }
  
      else {
        if(match.length === 0) {
          console.error(`No match found`)
        } 
        
        else {
          return match;
        }
        
      }
  });
}

function removePair(pair) {
  console.log(`🔥 Attempting to delete ${pair} from DB`);
  url_pair_model
  .deleteOne( {"source_url": pair[0], "shortened_url": pair[1]},
  (err, success) => {
    return err ? err : success
  });
}

export { saveURL, findUserURL, findUURL };