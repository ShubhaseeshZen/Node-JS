var express = require('express');
var app = express();

var x=100;
var y =0;
app.use(function(req,res,next) {
	y= x+y;
	res.send("A new request recieved at "+ Date.now() + "  calculation  " + y);
	next();
	
});



app.listen(5000);