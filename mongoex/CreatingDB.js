var MongoClient = require ('mongodb').MongoClient;

var connectionString = "mongodb://127.0.0.1:27017/zensarNew"
var db;
MongoClient.connect(connectionString, { useUnifiedTopology: true }, function(err,db) {
	if(err) console.error(err);
	console.log("DB Connected");
	var dbobj= db.db("zensarNew");
	dbobj.createCollection("emp_det1", function(err, res) {
		if(err) console.error(err);
		console.log("Collection Connected");
		db.close();
});

});