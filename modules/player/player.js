/**
 * Setting database and router reference 
 */
var file_manager = require('../base/file_manager.js')
var router = require('../base/router.js');
var db = require('../base/firebase_database.js');
const crypto = require('crypto');

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
  var player_name = req.body.name;
  var player_score = req.body.score;
  
  if (!player_name || (player_score < 0 && player_score > 10)) {
    // Throw minimun required data exception
  }

  if (db.get('players/'+player_name)) {
    // Throw name used exception
  }

  var img_name = crypto.createHash('sha256').update(req.body.img).digest('hex').toString('hex');
  var buffer = Buffer.from(req.body.img, 'base64');

  file_manager.save_image(img_name, buffer);

  var updates = {};
  updates[player_name] = {
    score : player_score,
    team : req.body.team,
    img: img_name
  };

  db.post('players/', updates);
  res.end('SUCCESS');
}

router.post('/', addPlayer)

module.exports = router.express_router;