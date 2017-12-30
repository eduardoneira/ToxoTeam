/**
 * Setting up firebase admin
 */
function FirebaseDatabase(env='test', verbose=true) {
  var admin = require("firebase-admin");
  var settings = require("./settings.js");
  var serviceAccount = settings.db;
  debugger;
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://toxoteamdb.firebaseio.com/"
  });
  
  var rootPath = settings.env;
  this.db = admin.database();

  this.get = function(path) {
    var ref = this.db.ref(rootPath+'/'+path);

    ref.once("value").then(function(snapshot){
      var data  = snapshot.child("/").val();
      if (verbose) {
        console.log(data);
      }
      return data;
    });
  }

  this.post = function(path, data) {
    if (verbose) {
      console.log(data);
    }

    var ref = db.ref(rootPath+'/'+path);
    ref.update(data);
  }
}

module.exports = new FirebaseDatabase();