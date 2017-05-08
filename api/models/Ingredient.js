var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var Ingredient = Schema({
  name: { type: String, unique: true, required: true },
  description: { type: String, required: true },
  image: String
});

module.exports = mongoose.model("Ingredient", Ingredient);
