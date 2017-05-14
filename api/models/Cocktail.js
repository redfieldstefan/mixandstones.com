"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Cocktail = Schema({
  description: { type: String },
  image: String,
  ingredients: Array,
  instructions: Array,
  name: { type: String, required: true, unique: true },
  url: { type: String }
});

module.exports = mongoose.model("Cocktail", Cocktail);
