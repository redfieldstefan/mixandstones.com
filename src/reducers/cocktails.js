import { CHANGE_STEP } from "../actions/cocktails";

const initialState = {
  currentStep: "Basics",
}

export const cocktails = (state = initialState, action) => {
  switch(action.type){
    case CHANGE_STEP:
      return {
        ...state,
        currentStep: action.step
      };
    default:
      return state;
  }
};
