"use strict";

var express = require("express"),
  http = require("http"),
  mongoose = require("mongoose");
var app = express();
var cocktails = express.Router();
var ingredients = express.Router();
var server = http.createServer(app);
var port = 3001;

require('./api/ingredients')(ingredients);
require('./api/cocktails')(cocktails);
app.use('/api', ingredients);
app.use('/api', cocktails);

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/mixandstones_store');

if(process.env.environment === "prod") {
  app.use(express.static(__dirname + "/build"));
}

server.listen(port, function() {
  console.log("lookin legit on port %d", port);
});

exports.port = port;
