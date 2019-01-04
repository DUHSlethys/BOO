var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var fs = require('fs');
var morgan = require('morgan');
var path = require('path');

var stream = fs.createWriteStream(path.join('duhslethys.000webhostapp.com/access.log'),{flags: 'a'});

app.use(morgan(':date[iso] - :url', {stream: stream}));

app.use('/', function(req, res){
	res.send('yo');
});

app.listen(port);
console.log('Server running on port: ' + port)