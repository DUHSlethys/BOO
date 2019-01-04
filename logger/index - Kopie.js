const express = require('express')
const logger = require('morgan')
//const port = process.env.PORT || 8000
var fs = require('fs')
var path = require('path')

logger.token('id', function getId (req) {
  return req.id
})

var app = express()
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'})

app.use(assignId)
app.use(logger(':date[iso] :id :remote-addr :method :url :status :res[content-length] - :response-time ms',{stream: accessLogStream}));

app.get('/', function (req, res) {
  res.send('yo')
})

function assignId (req, res, next) {
  req.id = uuid.v4()
  next()
}