import { connect } from "react-redux";
import React, {Component} from "react";
import { Tile } from "../components"
import BasePage from "../components/BasePage";
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
          <ul className="ingredients-list">
            {
              this.props.ingredients.map((ingredient, i) => (
                <Tile
                  className="ingredients-list-tile"
                  key={i}
                  ingredient={ingredient}
                  onClick={toggleIngredient}
                />
              ))
            }
          </ul>

          <div className="current-selections">
            <ul className="selected-ingredients">
              {
                this.props.selectedIngredients.map((ingredient, i) => (
                  <li className="selected-ingredient" key={i}>{ingredient.name}</li>
                ))
              }
            </ul>
          </div>
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
