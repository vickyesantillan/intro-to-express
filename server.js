const express = require('express');
const app = express(); // express the constant module
const port = 3000;

app.get('/', function (req, res) {
  res.send('<h1>Hello World!</h1>');
  //console.log(req);
}); //get request

app.listen(port, function () {
  console.log('Server started on port 3000');
}); //Starting a server- port is a channel
