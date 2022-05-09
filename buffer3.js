var buf = new Buffer.from('Contrary to popular belief, Lorem Ipsum is not simply random text.');

var json1 = buf.toJSON(buf);
 
console.log (json1);
