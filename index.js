const express = require('express');
const morgan = require('morgan');

const app = express();

app.enable("trust proxy");
// use combined preset, see https://github.com/expressjs/morgan#combined
app.use(morgan('date[ISO] :remote-addr :method :url :status'));

app.get('/', (req, res)  => {
  res.send('Hello from Express.js server!')
});


//const PORT = 3000;

// run the server
//app.listen(PORT, () => {
//  console.log(`Example app listening on port ${PORT}!`);
//});