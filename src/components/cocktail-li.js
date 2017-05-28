import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const CocktailLi = ({className, image, name, description}) => (
  <li className={classnames(className, "CocktailLi")}>
    <img className="cocktail-li-image" src={image} alt={name}/>
    <h5>{name}</h5>
    <p>{description}</p>
  </li>
);

CocktailLi.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default CocktailLi
