const express = require('express');
const app = express();

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'mydb';

// Use connect method to connect to the server
MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);
  db.dropDatabase();
  require('./create.js')(app, db);
  require('./add.js')(app, db);
  require('./remove.js')(app, db);
  require('./update.js')(app, db);
  require('./read.js')(app, db);
  //client.close();
});
