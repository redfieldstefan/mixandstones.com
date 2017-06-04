import React from "react";
import classnames from "classnames";

const GlassTile = ({className, glass, onClick, ...restOfProps}) => {

  const _onClick = () => {
    return onClick(glass);
  }

  return (
    <li className={classnames(className, "GlassTile")} {...restOfProps} onClick={_onClick}>
      <img src={glass.image} alt={glass.name} />
      <h5>{glass.name}</h5>
    </li>
  );
};

export default GlassTile;
