import { CHANGE_NAME } from "../actions/cocktails";

const initialState = {
  name: ''
}
export const newCocktail = (state = initialState, action) => {
  switch(action.type){
    case CHANGE_NAME:
      return {
        ...state,
        name: action.name
      };
      default:
        return state;
  }
};
