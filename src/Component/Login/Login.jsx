import axios from "axios";
import React, { useState } from 'react'
import Style from "./Login.module.css"
import Validation from '../Validation/Validation'
import LogInMenu from '../LogInMenu/LogInMenu'
import { Link } from 'react-router-dom/dist'
import { Formik } from 'formik';
import GoogleAuth from '../GoogleAuth/GoogleAuth'


const Login = () => {
  const [login, setLogin] = useState({
    name: "",
    password: "",
  });

  const [error, setError] = useState({
    name: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLogin({
      ...login,
      [name]: value,
    });
    setError(
      Validation({
        ...error,
        [name]: value,
      })
    );
  };



  return (
    <div className={Style.container}>
      <LogInMenu />
      <div className={Style.form}>
        <h2>Log In</h2>
        <p>Use your credentials to start enjoying!</p>
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            
            return errors;
          }}
          onSubmit={async (values) => {
            try {
              const response = await axios.get(`http://localhost:3001/Nonflix/login?email=${values.email}&password=${values.password}`) 
              //console.log(endpoint);
              //console.log(response);
              if(response.status === 200) {
                window.location.href = "/Home"
              }
              
          } catch (error) {
              console.log(error);
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
            <form onSubmit={handleSubmit}>
              <div className={Style.campos}>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="E-mail"
                />
                <label>{errors.email && touched.email && errors.email}</label>
              </div>

        </form>
         )}
      

         </Formik>
      <GoogleAuth/> 
        <p>New to NonFlix? <Link to="/Register">Register Now!</Link></p>
        </div>


      </div>
    
  );
};

export default Login;
