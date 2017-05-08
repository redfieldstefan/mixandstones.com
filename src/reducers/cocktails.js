// import { GET_COCKTAILS } from "../actions/cocktails";

export const cocktails = (state = {}, action) => {
  switch(action.type){
    case "GET_COCKTAILS":
      return {
        ...state,
        cocktails: action.cocktails
      };
    default:
      return state;
  }
};
