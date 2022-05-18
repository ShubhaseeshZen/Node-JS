const express = require('express');
const app = express();
/*
app.get('/:i', function(req,res){ 
	res.send('This is dynamic Creation of URL ' + req.params.i);
});

app.get('/:i/:text1', function(req,res){ 
	res.send('This is dynamic Creation of URL ' + req.params.i +'  name   '+ req.params.text1);
});
*/

app.get('/:i([0-9]{10})/:text1', function(req,res){ 
	res.send('This is dynamic Creation of URL ' + req.params.i +'  name   '+ req.params.text1);
});

app.get('*', function(req,res){ 
	res.send('404 Page not found');
});

app.listen(5000);