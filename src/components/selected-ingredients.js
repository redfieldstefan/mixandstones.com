import React, { PropTypes } from "react";

const SelectedIngredients = ({className, ingredients, onClick}) => {


  return (
    <div className="current-selections">
      <h5 className="sub-headline">Your ingredients</h5>
      <ul className="selected-ingredients">
        {
          ingredients.map((ingredient, i) => {

            const _onClick = () => {
              return onClick(ingredient)
            };

            return (
              <li
                className="selected-ingredient-container"
                onClick={_onClick}
                key={i}
              >
                <span className="selected-ingredient">
                  <span className="x-symbol">&#9747;</span>{ingredient.name}
                </span>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
};

export default SelectedIngredients;
