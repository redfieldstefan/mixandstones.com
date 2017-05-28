import { ALL_COCKTAILS, CHANGE_STEP, COCKTAIL_CREATED } from "../actions/cocktails";

const initialState = {
  currentStep: "Basics",
  allCocktails: [],
  currentCocktail: {}
};

export const cocktails = (state = initialState, action) => {
  switch(action.type){
    case CHANGE_STEP:
      return {
        ...state,
        currentStep: action.step
      };
    case ALL_COCKTAILS:
      return {
        ...state,
        allCocktails: action.cocktails
      };
    case COCKTAIL_CREATED:
      return {
        ...state,
        currentCocktail: action.cocktail
      };
    default:
      return state;
  }
};
