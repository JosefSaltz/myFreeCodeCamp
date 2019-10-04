var express = require('express');
var app = express();

//Request Logger Middleware
app.use((req, res, next) => {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});

//Serves HTML
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

//Timestamp API
app.get('/api/timestamp/:date_string?', (req, res) => {
  //Assign url param & new date object.
  var date_string = req.params.date_string;
  var date_parse = new Date(date_string);
  //Generate a new date object if no parameter set
  if(date_string === undefined) {
    date_parse = new Date();
    res.json({
      unix: date_parse.getTime(),
      utc: date_parse.toUTCString()
    });
  }
  //If date object is not valid return an error
  if(isNaN(date_parse)) {
    res.json({
      error: "Invalid Date"
    });
  } 
  //Else assumes valid object; returns time and UTC getters
  else {
    res.json({
      unix: date_parse.getTime(),
      utc: date_parse.toUTCString()
    });
  }
});

app.listen(8080);
console.log('Server started and listening on 8080');