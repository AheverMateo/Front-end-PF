import React from 'react'
import Style from "./Login.module.css"
import { useState } from 'react'
import Validation from '../Validation/Validation'


const Login = () => {

    const [login, setLogin] = useState({
        name: "",
        password: "",

    })

    const [error, setError] = useState({
        name: "",
        password: "",
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setLogin({
          ...login,
          [name]: value,
        });
        setError(Validation({
            ...error,
            [name]: value,
        }))
      };

  return (
    <div className={Style.conteiner}>
        <form>
            <div className={Style.campos}>
             <input  type="text" name="name" value={login.name} onChange={handleChange} placeholder="Name"/>
             {error.name && <p>{error.name}</p>}  
            </div>
            
            <div className={Style.campos}>
             <input  type="password" name="password" value={login.password} onChange={handleChange} placeholder="Password"/>
             {error.password && <p>{error.password}</p>}
            </div>
            
            <div>
                <button>log in</button>
            </div>
        </form>
    </div>
  )
}

export default Login
