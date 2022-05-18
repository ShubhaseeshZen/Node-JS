var files = require('fs');

var readStream = files.createReadStream('reading.txt');

var writeStream = files.createWriteStream('write1.txt');

readStream.pipe(writeStream);

