import React from "react";
import PropType from "prop-types";
import classnames from "classnames";

const CocktailLi = ({className, image, name, description}) => (
  <li className={classnames(className, "CocktailLi")}>
    <img className="cocktail-li-image" src={image} alt={name}/>
    <h5>{name}</h5>
    <p>{description}</p>
  </li>
);

CocktailLi.propTypes = {
  className: PropType.string,
  image: PropType.string,
  name: PropType.string.isRequired,
  description: PropType.string.isRequired
};

export default CocktailLi
