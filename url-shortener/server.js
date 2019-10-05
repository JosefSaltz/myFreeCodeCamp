const express = require('express');
const app = express();

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
  req.params
})

app.listen(8080);
console.log('Server started and listening on 8080');