const express = require('express');
const app = express();
import generate_minified from './minified_url';


//Request Logger Middleware
app.use((req, res, next) => {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});

//Serves HTML
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

//Link Shortener API
app.post('/api/shorturl/new', (req, res) => {
  
  //Should start a post request to the db
  //A url and randomized four char string should be saved to a JSON object
  //The url and four char string should both be unique in the db
  //If the url is not unique it should return an existing record
  //If the four char string is not unique it should be regenerated until it is
  //If both strings are a unique record it is saved to the db
})

app.listen(8080);
console.log('Server started and listening on 8080');
