// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

// Use body-parser
app.use(bodyParser.json());

// Create a data store
let comments = [];

// Define a route for getting comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Define a route for adding comments
app.post('/comments', (req, res) => {
    comments.push(req.body);
    res.json(req.body);
});

// Start the server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});