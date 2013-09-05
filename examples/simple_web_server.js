/*

Copied from node.js home page.

Used to test node.js install

*/

var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, '0.0.0.0');
console.log('Server running at http://127.0.0.1:1337/');