// Contains the db schemas models and getter/setter functions and accompanying logic

require('dotenv').config({ silent: true });
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect(process.env.MONGO_URI);

const docSchema = new Schema({
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

const url_pair_model = mongoose.model('url', docSchema);

function saveURL(source_url, shortened_url, done) { 
  const url = new urlmodel({
    source_url,
    shortened_url
  });

  url.save((err, data) => {
    if (err) {
      return done(err);
    }

    return done(null, data);
  })

}

saveURL();

export { saveURL };