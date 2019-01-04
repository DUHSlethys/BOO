const express = require('express');
const morgan = require('morgan');

const app = express();

// use combined preset, see https://github.com/expressjs/morgan#combined
app.use(morgan('combined'));

app.get('/', (req, res)  => {
  res.send('Hello from Express.js server!')
});


const PORT = 3000;

// run the server
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});