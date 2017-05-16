import AWS from "aws-sdk"
import awsConfig from "../../aws.json";

export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const UPDATE_INGREDIENT = "UPDATE_INGREDIENT";
export const INGREDIENT_ADDED = "INGREDIENT_ADDED";
export const PROVIDE_INGREDIENTS = "PROVIDE_INGREDIENTS";
export const TOGGLE_INGREDIENT = "TOGGLE_INGREDIENT";

import api from "../api";

const actions = {
  addIngredient: (ingredient) => (dispatch) => {
    const file = ingredient.imageFile;
    var bucket = new AWS.S3({ params: { Bucket: "mix-and-stones-ingredients"} });
    bucket.config.region = "us-west-1";
    bucket.config.update(awsConfig);

    var params = {Key: file.name, ContentType: file.type, Body: file};

    return bucket.putObject(params, function (err, data) {
      if(err) {
        return console.log(err);
      }
      ingredient.image = `https://s3-us-west-2.amazonaws.com/mix-and-stones-ingredients/${file.name}`;
      api.addIngredient(ingredient)
        .then(({ingredient}) => {
          dispatch(actions.ingredientAdded(ingredient));
        });
    });
  },
  ingredientAdded: (ingredient) => {
    return {
      type: INGREDIENT_ADDED,
      ingredient
    }
  },
  updateIngredient: (ingredient) => {
    return {
      type: UPDATE_INGREDIENT,
      ingredient
    }
  },
  fetchAllIngredients: () => (dispatch) => {
    api.fetchAllIngredients()
      .then((data) => {
        dispatch(actions.provideIngredients(data.ingredients));
      });
  },
  provideIngredients: (ingredients) => {
    return {
      type: PROVIDE_INGREDIENTS,
      ingredients
    }
  },
  toggleIngredient: (ingredient) => {
    return {
      type: TOGGLE_INGREDIENT,
      ingredient
    }
  }
};

export default actions;
