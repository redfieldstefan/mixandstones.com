import { connect } from "react-redux";
import React, { Component } from "react";
import AddIngredientForm from "../components/AddIngredientForm";
import BasePage from "../components/BasePage";
import ingredientActions from "../actions/ingredients";

class AddIngredients extends Component {

  render () {
    const _handleChange = (e) => {
      e.preventDefault();
      const {name, value} = e.target;

      this.props.updateIngredient({
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

    return (
      <BasePage>
        <div className="AddIngredientPage">
          <h1>Add Ingredient</h1>
          <AddIngredientForm
            ingredient={this.props.ingredient}
            onChange={_handleChange}
            onSubmit={_addIngredient}
            handleImage={_handleImage}
          />
        </div>
      </BasePage>
    )
  }
};

const mapStateToProps = ({ingredients}) => {
  return {
    ingredient: ingredients.currentIngredient
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateIngredient: (ingredient) => {
      dispatch(ingredientActions.updateIngredient(ingredient))
    },
    addIngredient: (ingredient) => {
      dispatch(ingredientActions.addIngredient(ingredient));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddIngredients);
