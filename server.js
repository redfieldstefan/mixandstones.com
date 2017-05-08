"use strict";

var express = require("express"),
  http = require("http"),
  mongoose = require("mongoose");

var app = express();
var createIngredient = express.Router();
var server,
  port;

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/mixandstones_store');

server = http.createServer(app);

if(process.env.environment === "prod") {
  app.use(express.static(__dirname + "/build"));
}

require('./api/create-ingredient')(createIngredient);
app.use('/api', createIngredient);

port = 3001;

server.listen(port, function() {
  console.log("lookin legit on port %d", port);
});

exports.port = port;
