import React from "react";

const FormInput = ({ label, id, type, placeholder, name, register }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        {...register} 
      />
 
    </div>
  );
};

export default FormInput;
