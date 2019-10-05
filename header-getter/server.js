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

app.get('/api/whoami', (req, res) => {
  let ip = req.ip;
  let lang = req.headers['accept-language'];
  let uagent = req.headers['user-agent'];
  console.log(ip);
  res.json({
    ip,
    lang,
    uagent
  })
})

app.listen(8080);
console.log('Server started and listening on 8080');