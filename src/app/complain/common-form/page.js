"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormInput from "../common-input/page";
import {schema} from "../validationSchema"; 

const formTypes = {
  INPUT: "input",
  SELECT: "select",
  TEXTAREA: "textarea",
};

const FormComponent = ({ formControls = [], onSubmit, buttonText }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",   
  });

  const renderFormElement = (formElement) => {
    let content = null;

    switch (formElement?.componentType) {
      case formTypes.INPUT:
        content = (
          <FormInput
            label={formElement.label}
            id={formElement.id}
            type={formElement.type}
            placeholder={formElement.placeholder}
            name={formElement.name}
            register={register(formElement.name)} 
            error={errors[formElement.name]}
          />
        );
        break;

      default:
        content = null;
    }

    return content;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {formControls.map((formElement, index) => (
        <div key={index} className="form-control">
          {renderFormElement(formElement)}
          {errors[formElement.name] && (
            <p className="error-message">{errors[formElement.name]?.message}</p>
          )}
        </div>
      ))}
      <button type="submit" disabled={!isValid}>
        {buttonText}
      </button>
    </form>
  );
};

export default FormComponent;
