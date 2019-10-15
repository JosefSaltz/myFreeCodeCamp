require('dotenv').config();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect(process.env.MONGO_URI);

var docSchema = new Schema({
  source_url: {
    type: String,
    required: true
  },

  shortened_url: {
    type: String,
    required: true
  }
});

var docmodel = mongoose.model('url', docSchema);

function testFunc(done) { 
  var url = new docmodel({
    source_url: 'www.josefsaltz.com',
    shortened_url: 'www.jps.com'
  });

  url.save((err, data) => {
    if (err) {
      return done(err);
    }

    return done(null, data);
  })

}

testFunc();

 

