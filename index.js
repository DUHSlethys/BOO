const express = require('express');
const logger = require('morgan');
const port = process.env.PORT || 8000;
var fs = require('fs');
var path = require('path');

logger.token('id', function getId (req) {
	return req.id;
});

var app = express();
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'});

app.use(function assignId (req, res, next) {
	req.id = uuid.v4();
});

app.use(logger(':date[iso] :id :remote-addr :method :url :status :res[content-length] - :response-time ms',{stream: accessLogStream}));

app.get('/', function(req, res) {
  res.send('Hello from Express.js server!');
});



//var https = require('https');
//var server = https.createServer(app).listen(config.port, function() {
//   console.log('Https App started');
//});


// for HTTP server:
//const PORT = 3000;

// run the server
//app.listen(PORT, () => {
//  console.log(`Example app listening on port ${PORT}!`);
//});
//app.listen(port, function() {
//	console.log("app runs on ip:"+port);
//});

//app.enable("trust proxy");