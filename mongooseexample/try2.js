var express = require('express');

var app = express();

var MongoClient = require('mongodb').MongoClient;

var connectionString = "mongodb://127.0.0.1:27017/demo";

var dbobj;
var db;

app.get('/', function (req, resp) {

    dbobj.collection("employee").find({}).toArray(function (err, res) {
        if (err) console.error(err);

        var output = '<html><header><title> DB</title></header><body>'
        output += '<h1>Employee</h1>'
        output += '<table><tr><td><b>Name</b></td><td><b>Age</b></td><td><b>Department</b></td><td><b>Address(lattitude, longitude)</b></td><td><b>Salary</b></td></tr>'
        res.forEach(function (item) {
            output += '<tr><td>' + item.empname + '</td>' + '<td>' + item.empage + '</td>' + '<td>' + item.department + '</td>' + '<td>' + item.address.country + ' ' +item.address.location + '</td>' + '<td>' + item.salary+ '</td>'+ '</tr>'
        });
        output += '</table></body></html>'
        resp.send(output);
        //console.log(res);
    });

    // app.get('/$resp.id')

});

app.listen(3001, function () {
    MongoClient.connect(connectionString, function (err, db) {
        if (err) console.error(err);
        console.log("DB Connected");
        dbobj = db.db("demo");

    });
    console.log('app.js is listening to http://localhost:3001/');

});

