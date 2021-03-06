"use strict";

var Cocktail = require("./models/Cocktail");
var bodyparser = require("body-parser");
var urlify = require("./helpers/urlify");

module.exports = function(router) {
  router.use(bodyparser.json());

  router.get("/cocktails", function(req, res) {
    Cocktail.find({})
    .then((data) => {
      return res.status(200).json({msg: "Here are all the cocktails", cocktails: data});
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json({msg: "There was an error fetching cocktails"});
    });
  });

  router.post("/find-cocktail", function(req, res) {
    Cocktail.find({url: req.body.url})
    .then((data) => {
      return res.status(200).json({msg: "Here's your cocktail", cocktail: data[0]});
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json({msg: "There was an error fetching individual cocktail"});
    });
  });

  router.post("/create-cocktail", function(req, res) {
    var newCocktail = new Cocktail(req.body);
    newCocktail.url = urlify(req.body.name);

    newCocktail.save()
      .then((data) => {
        return res.status(200).json({msg: `${newCocktail.name} has been created`, cocktail: data});
      })
      .catch(err => {
        console.log(err);
        return res.status(500).json({msg: "There was an error creating your cocktail"});
      });
  });

  router.get("/calculate-cocktails", function (req, res) {
    var ingredients = req.body;
    Cocktail.find({
      ingredients: {
        $not: {
          $elemMatch: {
            $nin: ingredients
          }
        }
      }
    })
    .then((data) => {
      return res.status(200).json({msg: "Here are all right cocktails", cocktails: data});
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json({msg: "There was an error fetching cocktails"});
    });
  })
};
