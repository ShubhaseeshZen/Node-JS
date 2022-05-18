var files = require('fs');
var data= `Need partner to conduct the Govt project called DDUGKY 
Partner work
1. Execute the project by staying in district 
2. Arrange the place for 5000-7000 sft one bldg or multiple bldgs. 
3. One for gents hostel, One for ladies hostel,  one for the class to conduct 
4.   He has to recruit the people or we will arrange people. 
Minimum 3 years project and project value is 2.4 crore spread across 3 years. 
recruitment and other resources would be arranged later  once work started. `;

var writeStream = files.createWriteStream('write.txt');

writeStream.write(data,'UTF8');

writeStream.end();

writeStream.on('finish', function()  {
	console.log("data writing completed");
});

writeStream.on('error', function(err)  {
	console.log(err.stack);
});

