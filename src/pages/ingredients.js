import { connect } from "react-redux";
import React, {Component} from "react";
import { Tile, IngredientsList, SelectedIngredients } from "../components"
import BasePage from "../components/base-page";
import ingredientActions from "../actions/ingredients";

class Ingredients extends Component {

  componentDidMount() {
    this.props.fetchAllIngredients();
  }

  render() {

    const toggleIngredient = (ingredient) => {
      this.props.toggleIngredient(ingredient)
    };

    return (
      <BasePage>
        <div className="Ingredients">

          <IngredientsList
            ingredients={this.props.ingredients}
            toggleIngredient={toggleIngredient}
            selectedIngredients={this.props.selectedIngredients}
          />

          <SelectedIngredients
            ingredients={this.props.selectedIngredients}
            onClick={toggleIngredient}
          />
        </div>
      </BasePage>
    );
  }
};

const mapStateToProps = ({ingredients}) => {
  return {
    ingredients: ingredients.ingredientsList,
    selectedIngredients: ingredients.selectedIngredients
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllIngredients: () => {
      dispatch(ingredientActions.fetchAllIngredients())
    },
    toggleIngredient: (ingredient) => {
      dispatch(ingredientActions.toggleIngredient(ingredient));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Ingredients);
