import BasePage from "../components/base-page";
import { connect } from "react-redux";
import React, { Component } from "react";
import cocktailActions from "../actions/cocktails";
import ingredientActions from "../actions/ingredients";
import IngredientsList from "../components/ingredients-list";
import SelectedIngredients from "../components/selected-ingredients";
import StepSelect from "../components/step-select";

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
          <section className="create-cocktail-current-step">
            <h2>Get Started</h2>


            <StepSelect step="Choose Ingredients" onClick={this.props.changeStep} />
            <StepSelect step="Write Instructions" onClick={this.props.changeStep} />
            <StepSelect step="Add Image" onClick={this.props.changeStep} />

            {
              this.props.currentStep === "Choose Ingredients" &&
              <IngredientsList
                ingredients={this.props.ingredients}
                selectedIngredients={this.props.selectedIngredients}
              />
            }

            {
              this.props.currentStep === "Write Instructions" &&
              <textarea placeholder="Enter instructions for your cocktail"/>
            }

            {
              this.props.currentStep === "Add Image" &&
              <input
                id="file-selector"
                type="file"
                name="imageFile"
                accept="image/*"
              />
            }

          </section>
          <section className="create-cocktail-sidebar">
            <h2>Your Cocktail: {this.props.newCocktail.name}</h2>
            <input type="text"  value={this.props.newCocktail.name} placeholder="Choose Name" onChange={this.props.changeName}/>
            <textarea placeholder="Brief description of your cocktail" />
          </section>
        </div>
      </BasePage>
    )
  }
};

const mapStateToProps = ({ingredients, cocktails, newCocktail}) => {
  return {
    ingredients: ingredients.ingredientsList,
    selectedIngredients: ingredients.selectedIngredients,
    currentStep: cocktails.currentStep,
    newCocktail
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
    },
    changeStep: (step) => {
      console.log("STEP")
      console.log(step)
      dispatch(cocktailActions.changeStep(step));
    },
    changeName: (e) => {
      dispatch(cocktailActions.changeName(e.target.value));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateCocktail);
