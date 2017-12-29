/**
 * Setting up firebase admin
 */
var admin = require("firebase-admin");
var serviceAccount = require("./config.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://toxoteamdb.firebaseio.com/"
});

exports.database = admin.database();