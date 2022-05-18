var files = require('fs');

var readStream = files.createReadStream('reading.txt');
var data= ' ';

readStream.setEncoding('UTF8');


readStream.on('data', function(chunk) {
	data += chunk;
});

readStream.on('end', function() {
	console.log(data);
});

readStream.on('error', function(err) {
	console.log(err.stack);
});

//console.log('end of streaming');