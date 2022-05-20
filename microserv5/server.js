
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
var MongoClient = require('mongodb').MongoClient;
var connectionString = "mongodb://127.0.0.1:27017/hrms"

const routes = require('../microserv5/api/routes');

routes(app);
app.get('/api/billsReimbursement',(req,res)=>{
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
    // MongoClient.connect(connectionString, function(err, db){
    //     if(err) console/console.error((err));
    //     console.log("DB connected");
    //     dbobj = db.db("hrms")
    // })
    console.log(`http://localhost:${port}`);
});

// module.exports = app;