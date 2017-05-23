import classnames from "classnames";
import React, {PropTypes} from "react";
import Tile from "./tile";

const IngredientsList = ({className, ingredients, selectedIngredients, toggleIngredient}) => {
  return (
    <ul className={classnames("IngredientsList", className)}>
      {
        ingredients.map((ingredient, i) => (
          <li className="ingredients-list-tile-container">
            <Tile
              className={
                `ingredients-list-tile
                ${selectedIngredients.indexOf(ingredient) > -1 ?
                "selected" :
                ""
                }`
              }
              key={i}
              ingredient={ingredient}
              onClick={toggleIngredient}
            />
          </li>
        ))
      }
    </ul>
  );
};

export default IngredientsList;
