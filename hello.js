var http = require('http');
var date = require('./myModule');
http.createServer(function (req, res) {
    res.writeHead(200, { 'Conten-Type': 'text/html' })
    res.write("The date and time is : " + date.myTime());
    res.end('Hi!')
}).listen(4400);
