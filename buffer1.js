// creating buf the buffer memory of 600 bytes
var buffer = new Buffer.alloc(600);

console.log(buffer.length)
// getting the length in variable len, i.e., total buffer memory used
var len = buffer.write("Contrary to popular belief, Lorem Ipsum is not simply random text.It has roots in a piece of classical Latin literature from 45 BC and, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC.");
console.log("Objects written  " + len);
