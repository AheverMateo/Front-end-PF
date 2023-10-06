import React, { useEffect, useState } from "react";
import GoogleLogin from "react-google-login"; // npm i react-google-login --force para que funcione
import { gapi } from "gapi-script"; // Help to connect API Google
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

export default function GoogleAuth() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isRegistered, setIsRegistered] = useState(false);

  // login Google
  const clientID =
    "285030629309-sqqpv5i7tj1vubo8hmb1ld63ki9ec08h.apps.googleusercontent.com";

  const [userGoogle, setUserGoogle] = useState({
    email: "",
    password: "",
    name: "",
    provider: "Google",
  });

  // Initializar services Google
  useEffect(() => {
    const start = () => {
      gapi.auth2.init({
        clientId: clientID,
      });
    };
    gapi.load("client:auth2", start);
  }, []);

  const onSuccess = (response) => {
    setUserGoogle({
      ...userGoogle,
      email: response.profileObj.email,
      password: response.profileObj.googleId,
      name: response.profileObj.name,
    });
  };

  useEffect(() => {
    if (userGoogle.email) {
      if (location.pathname === "/Login") {
        axios
          .get(`http://localhost:3001/Nonflix/login?email=${userGoogle.email}`)
          .then((response) => {
            setIsRegistered(true);
          })
          .catch((error) => {
            alert("Unregistered user");
          });
      }

      if (location.pathname === "/Register") {
        axios
          .post("http://localhost:3001/Nonflix/login", userGoogle)
          .then((response) => {
            alert("Successfully registered user");
            setIsRegistered(true);
          })
          .catch((error) => {
            alert("Error: Existing user");
          });
      }
    }
  }, [userGoogle]);

  useEffect(() => {
    // Access to Home
    if (isRegistered) {
      navigate("/Home");
    }
  }, [isRegistered, navigate]);

  const onFailure = () => {
    console.log("Something went wrong");
  };

  return (
    <div>
      <br />
      <hr style={{ marginBottom: "20px" }} />
      {location.pathname === "/Register" && <p>Or</p>}
      {location.pathname === "/Login" && (
        <p style={{ textAlign: "center" }}>Or</p>
      )}

      {location.pathname === "/Register" && <br />}

      <div style={{borderRadius: "0.5rem"} } >
        <GoogleLogin
          clientId={clientID}
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={"single_host_policy"}
          buttonText={
            location.pathname === "/Login"
              ? "Login with Google"
              : "Sign in with Google"
          }
        />
      </div>
    </div>
  );
}
