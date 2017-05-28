import React from "react";
import classnames from "classnames";

const BasePage = ({children, className}) => {

  return (
    <div className={classnames("BasePage", className)}>
      {children}
    </div>
  );
};

export default BasePage;
