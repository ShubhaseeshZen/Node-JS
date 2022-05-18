var buffer1 = new Buffer.alloc(256);
var buffer2 = new Buffer.alloc(300);
console.log(buffer1)
for (var i = 0; i < 26; i++) {
	buffer1[i] = i + 97;
}
for (var j = 0; j < 26; j++) {
	buffer2[j] = j + 65;
}
console.log(buffer1.toString('ascii'));

console.log(buffer1.toString('ascii', 0, 10));

console.log(buffer1.toString('utf8', 0, 15));

console.log(buffer1.toString(undefined, 0, 11));

console.log('----------------------------------------------');

console.log(buffer2.toString('ascii'));

console.log(buffer2.toString('ascii', 0, 10));

console.log(buffer2.toString('utf8', 0, 15));

console.log(buffer2.toString(undefined, 0, 11));