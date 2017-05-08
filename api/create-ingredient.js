"use strict";

var Ingredient = require('./models/Ingredient.js');
var bodyparser = require('body-parser');

module.exports = function(router) {
  router.use(bodyparser.json());

  router.post("/create-ingredient", function(req, res) {
    var newIngredient = new Ingredient(req.body);
    newIngredient.save()
      .then((data) => {
        return res.status(200).json({msg: `${newIngredient.name} has been created`, data})
      })
      .catch(err => {
        console.log(err);
        return res.status(500).json({msg: "There was an error creating your ingredient"});
      });
  });

  router.get("/ingredients", function(req, res) {
    Ingredient.find({})
      .then((data) => {
        return res.status(200).json({msg: "Here are all the ingredients", ingredients: data});
      })
      .catch(err => {
        console.log(err);
        return res.status(500).json({msg: "There was an error fetching ingredients"});
      });
  });

};
