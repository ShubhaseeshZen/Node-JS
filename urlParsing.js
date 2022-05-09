const url = require('url');
const address = 'http://localhost:4300/index.html?type=page&action=update&id=4211';
const q = url.parse(address, true);
 
console.log(q.host);
console.log(q.pathname);
console.log(q.search); 
 
const qdata = q.query; 
console.log(qdata.type); 
console.log(qdata.action); 
console.log(qdata.id);