const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// APP
const app = express();

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

const url = 'mongodb://mongo:27017/conFusion';

MongoClient.connect(url, (err, client) => {
  assert.equal(err, null);

  console.log(`mongoDB running at: ${url}`);
});

app.get('/', (req, res, next) => {
  console.log(req.headers);
  res.json({ hello: 'world' });
  // res.send('Hello world\n');
});

app.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}/`);
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
