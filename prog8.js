var tcp = require('tcp');
var server = tcp.createServer(function (socket) {
    socket.setEncoding("utf8");
    socket.addListener("connect", function () {
        socket.write("hello\r\n");
    });
    socket.addListener("data", function (data) {
        socket.write(data);
    });
    socket.addListener("end", function () {
        socket.write("goodbye\r\n");
        socket.end();
    });
});
server.listen(7000, "localhost");
console.log(`http://localhost:7000/`)