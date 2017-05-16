import BasePage from "../components/base-page";
import { connect } from "react-redux";
import React, { Component } from "react";
import cocktailActions from "../actions/cocktails";
import ingredientActions from "../actions/ingredients";
import IngredientsList from "../components/ingredients-list";
import SelectedIngredients from "../components/selected-ingredients";
import StepSelect from "../components/step-select";
import TextInput from "../components/text-input";

class CreateCocktail extends Component {

  componentDidMount() {
    this.props.fetchAllIngredients();
  }

  render () {

    const {
      addIngredient,
      cocktail,
      changeField,
      changeStep,
      currentStep,
      ingredients,
      newCocktail,
      selectedIngredients,
      toggleIngredient,
      updateCocktail,
      updateIngredient
    } = this.props;

    const _handleChange = (e) => {
      e.preventDefault();
      const {name, value} = e.target;

      updateCocktail({
        [name]: value
      });
    };

    const _handleImage = (e) => {
      e.preventDefault();

      updateIngredient({
        imageFile: e.target.files[0]
      });
    }

    const createCocktail = () => {
      createCocktail(cocktail);
    };

    return (
      <BasePage>
        <div className="CreateCocktailPage">
          <section className="create-cocktail-current-step">

            <div className="create-cocktail-steps">
              <StepSelect
                className={`create-cocktail-step selected-${currentStep === "Choose Ingredients"}`}
                step="Choose Ingredients"
                onClick={changeStep}
              />
              <StepSelect
                className={`create-cocktail-step selected-${currentStep === "Write Instructions"}`}
                step="Write Instructions"
                onClick={changeStep}
              />
              <StepSelect
                className={`create-cocktail-step selected-${currentStep === "Add Image"}`}
                step="Add Image"
                onClick={changeStep}
              />
            </div>

            {
              currentStep === "Choose Ingredients" &&
              <IngredientsList
                className="create-cocktail-add-to-list full-width"
                ingredients={ingredients}
                selectedIngredients={selectedIngredients}
                toggleIngredient={toggleIngredient}

              />
            }

            {
              currentStep === "Write Instructions" &&
              <textarea placeholder="Enter instructions for your cocktail"/>
            }

            {
              currentStep === "Add Image" &&
              <input
                id="file-selector"
                type="file"
                name="imageFile"
                accept="image/*"
              />
            }

          </section>

          <section className="create-cocktail-sidebar">
            <h2>Your Cocktail: {newCocktail.name}</h2>
            <p>{newCocktail.description}</p>
            <TextInput
              className="full-width"
              name="name"
              value={newCocktail.name}
              placeholder="Choose Name"
              onChange={changeField}
            />
            <textarea
              className="TextArea full-width"
              name="description"
              placeholder="Brief description of your cocktail" onChange={changeField}
              value={newCocktail.value}
             />
            <SelectedIngredients
              className="full-width"
              ingredients={selectedIngredients}
              onClick={toggleIngredient}
            />
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
      dispatch(cocktailActions.changeStep(step));
    },
    changeField: (e) => {
      const { name, value } = e.target;
      dispatch(cocktailActions.changeField({[name]: value}));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateCocktail);
