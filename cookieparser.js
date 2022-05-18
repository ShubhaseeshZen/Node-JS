var cookieParser = require('cookie-parser');
var express = require('express');
var app=express();

app.use(cookieParser());
app.get('/', function (req,res){
//	res.cookie('name', 'express',{expire: 900000 + Date.now()});
	res.cookie('name', 'express').send('cookie has been set');
//	res.clearCookie('express');
	console.log('Cookies', req.cookies);
});

app.listen(6000);
