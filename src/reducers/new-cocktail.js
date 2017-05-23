import { CHANGE_FIELD } from "../actions/cocktails";

const initialState = {
  name: "",
	description: "",
  instructions: ""
}
export const newCocktail = (state = initialState, action) => {
  switch(action.type){
    case CHANGE_FIELD:
      return {
       	...state,
				...action.field
      };
      default:
        return state;
  }
};
