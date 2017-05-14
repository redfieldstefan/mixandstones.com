import AWS from "aws-sdk"
import awsConfig from "../../aws.json";

export const ALL_COCKTAILS = "ALL_COCKTAILS";
export const CREATE_COCKTAIL = "CREATE_COCKTAIL";
export const COCKTAIL_CREATED = "COCKTAIL_CREATED";
export const UPDATE_COCKTAIL = "UPDATE_COCKTAIL";
export const CHANGE_STEP = "CHANGE_STEP";
export const CHANGE_NAME = "CHANGE_NAME";

import api from "../api";

const actions = {
  createCocktail: (cocktail) => (dispatch) => {
    const file = cocktail.imageFile;
    var bucket = new AWS.S3({ params: { Bucket: "mix-and-stones-cocktails"} });
    bucket.config.region = 'us-west-1';
    bucket.config.update(awsConfig);

    var params = {Key: file.name, ContentType: file.type, Body: file};

    return bucket.putObject(params, function (err, data) {
      if(err) {
        return console.log(err);
      }
      cocktail.image = `https://s3-us-west-2.amazonaws.com/mix-and-stones-cocktails/${file.name}`;
      api.createCocktail(cocktail)
        .then(({cocktail}) => {
          dispatch(actions.cocktailCreated(cocktail));
        });
    });
  },
  cocktailCreated: (cocktail) => {
    return {
      type: COCKTAIL_CREATED,
      cocktail
    }
  },
  fetchAllCocktails: () => (dispatch) => {
    api.fetchAllCocktails()
      .then((data) => {
        return {
          type: ALL_COCKTAILS,
          cocktails: data.cocktails
        }
      });
  },
  changeStep: (step) => {
    return {
      type: CHANGE_STEP,
      step
    }
  },
  changeName: (name) => {
    return {
      type: CHANGE_NAME,
      name
    }
  }
};

export default actions;
