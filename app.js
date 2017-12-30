var express = require('express');
var app = express();
var argv = require('named-argv');

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
var players = require('./modules/player/player.js');
app.use('/player', players);

/**
 * Server port config and deploy
 */
var ip = (ip in argv.opts) ? argv.opts.ip : "127.0.0.1";
var port = (port in argv.opts) ? argv.opts.port : 23000;

var env = (env in argv.opts) ? argv.opts.env : 'dev';
var settings = require('./modules/base/settings.js');
settings.env = env;

var server = app.listen(port, ip, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("Toxoteam Server listening at http://%s:%s", host, port);
});