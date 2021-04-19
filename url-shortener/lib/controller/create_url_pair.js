"use strict";

//Takes user inputted url and generates a unique string then returns both as an array
//Input should be sanitized
//Input should be checked to make sure it is valid url
import create_ustr from './createString.js'
import urlFind from '../model/db.js'

var source_url = document.getElementbyId('url-input').value;

function create_url_pair(source_url, short_url) {
  const pair = [source_url, uniqueStr];
  let uniqueStr = create_ustr();
  console.log(`Unique Str created: ${uniqueStr}`);
  console.log(`Checking....`);
  let isUnique = findURL(uniqueStr);

  return pair;
}