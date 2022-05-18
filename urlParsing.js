const url = require('url');
const address = 'http://localhost:4300/index.html?type=page&action=update&id=4211';
const addr2 = "https://www.google.co.in/search?sxsrf=ALeKk02FOuriiLI5H1cRgt3CkfV8kP_\
afw%3A1612342767333&source=hp&ei=72UaYKK6EtaT4-EPvMGJiAU&q=bangalore&oq=bangalore&gs_lcp=\
CgZwc3ktYWIQAzIECCMQJzIECCMQJzIECCMQJzIHCAAQsQMQQzIECAAQQzIHCC4QsQMQQzIECAAQQzIECAAQQzIECA\
AQQzIFCAAQkQI6BQguEJECOggILhCxAxCDAToFCAAQsQM6CAgAELEDEIMBOgIIADoHCAAQyQMQQzoFCAAQkgM6DQguELE\
DEMcBEKMCEENQ8glYvRJgtxRoAHAAeACAAdkBiAH_C5IBBTAuNy4ymAEAoAEBqgEHZ3dzLXdpeg&sclient=psy-ab&ved=\
0ahUKEwji7ZrvrM3uAhXWyTgGHbxgAlEQ4dUDCAc&uact=5"
const q = url.parse(address, true);
console.log("\n");
console.log(`host: ${q.host}`);
console.log(`pathname: ${q.pathname}`);
console.log(`search: ${q.search}`); 
 
const qdata = q.query; 
console.log(`data type : ${qdata.type}`); 
console.log(`action : ${qdata.action}`); 
console.log(`id:  ${qdata.id}`);