import React, {PropTypes} from "react";

const TextInput = ({onChange, placeholder, value, ...restOfProps}) => {
  return (
    <input
      {...restOfProps}
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
