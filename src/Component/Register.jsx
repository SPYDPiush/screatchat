import React, { useState } from "react";
import "../Component/Register.css";

import { IoMdEye, IoMdEyeOff } from "react-icons/io";

import {
  createUserWithEmailAndPassword,
  updatePassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Firebase";

import logo from "../assets/Images/Logo.png";

function Register() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleTogglePassword = () => {
    setPasswordVisible((prev) => !prev);
  };

  function handleonsubmit(e) {
    e.preventDefault();

    const Firstname = e.target[0].value;
    const lastname = e.target[1].value;
    const email = e.target[2].value;
    const password = e.target[3].value;

    if (!Firstname || !lastname || !email || !password) {
      alert("All fields are required");
      return;
    }

    const res = createUserWithEmailAndPassword(auth, email, password);
    console.log(res.user);
  }

  return (
    <div className="container_reg">
      <div className="reg_outer">
        <div className="reg_logo">
          <img src={logo} alt="affworld_logo" />
        </div>
        <div className="reg_form">
          <form className="ref_forms" onSubmit={handleonsubmit}>
            <div className="label flex">
              <div>
                <label htmlFor="First">First Name:</label>
              </div>
              <div className="last">
                <label htmlFor="last">Last Name:</label>
              </div>
            </div>
            <div className="label_input">
              <input type="text" id="First" />
              <input type="text" id="last" />
            </div>
            <div className="forminput">
              <div className="">
                <label htmlFor="Email">Email address:</label>
              </div>
              <div>
                <input type="email" id="Email" />
              </div>
            </div>
            <div className="forminput">
              <div>
                <label htmlFor="Password">Password:</label>
              </div>
              <div>
                <input
                  type={passwordVisible ? "text" : "password"}
                  id="Password"
                />
                <span className="eye_icon" onClick={handleTogglePassword}>
                {passwordVisible ? <IoMdEyeOff /> : <IoMdEye />}
                </span>
              </div>
            </div>
            <div className="forminput">
              <div>
                <label htmlFor="confirm">Confirm Password:</label>
              </div>


              <div>
                <input type={passwordVisible ? "text" : "password"} id="confirm" />
                <span className="eye_icon" onClick={handleTogglePassword}>
                {passwordVisible ? <IoMdEyeOff /> : <IoMdEye />}
                </span>
              </div>
            </div>
            <div>
              <button type="submit" className="btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
