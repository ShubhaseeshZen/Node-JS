const ejs = require('ejs');
const fs = require('fs')
const http = require('http')
const filename = './students.ejs';

const students = [
    { name: 'Rich LaRue', age: 23 },
    { name: 'Sarah Cathanda', age: 25 },
    { name: 'Bob Dobbs', age: 37 }]

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile(filename, (err, data) => {
            const template = data.toString();
            const context = { students: students };
            // const cache = process.env.NODE_ENV === 'production';
            const output = ejs.render(template, {students, cache, filename})
            // const output = ejs.render(template, context);
            res.setHeader('Content-type', 'text/html');
            res.end(output);
        });
    } else {
        res.statusCode = 404;
        res.end('Not found');
    }
});
server.listen(8000);