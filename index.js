const express = require('express');
const morgan = require('morgan');
const app = express();
var port = process.env.PORT || 8080;

app.listen(port, function() {
	console.log("app runs on ip:"+port);
});

//app.enable("trust proxy");
// use combined preset, see https://github.com/expressjs/morgan#combined
//app.use(morgan('date[ISO] :remote-addr :method :url :status'));

app.get('/', (req, res)  => {
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