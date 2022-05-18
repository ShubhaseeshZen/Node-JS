const http = require('http');
const url = require('url');

const addr1 = 'http://localhost:4320/index.html?year=2021&month=february';

const addr2 = "https://www.google.co.in/search?sxsrf=ALeKk02FOuriiLI5H1cRgt3CkfV8kP_\
afw%3A1612342767333&source=hp&ei=72UaYKK6EtaT4-EPvMGJiAU&q=bangalore&oq=bangalore&gs_lcp=\
CgZwc3ktYWIQAzIECCMQJzIECCMQJzIECCMQJzIHCAAQsQMQQzIECAAQQzIHCC4QsQMQQzIECAAQQzIECAAQQzIECA\
AQQzIFCAAQkQI6BQguEJECOggILhCxAxCDAToFCAAQsQM6CAgAELEDEIMBOgIIADoHCAAQyQMQQzoFCAAQkgM6DQguELE\
DEMcBEKMCEENQ8glYvRJgtxRoAHAAeACAAdkBiAH_C5IBBTAuNy4ymAEAoAEBqgEHZ3dzLXdpeg&sclient=psy-ab&ved=\
0ahUKEwji7ZrvrM3uAhXWyTgGHbxgAlEQ4dUDCAc&uact=5"

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    const q = url.parse(addr2, true);
    console.log(q.host);
    console.log(q.pathname);
    console.log(q.search);
    // const time = q.query.year + "  " + q.query.month;
    // console.log(time);
    const qdata = q.query;
    console.log(qdata);
    res.write('Hello	World\n');
    res.write("This is second response\n");
    res.write(q.host);
    res.write(q.pathname);
    res.end(q.search);

}).listen(4320,'localhost');
