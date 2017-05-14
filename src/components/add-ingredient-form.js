import React, { PropTypes } from "react";
import TextInput from "./text-input";

const AddIngredientForm = ({ingredient, onSubmit, onChange, handleImage }) => {

  return (
    <form className="AddIngredientForm" onSubmit={onSubmit}>
      <TextInput
        name="name"
        placeholder="name"
        value={ingredient.name}
        onChange={onChange}
      />
      <TextInput
        name="description"
        placeholder="description"
        value={ingredient.description}
        onChange={onChange}
      />
      <input
        id="file-selector"
        type="file"
        name="imageFile"
        accept="image/*"
        onChange={handleImage}
      />
      <button type="submit">Create Ingredient</button>
    </form>
    // TODO
    // Class: Fruit, Liquor, Juice etc
    // Taste: Savory, Sweet?
    // Image
  );
};

AddIngredientForm.propTypes = {
  ingredient: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default AddIngredientForm;
