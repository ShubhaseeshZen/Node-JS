
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
var MongoClient = require('mongodb').MongoClient;
var connectionString = "mongodb://127.0.0.1:27017/hrms"

const routes = require('../microserv5/api/routes');

routes(app);
app.get('/billsReimbursement',(req,res)=>{
    res.json({
        "statusCode" :200,
        "statusMessage": "success"
    })
})
// app.all('*', (req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, PATCH, OPTIONS HEAD' );
//     res.header('Access-Control-Allow-Headers', '*');
//     res.header('Access-Control-Allow-Credentials', true);
//     next();
// });

app.listen(port, (req,res)=> {
    MongoClient.connect(connectionString, function(err, db){
        if(err) console/console.error((err));
        console.log("DB connected");
        dbobj = db.db("hrms")
    })
    console.log(`http://localhost:${port}`);
});


// var http = require('follow-redirects').http;
// var fs = require('fs');

// var options = {
//   'method': 'GET',
//   'hostname': 'localhost',
//   'port': 3000,
//   'path': '/about',
//   'headers': {
//   },
//   'maxRedirects': 20
// };

// var req = http.request(options, function (res) {
//   var chunks = [];

//   res.on("data", function (chunk) {
//     chunks.push(chunk);
//   });

//   res.on("end", function (chunk) {
//     var body = Buffer.concat(chunks);
//     console.log(body.toString());
//   });

//   res.on("error", function (error) {
//     console.error(error);
//   });
// });

// req.end();


// var http = require('follow-redirects').http;
// var fs = require('fs');

// var options = {
//   'method': 'GET',
//   'hostname': 'localhost',
//   'port': 3000,
//   'path': '/billsReimbursement/66001',
//   'headers': {
//   },
//   'maxRedirects': 20
// };

// var req = http.request(options, function (res) {
//   var chunks = [];

//   res.on("data", function (chunk) {
//     chunks.push(chunk);
//   });

//   res.on("end", function (chunk) {
//     var body = Buffer.concat(chunks);
//     console.log(body.toString());
//   });

//   res.on("error", function (error) {
//     console.error(error);
//   });
// });

// req.end();