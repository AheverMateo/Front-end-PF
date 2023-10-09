import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SideBar from "../SideBar/SideBar";
import style from "./Profile.module.css";
import { updateUser } from "../../Redux/actions/actions";
import Swal from "sweetalert2";

const Profile = () => {
  const userData = useSelector((state) => state.user);
  const userFirstName = userData.name.split(" ");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ name: "", password: "" });

  const dispatch = useDispatch();

  // Función para manejar la actualización del nombre
  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
    if (!userName.length) {
      setErrors({ ...errors, name: "Your name cannot be empty" });
    }
  };

  
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userUpdate = {
      id: userData.id,
      name: userName,
      password: password,
      token: userData.token,
    };
 
   
      dispatch(updateUser(userUpdate));
   
  };
  return (
    <div className={style.main}>
      <SideBar />
      <div className={style.profile}>
        <h2>
          Hi <label>{userFirstName[0]}</label>! Welcome to your profile!
        </h2>
        <form onSubmit={handleSubmit}>
          <img src="https://s3.amazonaws.com/37assets/svn/765-default-avatar.png" />
          <div>
            <label>Name: </label>
            <input
              name="name"
              placeholder={userData.name}
              value={userName}
              onChange={handleUserNameChange}
            />

            <label>E-mail: </label>
            <h3>{userData.email}</h3>
            <label>Change password: </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
            ></input>
            <button type="submit">Update data</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
