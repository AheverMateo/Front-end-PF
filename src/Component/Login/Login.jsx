import React, { useEffect, useState } from "react";
import Style from "./Login.module.css";
import Validation from "../Validation/Validation";
import LogInMenu from "../LogInMenu/LogInMenu";
import { Link } from "react-router-dom/dist";
import { Formik } from "formik";
//import GoogleLogin from 'react-google-login'
//import { gapi } from 'gapi-script' // Help to connect API Google

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

  // login Google
  const clientID =
    "285030629309-sqqpv5i7tj1vubo8hmb1ld63ki9ec08h.apps.googleusercontent.com";

  const [userGoogle, setUserGoogle] = useState({});

  // Initializar services Google
  //  useEffect(()=>{
  //     const start = ()=>{
  //         gapi.auth2.init({
  //             clientId: clientID,
  //         })
  //     }
  //     gapi.load("client:auth2", start)
  //  }, [])

  const onSuccess = (response) => {
    setUserGoogle(response.profileObj);
    console.log(response);
  };

  const onFailure = () => {
    console.log("Something went wrong");
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
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
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

              <div className={Style.campos}>
                <input
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  placeholder="Password"
                />
              </div>

              <div>
                <button type="submit" disabled={isSubmitting}>
                  Log in
                </button>
              </div>
            </form>
          )}
        </Formik>
        <p>
          New to NonFlix? <Link to="/Register">Register Now!</Link>
        </p>
      </div>
      {/* <div>
                <GoogleLogin
                    clientId={clientID}
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={"single_host_policy"}
                />
            </div> */}
    </div>
  );
};

export default Login;
