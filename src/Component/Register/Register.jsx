import { useNavigate } from 'react-router';
import { registerUser } from '../../Redux/actions/actions';
import GoogleAuth from '../GoogleAuth/GoogleAuth';
import LogInMenu from '../LogInMenu/LogInMenu';
import style from './Register.module.css';
import { Formik } from "formik";
import { useState} from "react";
import { useDispatch } from 'react-redux';

const Register = () => {
    const [successMessage, setSuccessMessage] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleRegister = (values) => {
      dispatch(registerUser(values)).then((response) => {
        if (response !== "" && response !== undefined) {
          navigate("/Home");
        }
     });
    };



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
          onSubmit={handleRegister}
           
            
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


                <button
                type="submit"
               
              >
                Register
              </button>

              
            </form>
          )}
        </Formik>

        <GoogleAuth/>

        </div>

    </>
  );
};

export default Register;
