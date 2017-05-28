import { ALL_COCKTAILS, CHANGE_STEP } from "../actions/cocktails";

const initialState = {
  currentStep: "Basics",
  allCocktails: []
}

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
    default:
      return state;
  }
};
