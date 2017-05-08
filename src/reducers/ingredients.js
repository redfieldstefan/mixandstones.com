import {
  GET_INGREDIENTS,
  UPDATE_INGREDIENT,
  PROVIDE_INGREDIENTS,
  TOGGLE_INGREDIENT } from "../actions/ingredients";

const initialState = {
  currentIngredient: {},
  ingredientsList: [],
  selectedIngredients: []
};

export const ingredients = (state = initialState, action) => {
  switch(action.type) {
    case GET_INGREDIENTS:
      return {
        ...state,
        ingredients: action.ingredients
      }
    case UPDATE_INGREDIENT: {
      const updatedIngredient = {...state.currentIngredient, ...action.ingredient}
      return {
        ...state,
        currentIngredient: updatedIngredient
      }
    }
    case PROVIDE_INGREDIENTS: {
      return {
        ...state,
        ingredientsList: action.ingredients
      }
    }
    case TOGGLE_INGREDIENT: {
      let updatedIngredients;

      if(state.selectedIngredients.indexOf(action.ingredient) > -1) {
        updatedIngredients = state.selectedIngredients.filter((ingredient) => {
          return (ingredient !== action.ingredient);
        });
      } else {
        updatedIngredients = [...state.selectedIngredients, action.ingredient];
      }
      return {
        ...state,
        selectedIngredients: updatedIngredients
      };
    }
    default:
      return state;
  }
};
