"use strict";

//Responsible for functionality checking whether db already has records of url or random string
require('dotenv').config({
  silent: true
});

require("google-closure-library");

goog.require("goog.crypt.Sha1");

var sha1 = new goog.crypt.Sha1();
sha1.update("foobar");
var hash = sha1.digest();

function sanitizeInput() {}

function checkIfURL() {
  var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
  '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
  '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
  '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator

  return !!pattern.test(str);
}

function checkIfDuplicate(source) {
  url_pair.model.find(source) ? true : false;
} //query if url is already in db
//on true return shortened link
//on false check if uuid is in db
//on true re-run function
//on false store pair return shortened link