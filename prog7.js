const http = require('http');
const event1 = require('events');
const process = require('process');
const pid = process.pid;

const p1 = process.cwd();
console.log("********************************************");
console.log(`Starting cwd: ${p1}`);

const p3 = process.arch;
console.log(`process arch: ${p3}`);

const p4 = process.argv;
console.log(`process argv: ( ${p4[0]} ),( ${p4[1]} )`);

const p2 = process.chdir('C:\\Users\\SK66933\\Desktop\\node1\\mydir');
console.log(`changed directory: ${process.cwd()}`);

const p6 = process.config;
//console.log(p6)

const { term, shell, user, path, pwd, editor, shlvl, home, logname } = process.env;
console.log(`TERM: ${term}\nSHELL: ${shell}\nUSER: ${user}\nPWD: ${pwd}\nEDITOR: ${editor}\nSHLVL: ${shlvl}\nHOME: ${home}\nLOGNAME: ${logname}`)
const startUsage = process.cpuUsage();
console.log(startUsage)
console.log(`memory usage array buffer: ${process.memoryUsage().arrayBuffers}`);
console.log(`external: ${process.memoryUsage().external}`);
console.log(`heapTotal: ${process.memoryUsage().heapTotal}`);
console.log(`heapUsed: ${process.memoryUsage().heapUsed}`);
console.log(`rss: ${process.memoryUsage().rss}`);
console.log(`hrtime ${process.hrtime()}`);

const url = new URL('https://en.wikipedia.org/wiki/RSS?msclkid=e3c7531dd10c11ec9274831f3d082efe')
console.log(url)
http.createServer((req, res) => {
  for (let i = 0; i < 1e7; i++); // simulate CPU work
    res.end(`Handled by process ${pid}`);
}).listen(8000, 'localhost');

console.log(`http://localhost:${8000}/`);
// console.log(process.env);
