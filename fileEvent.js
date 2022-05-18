var files = require('fs');

var readStream = files.createReadStream('reading.txt');

readStream.on('open', function(err) {
	if(err) console.log(err); 
	console.log('file opened');
});