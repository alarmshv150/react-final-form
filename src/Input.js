import React from "react";

function Input({ ...props }) {
  return (
    <div>
      <label>{props.label}</label>
      <input {...props} />
    </div>
  );
}

export default Input;
