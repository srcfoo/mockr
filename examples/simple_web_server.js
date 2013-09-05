/*

Copied from node.js home page.

Used to test node.js install

*/

var interface = '0.0.0.0';
var port = 1337;
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(port, interface);
console.log('Server running at http://' + interface + ':' + port.toString() + '/');