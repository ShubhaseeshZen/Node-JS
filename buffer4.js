var buf1 = new Buffer.from('Shubhaseesh');

var buf2 = new Buffer.from('Kumar');

var buf3 = Buffer.concat([buf1,buf2]);

console.log(buf3.toString());
