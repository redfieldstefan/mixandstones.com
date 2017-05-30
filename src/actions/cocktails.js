import api from "../api";
import AWS from "aws-sdk"
import awsConfig from "../../aws.json";

export const ALL_COCKTAILS = "ALL_COCKTAILS";
export const CHANGE_STEP = "CHANGE_STEP";
export const CHANGE_FIELD = "CHANGE_FIELD";
export const CLEAR_COCKTAIL = "CLEAR_COCKTAIL";
export const COCKTAIL_CREATED = "COCKTAIL_CREATED";
export const CREATE_COCKTAIL = "CREATE_COCKTAIL";
export const SELECT_COCKTAIL = "SELECT_COCKTAIL";

const actions = {
  allCocktails: (cocktails) => {
    return {
      type: ALL_COCKTAILS,
      cocktails: cocktails
    }
  },
  changeStep: (step) => {
    return {
      type: CHANGE_STEP,
      step
    }
  },
  changeField: (field) => {
    return {
      type: CHANGE_FIELD,
      field
    }
  },
  clearCocktail: () => {
    return {
      type: CLEAR_COCKTAIL
    }
  },
  cocktailCreated: (cocktail) => {
    return {
      type: COCKTAIL_CREATED,
      cocktail
    }
  },
  createCocktail: (cocktail) => (dispatch) => {
    const file = cocktail.imageFile;
    var bucket = new AWS.S3({ params: { Bucket: "mix-and-stones-cocktails"} });
    bucket.config.region = "us-west-1";
    bucket.config.update(awsConfig);

    var params = {Key: file.name, ContentType: file.type, Body: file};

    return bucket.putObject(params, function (err, data) {
      if(err) {
        return console.error(err);
      }
      cocktail.image = `https://s3-us-west-2.amazonaws.com/mix-and-stones-cocktails/${file.name}`;
      api.createCocktail(cocktail)
        .then(({cocktail}) => {
          dispatch(actions.cocktailCreated(cocktail));
        });
    });
  },
  fetchAllCocktails: () => (dispatch) => {
    api.fetchAllCocktails()
      .then((data) => {
        dispatch(actions.allCocktails(data.cocktails));
      });
  },
  fetchCocktail: (url) => (dispatch) => {
    api.fetchCocktail(url)
      .then(({cocktail}) => {
        dispatch(actions.selectCocktail(cocktail));
      });
  },
  selectCocktail: (cocktail) => {
    return {
      type: SELECT_COCKTAIL,
      cocktail
    }
  }
};

export default actions;
