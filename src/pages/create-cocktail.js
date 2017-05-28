import BasePage from "../components/base-page";
import { connect } from "react-redux";
import React, { Component } from "react";
import cocktailActions from "../actions/cocktails";
import ingredientActions from "../actions/ingredients";
import IngredientsList from "../components/ingredients-list";
import SelectedIngredients from "../components/selected-ingredients";
import StepSelect from "../components/step-select";
import TextInput from "../components/text-input";

// Icons
import basics from "../../images/ic_assignment_black_24px.svg";
import create from "../../images/ic_create_black_24px.svg";
import cherry from "../../images/1494323023_Cherry.png";
import uploadImage from "../../images/ic_add_to_photos_black_48px.svg";

class CreateCocktail extends Component {

  componentDidMount() {
    this.props.fetchAllIngredients();
  }

  render () {

    const {
      addImage,
      cocktail,
      changeField,
      changeStep,
      createCocktail,
      currentStep,
      ingredients,
      newCocktail,
      selectedIngredients,
      toggleIngredient,
      updateCocktail,
      updateIngredient
    } = this.props;

    const _createCocktail = () => {
      const cocktail = {
        ...this.props.newCocktail,
        ingredients: this.props.selectedIngredients
      };
      createCocktail(cocktail)
    };

    const notStarted = (
      !newCocktail.name.length &&
      !newCocktail.description.length &&
      !selectedIngredients.length &&
      !newCocktail.instructions.length
    );

    return (
      <BasePage className="CreateCocktailPage">
        <section className="create-cocktail-current-step">
          <div className="create-cocktail-steps">
            <StepSelect
              image={basics}
              className={`create-cocktail-step selected-${currentStep === "Basics"}`}
              step="Basics"
              onClick={changeStep}
            />
            <StepSelect
              image={cherry}
              className={`create-cocktail-step selected-${currentStep === "Choose Ingredients"}`}
              step="Choose Ingredients"
              onClick={changeStep}
            />
            <StepSelect
              image={create}
              className={`create-cocktail-step selected-${currentStep === "Write Instructions"}`}
              step="Write Instructions"
              onClick={changeStep}
            />
            <StepSelect
              image={uploadImage}
              className={`create-cocktail-step selected-${currentStep === "Add Image"}`}
              step="Add Image"
              onClick={changeStep}
            />
          </div>

          {
            currentStep === "Basics" &&
            <div className="step-basic">
              <TextInput
                className="full-width"
                name="name"
                value={newCocktail.name}
                placeholder="Choose Name"
                onChange={changeField}
              />
              <textarea
                className="TextArea step-description full-width"
                name="description"
                placeholder="Brief description of your cocktail" onChange={changeField}
                value={newCocktail.value}
              />
            </div>
          }
          {
            currentStep === "Choose Ingredients" &&
            <IngredientsList
              className="create-cocktail-add-to-list full-width step-section"
              ingredients={ingredients}
              selectedIngredients={selectedIngredients}
              toggleIngredient={toggleIngredient}

            />
          }
          {
            currentStep === "Write Instructions" &&
            <textarea
              name="instructions"
              className="TextArea step-instructions step-section"
              placeholder="Enter instructions for your cocktail"
              onChange={changeField}
            />
          }
          {
            currentStep === "Add Image" &&
            <div>
              <label className="create-cocktail-upload-photo" for="imageFile">
                <img src={uploadImage} className="create-cocktail-upload-image" />
                Choose a file
                <input
                  className="step-section display-none"
                  id="file-selector"
                  type="file"
                  name="imageFile"
                  accept="image/*"
                  onChange={addImage}
                />
              </label>
            </div>
          }
        </section>

        <section className="create-cocktail-sidebar">
          { notStarted &&
            <p className="create-cocktail-nudge">
              Start creating your cocktail
            </p>
          }
          <h3 className="new-cocktail-name color-light-orange">{newCocktail.name}</h3>
          <p className="new-cocktail-description">{newCocktail.description}</p>
          <SelectedIngredients
            className="full-width new-cocktail-ingredients"
            ingredients={selectedIngredients}
            onClick={toggleIngredient}
          />
          <p className="margin-top full-width left new-cocktail-instructions">
            {newCocktail.instructions}
          </p>
          <button
            className="create-cocktail-button"
            onClick={_createCocktail}
          >
            Create Cocktail
          </button>
        </section>
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
    addImage: (e) => {
      e.preventDefault();

      dispatch(cocktailActions.changeField({
        imageFile: e.target.files[0]
      }));
    },
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
    },
    createCocktail: (cocktail) => {
      dispatch(cocktailActions.createCocktail(cocktail));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateCocktail);
