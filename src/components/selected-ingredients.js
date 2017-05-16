import React, { PropTypes } from "react";
import classnames from  "classnames";

const SelectedIngredients = ({className, ingredients, onClick}) => {


  return (
    <ul className={classnames("selected-ingredients", className)}>
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
  );
};

export default SelectedIngredients;
