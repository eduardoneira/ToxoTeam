/**
 * Setting database and router reference 
 */
var router = require('../base/router.js');
var db = require('../base/firebase_database.js');

/**
* Request Handlers
*/

function getPlayers(req, res) {
  var players = db.get('players');
  res.end(JSON.stringify(players));
}

router.get('/', getPlayers);

function getPlayer(req, res) {
  var players = db.get('players/'+req.params.player);
  res.end(JSON.stringify(players));
}

router.get('/:player', getPlayer);

function addPlayer(req, res) {
  var player_name = req.body.player;
  var player_score = parseInt(req.body.score);
  
  if (!player_name || (player_score < 0 && player_score > 10)) {
    // Throw minimun required data exception
  }

  if (db.get('players/'+player_name)) {
    // Throw name used exception
  }

  var updates = {};
  updates[player_name] = {
    score : score,
    team : req.body.team,
    img: req.body.img_path
  };

  db.post('players/', updates);
  res.end('SUCCESS');
}

router.post('/', addPlayer)

module.exports = router.express_router;