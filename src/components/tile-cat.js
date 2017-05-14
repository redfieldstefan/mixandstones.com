import React from "react";

const Tile = ({className, ingredient, onClick}) => {

  const _onClick = () => {
    return onClick(ingredient);
  };

  return (
    <div className={`Tile ${className}`} onClick={_onClick}>
      <img className="Tile-image" src={ingredient.image} alt={ingredient.name} />
      <h1 className="Tile-title">{ingredient.name}</h1>
    </div>
  );
};

export default Tile;
