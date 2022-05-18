var express = require('express');
var app = express();
var x=100;
var y =0;
/*
app.use('/',function(req,res,next) {
	y= x+y;
	res.sendStatus(y);
	next();
	
});
*/
app.use('/time', function(req,res,next) {
	res.send("A new request recieved at "+ Date.now());
	next();
	
});

app.get('/time', function(req,res) {
	res.send('time');
});

app.get('*', function(req,res){ 
	res.send('404 Page not found');
});

app.listen(5000);