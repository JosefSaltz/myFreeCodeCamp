// Contains the db schemas models and getter/setter functions and accompanying logic

require('dotenv').config({ silent: true });

function saveDB(userURL, randomStr){

  const mongoose = require('mongoose');
  const Schema = mongoose.Schema;
  const db = mongoose.connection;

  mongoose.connect(process.env.MONGO_URI);

  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function(){

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

    const url_pair_model = mongoose.model('url', urlSchema);

  });



  function saveURL(userURL, randomStr, done) { 
    const url = new url_pair_model({
      source_url: userURL,
      shortened_url: randomStr
    });

    url.save((err, data) => {
      if (err) {
        return done(err);
      }

      return done(null, data);
    })

  }
}



export default saveDB;