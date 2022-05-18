var http = require('http');
var url = require('url');

console.log("This is first Program");

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    var q = url.parse(req.url, true).query;
    var t = q.year + "  " + q.month;
    res.write('Hello	World\n');
    res.write("This is second response");
    res.write(req.url);
    res.end();
}).listen(4300, 'localhost');
