import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const CocktailLi = ({className, cocktail, onClick}) => {

  const {
    image,
    name,
    description
  } = cocktail;

  const _onClick = () => onClick(cocktail);

  return(
    <li className={classnames(className, "CocktailLi")} onClick={_onClick}>
      <img className="cocktail-li-image" src={image} alt={name}/>
      <h5>{name}</h5>
      <p>{description}</p>
    </li>
  );
};

CocktailLi.propTypes = {
  className: PropTypes.string,
  cocktail: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  })
};

export default CocktailLi
