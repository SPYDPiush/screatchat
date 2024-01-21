import React from "react";
import "../Component/Demo.css";
import {createUserWithEmailAndPassword, updatePassword, updateProfile } from "firebase/auth";
import { auth } from "../Firebase";

import logo from "../assets/Images/Logo.png";

function Demo() {

function handleonsubmit(e){

  e.preventDefault()

  const Firstname= e.target[0].value
  const lastname = e.target[1].value
  const email = e.target[2].value
  const password= e.target[3].value

  const res = createUserWithEmailAndPassword(auth, email, password);
  crossOriginIsolated.log(updatePassword)
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
            <div className="label">
              <div>
                <label htmlFor="First">First Name:</label>
              </div>
              <div>
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
              </div><div>
              <input type="email" id="Email" />
              </div>
            </div>
            <div className="forminput">
              <div>
              <label htmlFor="Password">Password:</label>
              </div><div>
              <input type="password" id="Password" />
              </div>
            </div>
            <div className="forminput">
              <div>
              <label htmlFor="confirm">Confirm Password:</label>
              </div><div>
              <input type="password" id="confirm" />
              </div>
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Demo;




