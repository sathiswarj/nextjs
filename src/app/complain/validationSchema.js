// validationSchema.js
import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  phoneno: yup
    .number()
    .typeError("Phone number must be a number")
    .positive("Phone number must be positive")
    .integer("Phone number must be an integer")
    .required("Phone number is required"),
  password: yup
    .string()
    .min(4, "Minimum 4 characters are required")
    .max(15, "Enter up to 15 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

 
