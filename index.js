var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

var morgan = require('morgan');

app.use(morgan(':date[iso] - :url'));

app.use('/', function(req, res){
	res.send('yo');
});

app.listen(port);
console.log('Server running on port: ' + port);