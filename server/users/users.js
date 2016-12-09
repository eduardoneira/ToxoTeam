var express = require('express');

var fs = require("fs");

var router = express.Router();

router.use(function timeLog (req, res, next) {
  console.log('Time callback of users.js : ', Date.now())
  next()
});

router.get('/', function (req, res) {
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        console.log( data );
        res.end( data );
    });
});

module.exports = router;