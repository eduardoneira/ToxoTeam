var express = require('express');

/**
 * Getting database reference
 */
var database = require("../database/database.js");
var db = database.database;

/**
 * Using router to route all uris
 * Logging time of callback
 */
var router = express.Router();

router.use(function timeLog (req, res, next) {
    var path = require('path')
    var scriptName = path.basename(__filename)
    console.log('Time callback of',scriptName,' with url ',req.url,': ', Date.now())
    next()
});

/**
 * Requests handlers
 */

// Get all players
router.get('/', function (req, res) {
    var ref = db.ref('players');

    ref.once("value")
        .then(function(snapshot){
            var data  = snapshot.child("/").val();
            console.log(data);
            res.end(JSON.stringify(data));
    });
});

router.post('/', function (req, res) {
   /** var postData = {
        score : req.body.score,
        team : req.body.team
    };*/

    console.log(req.body);
    var postData = {
        score : req.body.score,
        team : req.body.team
    };

    var updates = {};
    updates['/players/'+req.body.player] = postData;

    console.log(updates);

    db.ref('/').update(updates);
    res.end('SUCCESS');
});

//Get a single player
router.get('/:player', function(req,res) {    
    var ref = db.ref('players/'+req.params.player);

    ref.once("value")
        .then(function(snapshot){
            var data  = snapshot.child("/").val();
            console.log(data);
            res.end(JSON.stringify(data));
    });
});

module.exports = router;