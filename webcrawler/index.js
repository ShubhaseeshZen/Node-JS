const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Praveen Bangalore')
});

app.get('/test1.html', function (req, res) {
  res.send('Welcome to Nodejs Class')
});


app.get('/test1', function (req, res) {
  res.send('Welcome to new Bangalore')
});

app.get('/test2', function (req, res) {
  res.send('Welcome to Express')
});


app.listen(3000);