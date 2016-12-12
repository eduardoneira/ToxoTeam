var express = require('express');
var fs = require("fs");
//var db = require("../../server.js");

/**
 * Using router to route all uris
 */
var router = express.Router();

router.use(function timeLog (req, res, next) {
  console.log('Time callback of users.js : ', Date.now())
  next()
});

/**
 * Requests handlers
 */

router.get('/', function (req, res) {
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        //console.log(db.ref('players'));
        console.log( data );
        res.end( data );
    });
});

/**
 * Export of router used
 */
module.exports = router;