var http	= require('http');

var files = require ('fs');
var url 	= require('url');

var address = 'http://localhost:8080/default.htm?year=2021&month=february';
var addr1 = "https://www.google.co.in/search?sxsrf=ALeKk02FOuriiLI5H1cRgt3CkfV8kP_afw%3A1612342767333&source=hp&ei=72UaYKK6EtaT4-EPvMGJiAU&q=bangalore&oq=bangalore&gs_lcp=CgZwc3ktYWIQAzIECCMQJzIECCMQJzIECCMQJzIHCAAQsQMQQzIECAAQQzIHCC4QsQMQQzIECAAQQzIECAAQQzIECAAQQzIFCAAQkQI6BQguEJECOggILhCxAxCDAToFCAAQsQM6CAgAELEDEIMBOgIIADoHCAAQyQMQQzoFCAAQkgM6DQguELEDEMcBEKMCEENQ8glYvRJgtxRoAHAAeACAAdkBiAH_C5IBBTAuNy4ymAEAoAEBqgEHZ3dzLXdpeg&sclient=psy-ab&ved=0ahUKEwji7ZrvrM3uAhXWyTgGHbxgAlEQ4dUDCAc&uact=5"
  
console.log("This is file Program");
var q = url.parse(addr1, true);

http.createServer(function	(req,	res) { 
 files.rename('fileappend.log', 'fileappend1.log', function(err) {
	if(err) return console.error(err);
	res.write("file appended\n");
	res.end();
	
 });
/* 
 res.write ("hello World\n");
 res.write(q.host + "\n");
 res.write(q.pathname+ "\n");
 res.write(q.search+"\n\n");
 setTimeout(function(){ res.end();},2000);
 */

 
}).listen(8080);
