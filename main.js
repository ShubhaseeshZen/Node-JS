
var http = require('http');
http.createServer(function (req, res) {
    console.log("Receiving Request");
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('helloooo');
    console.log(req);
    res.end();
}).listen(5300, 'localhost');

console.log('Server running a http://localhost:5300');

