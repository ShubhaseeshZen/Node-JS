var cookieParser = require('cookie-parser');
var session = require('express-session');


var express = require('express');
var app=express();
app.use(cookieParser());
app.use(session({secret: 'This is 9900992060'}));
app.get('/', function (req,res){
	if(req.session.page_views){
		req.session.page_views++;
		res.send("you viited this page" + req.session.page_views + " times");
	} else {
		req.session.page_views = 1;
		res.send("u r visiting page first time");
	}
});
	

app.listen(5000);
