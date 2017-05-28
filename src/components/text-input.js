import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const TextInput = ({className, onChange, placeholder, value, ...restOfProps}) => {
  return (
    <input
      {...restOfProps}
      className={classnames("TextInput", className)}
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

TextInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string
};

TextInput.defaultProps = {
  placeholder: "",
  value: ""
};

export default TextInput;
