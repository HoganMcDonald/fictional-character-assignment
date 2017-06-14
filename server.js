var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.use(express.static('public'));

app.listen(process.env.PORT || 7575);

app.get('/', function(req, res) {
  res.sendFile(path.resolve('public/views/index.html'));
});
