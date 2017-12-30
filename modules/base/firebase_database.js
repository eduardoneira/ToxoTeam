/**
 * Setting up firebase admin
 */
function FirebaseDatabase() {
  var admin = require("firebase-admin");
  var settings = require("./settings.js");
  var serviceAccount = settings.db;

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://toxoteamdb.firebaseio.com/"
  });
  
  var rootPath = settings.env;
  var verbose = settings.verbose;
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

    this.db.ref(rootPath+'/'+path).set(data);
  }
}

module.exports = new FirebaseDatabase();