import BasePage from "../components/base-page";
import { connect } from "react-redux";
import React, { Component } from "react";
import cocktailActions from "../actions/cocktails";
import ingredientActions from "../actions/ingredients";
import IngredientsList from "../components/ingredients-list";
import SelectedIngredients from "../components/selected-ingredients";

class CreateCocktail extends Component {

  componentDidMount() {
    this.props.fetchAllIngredients();
  }

  render () {
    const _handleChange = (e) => {
      e.preventDefault();
      const {name, value} = e.target;

      this.props.updateCocktail({
        [name]: value
      });
    };

    const _handleImage = (e) => {
      e.preventDefault();

      this.props.updateIngredient({
        imageFile: e.target.files[0]
      });
    }

    const _addIngredient = (e) => {
      e.preventDefault();
      this.props.addIngredient(this.props.ingredient)
    };

    const toggleIngredient = (ingredient) => {
      this.props.toggleIngredient(ingredient)
    };

    const createCocktail = () => {
      this.props.createCocktail(this.props.cocktail);
    };

    return (
      <BasePage>
        <div className="CreateCocktailPage">
          <h1>Create Cocktail</h1>
          <section className="create-cocltail-ingredients-list">
            <IngredientsList
              ingredients={this.props.ingredients}
              selectedIngredients={this.props.selectedIngredients}
              toggleIngredient={toggleIngredient}
            />
            <SelectedIngredients
              ingredients={this.props.selectedIngredients}
              onClick={toggleIngredient}
            />
          </section>
        </div>
      </BasePage>
    )
  }
};

const mapStateToProps = ({ingredients, cocktails}) => {
  return {
    ingredients: ingredients.ingredientsList,
    selectedIngredients: ingredients.selectedIngredients
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllIngredients: () => {
      dispatch(ingredientActions.fetchAllIngredients());
    },
    updateCocktail: (cocktail) => {
      dispatch(cocktailActions.updateCocktail());
    },
    toggleIngredient: (ingredient) => {
      dispatch(ingredientActions.toggleIngredient(ingredient));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateCocktail);
