
var express = require('express');
var fs = require('fs');

var homepage = fs.readFileSync('index.html');

var buf = new Buffer(homepage);

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  buf.toString('utf8', 0, buf.length);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
