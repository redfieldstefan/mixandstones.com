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

app.use(express.static(__dirname + "/build"));

require('./create-ingredient')(createIngredient);
app.use('/api', createIngredient);

port = process.env.PORT || 4000;

server.listen(port, function() {
  console.log("lookin legit on port %d", port);
});

exports.port = port;
