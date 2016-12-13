var express = require('express');
var fs = require("fs");

/**
 * Getting database reference
 */
var database = require("../../database.js");
var db = database.database;

/**
 * Using router to route all uris
 */
var router = express.Router();

router.use(function timeLog (req, res, next) {
    var path = require('path')
    var scriptName = path.basename(__filename)
    console.log('Time callback of',scriptName,': ', Date.now())
    next()
});

/**
 * Requests handlers
 */

router.get('/', function (req, res) {
    /** TODO : remove this
     * fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        console.log( data );
        res.end( data );
    });*/

    var ref = db.ref('players');

    ref.once("value")
        .then(function(snapshot){
            var data  = snapshot.child("/").val();
            console.log(data);
            res.end(JSON.stringify(data));
    });
});

/**
 * Export of router used
 */
module.exports = router;