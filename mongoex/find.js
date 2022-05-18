var MongoClient = require('mongodb').MongoClient;

var connectionString = "mongodb://127.0.0.1:27017/demo"

MongoClient.connect(connectionString, { useUnifiedTopology: true }, function (err, db) {
	if (err) console.error(err);
	console.log("DB Connected");
	var dbobj = db.db("demo");

	dbobj.collection("bios").findOne({}, function (err, res) {
		if (err) console.error(err);
		console.log(res);
		// db.close();
		// console.log('DB disconnected')
	});

	// Inserting data
	var data1 = {
		_id: 12,
		name: { first: 'Abhishekh', last: 'Shivde' },
		birth: '1924-12-03T05:00:00.000Z',
		death: '2007-03-17T04:00:00.000Z',
		contribs: ['Python', 'ALGOL', 'Backus-Naur Form', 'PHP'],
		awards: [
			{
				award: 'Gyanpith Award',
				year: 1967,
				by: 'GOV of India'
			},
			{
				award: 'National Medal of Science',
				year: 1975,
				by: 'National Science Foundation'
			},
			{ award: 'Turing Award', year: 1977, by: 'ACM' },
			{
				award: 'Draper Prize',
				year: 1993,
				by: 'National Academy of Engineering'
			}
		]
	};
	dbobj.collection("bios").insertOne(data1, function (err, res) {
		if (err) console.log(err);
		console.log("Successful");
		db.close();
	});
});

(async function () {
	const client = new MongoClient('mongodb://127.0.0.1:27017/demo', { useNewUrlParser: true, useUnifiedTopology: true });
	try {
		await client.connect();
		const coll = client.db('demo').collection('bios');
		const indxs = await coll.indexes();
		console.log(indxs);
	} catch (err) {
		console.log(err.stack);
	}
	client.close();
})();