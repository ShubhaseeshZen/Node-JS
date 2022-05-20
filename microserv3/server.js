const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

// const routes = require('../microserv3/api/routes');

// routes(app);
app.use(express.static(__dirname + '../microserv3/api/routes'));
app.use("*",function(req,res){
    res.sendFile(path.join(__dirname,"myapp/src/index.html"));
});

app.listen(port, function () {
    console.log(`http://localhost:${port}`);
});
//http://localhost:8000/radius/99501/27
//

// var express = require("express");
// var app = express();
// app.use(express.static(__dirname + '/app'));
// app.use("*",function(req,res){
//     res.sendFile(path.join(__dirname,"app/index.html"));
// });
// app.listen(1337, function(){
//     console.log("Server is listening on port 1337");
// });