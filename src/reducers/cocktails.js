import {
  ALL_COCKTAILS,
  CHANGE_STEP,
  CLEAR_COCKTAIL,
  COCKTAIL_CREATED,
  SELECT_COCKTAIL
} from "../actions/cocktails";

const initialState = {
  currentStep: "Basics",
  allCocktails: [],
  currentCocktail: {}
};

export const cocktails = (state = initialState, action) => {
  switch(action.type){
    case ALL_COCKTAILS:
      return {
        ...state,
        allCocktails: action.cocktails
      };
    case CHANGE_STEP:
      return {
        ...state,
        currentStep: action.step
      };
    case CLEAR_COCKTAIL:
      return {
        ...state,
        currentCocktail: {}
      }
    case COCKTAIL_CREATED:
      return {
        ...state,
        currentCocktail: action.cocktail
      };
    case SELECT_COCKTAIL:
      return {
        ...state,
        currentCocktail: action.cocktail
      }
    default:
      return state;
  }
};
