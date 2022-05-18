var MongoClient = require('mongodb').MongoClient;

// var connectionString = "mongodb://127.0.0.1:27017/zensar"
var connectionString = "mongodb://localhost:27017/demo"

MongoClient.connect(connectionString, { useUnifiedTopology: true }, function (err, db) {
	if (err) console.error(err);
	console.log("DB Connected");
	var dbobj = db.db("demo");
	// var data1 = { code: { $gte: '1000' }, $and: [{ country_code: { $nin: ['WS', 'PY'] }, value: { $lt: '192949.0' } }] };
	var data1 = {name:{first:'Grace', last:'Hopper'}}
	dbobj.collection("bios").find(data1).toArray(function (err, res) {
		if (err) console.error(err);
		console.log(res);
		// console.log(JSON.stringify(res));
		db.close();
		console.log('DB disconnected')
	});

});