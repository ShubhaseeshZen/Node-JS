const express = require('express')
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
var connectionString = "mongodb://127.0.0.1:27017/demo"

// Init app
const app = express()
// Load view engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// Home route
var data;
app.get('/', (req, res) => {

	MongoClient.connect(connectionString, { useUnifiedTopology: true }, function (err, db) {
		if (err) console.error(err);
		console.log("DB Connected");
		const dbobj = db.db("demo");
		dbobj.collection("bios").find({}).toArray(function (err, res) {
			if (err) console.error(err);
			data = res;
			// console.log(res);
		});
		res.render('index', {
			title: 'MyApp',
			data: data
		});
	});

	//console.log(data);

});

// Add Router
app.get('/index/employee', (req, res)=>{
	res.render('employee',{
		title: 'Employee list'
	})
})
// Start serverr
app.listen(3000, () => {
	console.log(`Example app listening on port localhost:${3000}`)
})
