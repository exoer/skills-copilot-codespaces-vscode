// create a webserver
var http = require('http');
var url = require('url');
var fs = require('fs');

// create server
http.createServer(function(req, res) {
  // parse the request url
  var path = url.parse(req.url).pathname;
  // handle the request
  switch (path) {
    case '/':
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write('<h1>Welcome to the homepage</h1>');
      res.end();
      break;
    case '/comments':
      // read the comments file
      fs.readFile(__dirname + '/comments.txt', function(err, data) {
        if (err) {
          res.writeHead(404, {'Content-Type': 'text/plain'});
          res.write('Oh no! Could not find file');
          res.end();
        } else {
          res.writeHead(200, {'Content-Type': 'text/plain'});
          res.write(data);
          res.end();
        }
      });
      break;
    case '/submit':
      // parse the url query string
      var query = url.parse(req.url, true).query;
      // append the comment to the file
      fs.appendFile(__dirname + '/comments.txt', query.comment + '\n', function(err) {
        if (err) {
          res.writeHead(404, {'Content-Type': 'text/plain'});
          res.write('Oh no! Could not append to file');
          res.end();
        } else {
          res.writeHead(200, {'Content-Type': 'text/plain'});
          res.write('Comment added successfully');
          res.end();
        }
      });
      break;
    default:
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.write('Oh no! Could not find file');
      res.end();
      break;
  }
}).listen(1337);
console.log('Server running at http://localhost:1337/');
