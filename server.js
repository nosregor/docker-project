const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const app = express();

const hostname = 'localhost';
const port = 3000;

const url = 'mongodb://localhost:27017/conFusion';

MongoClient.connect(url, (err, client) => {
  assert.equal(err, null);

  console.log('Connected correctly to mongo server');
});

app.get('/', (req, res, next) => {
  console.log(req.headers);
  res.json({ hello: 'world' });
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


// const express = require('express');

// const app = express();
// const mongodb = require('mongodb');

// const PORT = 3000;
// const client = mongodb.MongoClient;

// const url = 'mongodb://localhost:27017/conFusion';

// client.connect(url, (err, db) => {
//   if (err) {
//     console.log('database is not connected');
//   } else {
//     console.log('connected!!');
//   }
// });

// app.get('/', (req, res) => {
//   res.json({ hello: 'world' });
// });

// app.listen(PORT, () => {
//   console.log('Your node js server is running on PORT:', PORT);
// });
