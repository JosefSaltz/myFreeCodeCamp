//Master controller of application functionality, calls and directls higher level operations of application functionality
import express from 'express';
import { body, validationResult } from 'express-validator';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import {saveURL, findURL} from './lib/model/db.js'
import url_pattern from './src/regex/chonky_url_validator.js';
import create_ustr from './lib/controller/createString.js';
import pug from 'pug';
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const url_regex = ''

console.log("\\\\ Starting Server");

app.set('view engine', 'pug');

app.use(express.static('views'));
//app.use(express.static('./views/img/'));


//Request Logger Middleware
app.use((req, res, next) => {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});

app.use(express.urlencoded({extended: true}));

//Serves HTML
app.get('/', (req, res) => {
  res.status(200).render('index.pug', {urlcheck: url_pattern });
});

//Link Shortener API
app.post('/shorturl/new', (req, res) => {
  //Log
  console.log(`\\ POST: ${req.body.userLink}`);
  
  //Validate 
  body('user-link').isURL();
  const errors = validationResult(req);
  
  if(!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array()});
  }
  
  //Render if no errors
  else {
    const userLink = req.body.userLink;
    const shortLink = create_ustr();
    console.log(`Checking for previous submitted link: ${findURL(userLink)}`);

    //URLsave(userLink)
    res.status(200).render('success.pug', {userLink, shortLink});
  }
  
  
  console.log(originalurl);
  //Should start a post request to the db
  //A url and randomized four char string should be saved to a JSON object
  //The url and four char string should both be unique in the db
  //If the url is not unique it should return an existing record
  //If the four char string is not unique it should be regenerated until it is
  //If both strings are a unique record it is saved to the db
})

app.listen(8080, () => {
  console.log('\\  Server started and listening on 8080');
});
