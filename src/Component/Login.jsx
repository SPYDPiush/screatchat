import React from "react";
import "./Login.css";
import img from "../assets/Images/Logo.png";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";

function Login() {
  function handleonsubmit(e) {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.log(err);
    }
  }



  return (
    <div className="flex items-center justify-center h-[100vh] login_container">
      <div className="login_outer">
        <div className="flex justify-center p-[7px]">
          <img
            className="w-[8rem] h-[8rem] rounded-full"
            src={img}
            alt="logo"
          />
        </div>
        <div className='text-[1.2rem] font-["Segoe UI", Tahoma, Geneva, Verdana, sans-serif]'>
          <form className="mt-[1.5rem]" onSubmit={handleonsubmit}>
            <div className="label">
              <label htmlFor="Email">Email Address.</label>
            </div>
            <div className="input">
              <input type="email" />
            </div>
            <div className="label">
              <label htmlFor="password"> Password.</label>
            </div>
            <div className="input">
              <input type="password" />
            </div>
            <button type="submit" className="login_btn ml-1 mt-1">
              Login
            </button>
          </form>
        </div>
        <div className=" flex justify-between mt-5">
          <div className="hover:cursor-pointer hover:underline hover:text-rose-500 text-[1.1rem]">
            Forget Password
          </div>
          <div className="hover:cursor-pointer hover:underline hover:color-[#aa82b3] text-[1.1rem]">
            Register
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
