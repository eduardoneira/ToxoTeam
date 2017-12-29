var express = require('express');
var app = express();

process.title = "Toxoteam";

/**
 * App configure
 */
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * URIs
 */
var users  = require('./modules/users/users.js');
app.use('/users',users);

var players = require('./modules/players/players.js');
app.use('/players',players);

/**
 * Server port config and deploy
 */
var ip = "127.0.0.1";
var port = 16000;

if (parseInt(process.argv[2]) < 65536){
  port = parseInt(process.argv[2]);
}

var server = app.listen(port,ip,function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Toxoteam listening at http://%s:%s", host, port);

});