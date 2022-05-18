var MongoClient = require ('mongodb').MongoClient;

var connectionString = "mongodb://127.0.0.1:27017/zensarNew"
var db;
MongoClient.connect(connectionString, { useUnifiedTopology: true }, function(err,db) {
	if(err) console.error(err);
	console.log("DB Connected");
	var dbobj= db.db("zensarNew");
	var data1 = { "Surname": "Shamim Kadri", "First name": "Mohammed Faisal","Email address": "mohammedfaisalkadri@gmail.com"};
	dbobj.collection("emp_det").insertOne(data1, function(err,res) {
		if(err) console.error(err);
		console.log("document inserted");
		db.close();
	});

});