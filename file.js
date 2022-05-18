const http = require('http');
const files = require('fs');
const url = require('url');

const address = 'http://localhost:4300/index.html?year=2021&month=february';

const addr1 = "https://www.google.co.in/search?sxsrf=ALeKk02FOuriiLI5H1cRgt3CkfV8kP_\
afw%3A1612342767333&source=hp&ei=72UaYKK6EtaT4-EPvMGJiAU&q=bangalore&oq=bangalore&gs_lcp=\
CgZwc3ktYWIQAzIECCMQJzIECCMQJzIECCMQJzIHCAAQsQMQQzIECAAQQzIHCC4QsQMQQzIECAAQQzIECAAQQzIECA\
AQQzIFCAAQkQI6BQguEJECOggILhCxAxCDAToFCAAQsQM6CAgAELEDEIMBOgIIADoHCAAQyQMQQzoFCAAQkgM6DQguELE\
DEMcBEKMCEENQ8glYvRJgtxRoAHAAeACAAdkBiAH_C5IBBTAuNy4ymAEAoAEBqgEHZ3dzLXdpeg&sclient=psy-ab&ved=\
0ahUKEwji7ZrvrM3uAhXWyTgGHbxgAlEQ4dUDCAc&uact=5"

const q = url.parse(address, true);

http.createServer(function (req, res) {
	files.readFile('index.html', function (err, data) {
		if (err) return console.error(err);
		console.log(data);
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
	});

	res.write("hello World\n");
	res.write(q.host + "\n");
	res.write(q.pathname + "\n");
	res.write(q.search + "\n\n");
	setTimeout(function () { res.end(); }, 2000);
	//res.end();

}).listen(8080, 'localhost');
