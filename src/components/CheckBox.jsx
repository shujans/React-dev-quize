import React from "react";

const CheckBox = ({ text, className, ...rest }) => {
  return (
    <label className={className}>
      <input type="checkbox" {...rest} /> <span>{text}</span>
    </label>
  );
};
// I agree to the Terms & Conditions

export default CheckBox;
