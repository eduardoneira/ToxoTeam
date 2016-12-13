/**
 * Setting up firebase
 */

var admin = require("firebase-admin");

var serviceAccount = require("./toxoteamKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://toxoteamdb.firebaseio.com/"
});

exports.database = admin.database();