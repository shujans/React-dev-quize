import React from "react";
import style from "./style/Form.Module.css";
const Form = ({ children, className, ...rest }) => {
  return (
    <form action="#" className={`${className} ${style.form}`} {...rest}>
      {children}
    </form>
  );
};

export default Form;
