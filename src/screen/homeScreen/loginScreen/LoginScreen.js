import React from "react";
import './loginScreen.scss'
import {useDispatch} from 'react-redux'
import { login } from "../../../redux/actions/auth.action";

const LoginScreen = () => {
   const dispatch = useDispatch()

  const handleLogin = ()=>{
    dispatch(login())
  }
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c545.png"
          alt=""
        />
        <button  onClick={handleLogin}>
            Login with google account
        </button>
        <p>This Project is made using YOUTUBE DATA API</p>
      </div>
    </div>
  );
};

export default LoginScreen;
