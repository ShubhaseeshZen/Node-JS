var buf1 = new Buffer.from('Shubhaseesh');

var buf2 = new Buffer.from('Shubhasees');

var result = buf1.compare(buf2);

console.log(result);