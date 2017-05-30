import AddIngredientForm from "../components/add-ingredient-form";
import BasePage from "../components/base-page";
import {bindMethods} from '../utils';
import { connect } from "react-redux";
import ingredientActions from "../actions/ingredients";
import React, { Component } from "react";

class AddIngredients extends Component {

  constructor(props) {
    super(props);

    bindMethods([
      '_handleChange',
      '_addIngredient',
      '_handleImage'
    ], this);
  }

  _handleChange(e) {
    e.preventDefault();

    const {name, value} = e.target;
    this.props.updateIngredient({
      [name]: value
    });
  }

  _addIngredient(e) {
    e.preventDefault();

    this.props.addIngredient(this.props.ingredient)
  }

  _handleImage(e) {
    e.preventDefault();

    this.props.updateIngredient({
      imageFile: e.target.files[0]
    });
  }

  render () {
    return (
      <BasePage>
        <div className="AddIngredientPage">
          <h1>Add Ingredient</h1>
          <AddIngredientForm
            ingredient={this.props.ingredient}
            onChange={this._handleChange}
            onSubmit={this._addIngredient}
            handleImage={this._handleImage}
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
