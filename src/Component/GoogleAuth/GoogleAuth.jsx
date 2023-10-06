import React, { useEffect, useState } from 'react'
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode'
import axios from 'axios'
import { useNavigate, useLocation } from 'react-router-dom';


export default function GoogleAuth() {

    const navigate = useNavigate();
    const location = useLocation();

    const [isRegistered, setIsRegistered] = useState(false);


    const [userGoogle, setUserGoogle] = useState({
      email: "",
      password: "",
      name: "",
      provider: "Google"
    })



    const onSuccess = (credentialResponse)=>{
      const credentialResponseDecoded = jwt_decode(credentialResponse.credential)

        setUserGoogle({
          ...userGoogle, email: credentialResponseDecoded.email, password: credentialResponseDecoded.jti, name: credentialResponseDecoded.name
        });
    }

    useEffect(() => {
        if (userGoogle.email) {
            if(location.pathname === '/Login'){
                axios.get(`http://localhost:3001/Nonflix/login?email=${userGoogle.email}&password=${userGoogle.password}`)
                    .then(response=>{
                        setIsRegistered(true);
                    })
                    .catch(error=>{
                        alert('Unregistered user')
                    })
            }

        if(location.pathname === '/Register'){
            axios.post('http://localhost:3001/Nonflix/login', userGoogle)
            .then(response => {
                alert('Successfully registered user');
                setIsRegistered(true);
    
            })
            .catch(error => {
              alert('Error: Existing user');
            });
        }
        
    }
  }, [userGoogle]);  
  
  useEffect(() => {
    // Access to Home
    if (isRegistered) {
      navigate('/Home');
    }
  }, [isRegistered, navigate]);
  
 

  return (
    <div>
         <br />
        <hr style={{ marginBottom: '20px' }} />
        {location.pathname === '/Register' &&  <p>Or</p>}
        {location.pathname === '/Login' &&  <p style={{ textAlign: 'center' }}>Or</p>}
        
        {location.pathname === '/Register' &&  <br />}
        

        <GoogleLogin
          useOneTap
          onSuccess={onSuccess}
          onError={() => {
            console.log('Login Failed');
          }}
        />

    </div>
  )
}
