const express = require('express');
const app = express();

var rt = require('./route.js');

app.use('/hello',rt);

app.listen(5000);