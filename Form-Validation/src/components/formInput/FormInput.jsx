import React from "react";
import "./formInput.css";

const FormInput = (props) => {
  const { label, onChange, id, ...inputProps } = props;
  return (
    <div className="formInput">
      <label htmlFor="Username">{label}</label>
      <input {...inputProps} onChange={onChange} />
    </div>
  );
};

export default FormInput;
