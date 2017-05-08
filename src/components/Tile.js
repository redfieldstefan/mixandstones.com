import React from "react";
import '../styles/tile.css';

const Tile = ({className, ingredient, onClick}) => {

  const _onClick = () => {
    return onClick(ingredient);
  };

  return (
    <li className={`Tile ${className}`} onClick={_onClick}>
      <img className="Tile-image" src={ingredient.image} alt={ingredient.name} />
      <h1 className="Tile-title">{ingredient.name}</h1>
    </li>
  );
};

export default Tile;
