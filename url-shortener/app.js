//Master controller of application functionality, calls and directls higher level operations of application functionality
import express from 'express';
import { body, validationResult } from 'express-validator';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { create_url_pair } from './lib/controller/create_url_pair.js'
import { findUURL, saveURL } from './lib/model/db.js'
import pug from 'pug';
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const url_regex = ''

console.log("🚀 Firing Up The Server");

app.set('view engine', 'pug');

app.use(express.static('views'));
//app.use(express.static('./views/img/'));


//Request Logger Middleware
app.use((req, res, next) => {
  console.log("📝 LOGGED: " + req.method + " " + req.path + " - " + req.ip);
  next();
});

app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Serves HTML
app.get('/', (req, res) => {
  res.status(200).render('index.pug');
});

//Link Shortener API
app.post('/shorturl/new', async (req, res) => {
  
  //Log
  console.log(`📬 POST: ${req.body.userLink}`);
  
  //Validate 
  body('user-link').isURL();
  const errors = validationResult(req);
  
  //Error Response
  if(!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array()});
  }
  
  //Create a URL Pair
  else {
    const userLink = req.body.userLink;
    const pair = await create_url_pair(userLink)
    //URLsave(pair)
    res.status(200).render('success.pug', { pair });
  }
  //Should start a post request to the db
  //A url and randomized four char string should be saved to a JSON object
  //The url and four char string should both be unique in the db
  //If the url is not unique it should return an existing record
  //If the four char string is not unique it should be regenerated until it is
  //If both strings are a unique record it is saved to the db
})

app.get('/:url', async (req, res) => {
  const short_req = req.params.url;
  const lookup = await findUURL(short_req);
  const result = lookup[0].source_url;
  res.redirect(301, result)
})

app.listen(8080, () => {
  console.log('👂 Listening on 8080');
});