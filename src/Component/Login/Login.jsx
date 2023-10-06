import React, { useState } from "react";
import Style from "./Login.module.css";
import Validation from "../Validation/Validation";
import LogInMenu from "../LogInMenu/LogInMenu";
import { Link } from "react-router-dom/dist";
import { Formik } from "formik";
import GoogleAuth from "../GoogleAuth/GoogleAuth";
import { login as loginAction } from "../../Redux/actions/actions";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
  });
  const loginUser = (values) => {
    dispatch(loginAction(values));
  };

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
          onSubmit={loginUser}
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
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Password"
                />
                <label>
                  {errors.password && touched.password && errors.password}
                </label>
              </div>
              <button type="submit">Log In</button>
            </form>
          )}
        </Formik>
        <GoogleAuth />
        <p>
          New to NonFlix? <Link to="/Register">Register Now!</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
