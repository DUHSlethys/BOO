var http = require('http-debug').http;
var https = require('http-debug').https;
 
https.debug = 2;
 
/****
 * debug states
 * - 0     : off     (default state)
 * - 1     : on      (show request, write, end)
 * - 2     : verbose (on + error and socket event reporting)
 *
 * Also support `process.env.HTTP_DEBUG` at load time, which
 * will overide default state, however, anything passed via
 * `http.debug` at run time will cancel out
 * `process.env.HTTP_DEBUG`.
 ****/
 
// Make http requests as usual.
https.get('https://safe-citadel-91364.herokuapp.com/', function (err, res) {
   if (err) console.trace(err);
   console.log(res.statusCode);
});