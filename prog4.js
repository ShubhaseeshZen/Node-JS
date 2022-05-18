var cookieParser = require('cookie-parser');
var express = require('express');
var app = express();

app.use(cookieParser());
app.get('/', (req, res)=> {
    res.cookie('name', 'express').send('cookie has been set');
    res.c
});

app.listen(5000);
console.log(`http://localhost:${5000}/`)