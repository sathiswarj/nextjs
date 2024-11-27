// "use client"

// import { useForm } from 'react-hook-form'
// import * as yup from 'yup'
// import { yupResolver } from '@hookform/resolvers/yup';

// const schema = yup.object().shape({
//   name: yup.string().required("Name is required"),
//   email: yup.string().email("Invalid email format").required("Email is required"),
//   phoneno: yup
//     .number()
//     .typeError("Phone number must be a number")
//     .positive("Phone number must be positive")
//     .integer("Phone number must be an integer")
//     .required("Phone number is required"),
//   password: yup
//     .string()
//     .min(4, "Minimum 4 characters are required")
//     .max(15, "Enter up to 15 characters")
//     .required("Password is required"),
//   confirmPassword: yup
//     .string()
//     .oneOf([yup.ref("password"), null], "Passwords must match")
//     .required("Confirm Password is required"),
// });


// export default function page() {
//   const { register, handleSubmit, formState: { errors, isValid, isDirty } } = useForm({
//     resolver: yupResolver(schema),
//     mode: "onChange",

//   })
//   console.log(errors)

//   return (
//     <>
//       {/* <div className='form-container'>
//         <div className='form-section'>
//           <form onSubmit={handleSubmit((data)=>{
//             console.log(data)
//           })}>
//             <input {...register('name', { required: "Name is required" })} type='text' placeholder='Enter the Name' />
//             {errors?.name && <p>{errors.name.message}</p>}
//             <input {...register('email', { required: "Email is required" })} type='email' placeholder='Enter the Email' />
//             {errors?.email && <p>{errors.email.message}</p>}
//             <input
//               {...register('phoneno', {
//                 required: "Phone no is required", minLength: {
//                   value: 4,
//                   message: "10 numbers should be expected"
//                 }
//               })}
//               type='text'
//               placeholder='Enter the Phone no'

//             />
//             {errors?.phoneno && <p>{errors.phoneno.message}</p>}
//             <button type="submit">Submit</button>
//           </form>
//         </div>
//       </div> */}
//       <div className="form-container">
//         <div className="form-section">
//           <form
//             onSubmit={handleSubmit((data) => {
//               console.log(data);
//             })}
//           >

//             <input
//               {...register("name")}
//               placeholder="Enter the Name"
//             />
//             <p>{errors?.name?.message}</p>


//             <input
//               {...register("email")}
//               placeholder="Enter the Email"
//             />
//             <p>{errors?.email?.message}</p>

//             <input
//               {...register("phoneno")}
//               placeholder="Enter the Phone number"
//             />
//             <p>{errors?.phoneno?.message}</p>


//             <input
//               type="password"
//               {...register("password")}
//               placeholder="Enter the Password"
//             />
//             <p>{errors?.password?.message}</p>


//             <input
//               type="password"
//               {...register("confirmPassword")}
//               placeholder="Confirm the Password"
//             />
//             <p>{errors?.confirmPassword?.message}</p>


//             <button type="submit" disabled={isDirty && !isValid}>Submit</button>
//           </form>
//         </div>
//       </div>


//     </>
//   )
// }


// page.js
"use client";

import React from "react";
import FormComponent from "../common-form/page"; 
import { RegisterForm } from "../configureForm/page";  

const Page = () => {
  const handleFormSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="form-container">
      <h2>Registration Form</h2>
      <FormComponent 
        formControls={RegisterForm}
        onSubmit={handleFormSubmit} 
        buttonText="Register" 
      />
    </div>
  );
};

export default Page;
