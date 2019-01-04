var https = require('https');
var http = require('http');
var fs = require('fs');

const options = {
                key: fs.readFileSync(__dirname+'/alt1-key.pem'),
                cert: fs.readFileSync(__dirname+'/alt1-cert.pem')
};

https.createServer(options, function(req, res){
                console.log('req made: '+req.url);
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.setHeader('Access-Control-Request-Method', '*');
                res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
                res.writeHeader(200,{'Content-Type': 'text/plain'});
                var read = fs.createReadStream(__dirname+'/Apps/stream.czml', 'utf8');
                read.pipe(res);
}).listen(443);
 
var server = http.createServer(function(req, res){
                console.log('req made: '+req.url);
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.setHeader('Access-Control-Request-Method', '*');
                res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
                res.writeHeader(200,{'Content-Type': 'text/plain'});
                var read = fs.createReadStream(__dirname+'/Apps/stream.czml', 'utf8');
                read.pipe(res);
});

server.listen(8000);