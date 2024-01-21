var http = require('http');

http.createServer(function (req, res) {
  res.write("Krc viskas veikia cyplionak");
  res.end();
}).listen(8080);
