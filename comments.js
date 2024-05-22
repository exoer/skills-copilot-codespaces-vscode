// create a webserver
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// create a variable to store the comments
const comments = [];

// add the body parser middleware
app.use(bodyParser.json());

// create a POST route to add a new comment
app.post('/comments', (req, res) => {
  const comment = req.body.comment;
  comments.push(comment);
  res.json(comment);
});

// create a GET route to get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
// end of comments.js

// Path: server.js
// create a webserver
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// create a variable to store the comments
const comments = [];

// add the body parser middleware
app.use(bodyParser.json());

// create a POST route to add a new comment
app.post('/comments', (req, res) => {
  const comment = req.body.comment;
  comments.push(comment);
  res.json(comment);
});

// create a GET route to get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
// end of server.js

// Path: index.js
// create a webserver
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// create a variable to store the comments
const comments = [];

// add the body parser middleware
app.use(bodyParser.json());

// create a POST route to add a new comment
app.post('/comments', (req, res) => {
  const comment = req.body.comment;
  comments.push(comment);
  res.json(comment);
});

// create a GET route to get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
// end of index.js

// Path: package.json
{
  "name": "comments",
  "version": "1.0.0",