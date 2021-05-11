'use strict';
import { customAlphabet } from 'nanoid';
import { findUserURL, findUURL, saveURL  } from '../model/db.js';
const nanoid = customAlphabet('abcdef', 8);

async function create_url_pair(source_url) {

  const userLinkCheck = await findUserURL(source_url);

  if(userLinkCheck.length < 0) {
    console.log(`🔊 Userlink: ${userLinkCheck}`);
    return [userLinkCheck[0].source_url, userLinkCheck[0].shortened_url]
  } 
  
  else {
    console.log(`🔊 Link not found, generating pair`);
    const short_url = nanoid();
    console.log(`🔊 Short URL Generated: ${short_url}`);
    const pair = [source_url, short_url];
    saveURL(pair);
    return pair;
  }
}

export { create_url_pair};