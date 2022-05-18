var files = require('fs');

var gzip = require('zlib');

files.createReadStream('write1.txt')
	.pipe(gzip.createGzip())
	.pipe(files.createWriteStream('write1.gzip'));
	

	

console.log("file zipped");

files.createReadStream('write1.gzip')
	.pipe(gzip.createGunzip())
	.pipe(files.createWriteStream('write2.txt'));
	
	
console.log("file unzipped");