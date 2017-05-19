import { combineReducers } from "redux";
import { cocktails } from "./cocktails";
import { newCocktail } from "./new-cocktail";
import { ingredients } from "./ingredients";

const rootReducer = combineReducers({
  cocktails,
  newCocktail,
  ingredients
});

export default rootReducer;
