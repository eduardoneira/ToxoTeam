var express = require('express');
var app = express();

process.title = "toxoteam";

/**
 * All URI and requests
 */
var users  = require('./server/users/users.js');

app.use('/users',users);

var players = require('./server/players/players.js');

app.use('/players',players);

/**
 * Server port config and deploy
 */

//var regexIP = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gm;
var ip = "127.0.0.1";
var port = 16081;

if (parseInt(process.argv[2]) < 65536){
  port = parseInt(process.argv[2]);
}

var server = app.listen(port,ip,function () {

  var host = server.address().address
  var port = server.address().port

  console.log(" Toxoteam listening at http://%s:%s", host, port);

});