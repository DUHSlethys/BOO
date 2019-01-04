var http = require('http');
var port = 12311

http.createServer(function (req, res) {

    console.log("Incomming request from " + req.url);

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("test string");


}).listen(port);
console.log("Listening on " +  port);