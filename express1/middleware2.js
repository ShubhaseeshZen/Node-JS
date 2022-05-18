var express = require('express');
var app = express();


app.use('/time', function(req,res,next) {
	console.log("start");
	next();
	
});

app.get('/', function(req,res,next) {
	res.send("middle");
	next();
});

app.get('/', function(req,res) {
	console.log("End");
});


app.listen(5000);