import React, { PropTypes } from "react";
import Tile from "./tile.js";
import classnames from "classnames";

import selectX from "../../images/select-x.png";

const StepSelect = ({className, step, image, onClick}) => (
  <div className={classnames("StepSelect", className)} onClick={() => {
    onClick(step);
  }}>
    <img className="step-select-icon" src={image ? image : selectX} />
    <h5>{step}</h5>
  </div>
);

export default StepSelect;
