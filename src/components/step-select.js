import React, { PropTypes } from "react";

import selectX from "../../images/select-x.png";

const StepSelect = ({step, image, onClick}) => (
  <div className="StepSelect" onClick={() => {
    onClick(step);
  }}>
    <img src={image ? image : selectX} />
    <h5>{step}</h5>
  </div>
);

export default StepSelect;
