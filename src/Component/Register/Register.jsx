import GoogleAuth from '../GoogleAuth/GoogleAuth';
import LogInMenu from '../LogInMenu/LogInMenu';
import style from './Register.module.css';
import { Formik } from "formik";
import { useState } from "react";

const Register = () => {
    const [successMessage, setSuccessMessage] = useState("");
  return (
    <>
      <LogInMenu />
      <div className={style.main}>
        <h2>Register Now!</h2>
        <p>Please fill in the blanks to start enjoying your favorite movies!</p>

        

        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if(!values.name) {
                errors.name = "Name is required"
            }
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            
            if(values.password.length < 6){
                errors.password = "Password must be at least 6 characters"
              }
            return errors;
          }}
          onSubmit={async (values) => {
            //const newUser = {...values};
           
            try {
                const response = await fetch("http://localhost:3001/Nonflix/login", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(values),
                });
        
                if (!response.ok) {
                  throw new Error("Error al enviar los datos");
                }
                const data = await response.status;
                if(data === 200) {
                    window.location.href = "/Home"
                }
              } catch (error) {
                window.alert(error);
              }
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit} name="RegisterForm">
              <label >Name</label>
              <input  type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                placeholder="Name"></input>
              <label>{errors.name && touched.name && errors.name}</label>
              <label>E-mail</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="E-mail"
              ></input>
              <label>{errors.email && touched.email && errors.email}</label>
              <label htmlFor="">Password</label>
              <label htmlFor=""></label>
              <input
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Password"
              ></input>
              <label>
                {errors.password && touched.password && errors.password}
              </label>
              <button type="submit">Register</button>
            </form>
          )}
        </Formik>

        <GoogleAuth/>

        </div>

    </>
  );
};

export default Register;
