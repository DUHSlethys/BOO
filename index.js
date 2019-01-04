const express = require('express');
const logger = require('morgan');
var port = process.env.PORT || 8080;
var fs = require('fs');
var path = require('path');

var app = express();
//app.listen(port, function() {
//	console.log("app runs on ip:"+port);
//});

app.enable("trust proxy");

var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'});
app.use(logger(':date[iso] :remote-addr :method :url :status :res[content-length] - :response-time ms',{stream: accessLogStream}));

app.get('/', (req, res) => {
  res.send('Hello from Express.js server!')
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