import { combineReducers } from "redux";
import { cocktails } from "./cocktails";
import { ingredients } from "./ingredients";

const rootReducer = combineReducers({
  cocktails,
  ingredients
});

export default rootReducer;
