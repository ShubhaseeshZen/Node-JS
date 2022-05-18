const express = require('express');
const app = express();
var MongoClient = require ('mongodb').MongoClient;
var connectionString = "mongodb://127.0.0.1:27017/zensar"


app.get('/:text1/:i', function(req,res){ 
	res.send('This is dynamic Creation of URL ' +req.params.text1  +'  name   '+ req.params.i);
	MongoClient.connect(connectionString, { useUnifiedTopology: true }, function(err,db) {
	if(err) console.error(err);
	console.log("DB Connected");
	var dbobj= db.db("zensar");
	var data1 = {code : {$gte :'1000'}, $and: [{ country_code : {$nin: ['WS','PY']}, value : {$lt :'192949.0'}}]};
	
	dbobj.collection("gsquarterlySeptember20").find().limit(20).toArray(function(err,res) {
		if(err) console.error(err);
		db.close();
	});
});
	res.send(JSON.stringify(res));
	
});

app.listen(5000);