import React, { useEffect, useState } from 'react'
import Style from "./Login.module.css"
import Validation from '../Validation/Validation'
//import GoogleLogin from 'react-google-login'
//import { gapi } from 'gapi-script' // Help to connect API Google


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


      // login Google
     const clientID = "285030629309-sqqpv5i7tj1vubo8hmb1ld63ki9ec08h.apps.googleusercontent.com";

      const [userGoogle, setUserGoogle] = useState({})

    // Initializar services Google
     useEffect(()=>{
        const start = ()=>{
            gapi.auth2.init({
                clientId: clientID,
            })
        }
        gapi.load("client:auth2", start)
     }, [])


     const onSuccess = (response)=>{
        setUserGoogle(response.profileObj);
        console.log(response)
     }
     
     const onFailure = ()=>{
        console.log("Something went wrong")
     }

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
            <div>
                <GoogleLogin
                    clientId={clientID}
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={"single_host_policy"}
                />
            </div>

    </div>
  )
}

export default Login
