import { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';

const LoginPopup = ({sshowLogin}) => {
    const[cState,scState]=useState("Login")
  return (
    <div className='login-popup'>
      <form  className="login-popup-container">
        <div className="login-popup-title">
            <h2>{cState}</h2>
            <img onClick={()=>sshowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
            {cState==="Login"?<></>:<input type="text" placeholder='Your name' required />}
            <input type="email" placeholder='Your email' required/>
            <input type="password" placeholder='Password' required/>
        </div>
        <button>{cState==="Sign Up"?"Create account":"Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>
        {cState==="Login"
        ?<p>Create a new account? <span onClick={()=>scState("Sign Up")}>Click here</span></p>
        :<p>Already have an account <span onClick={()=>scState("Login")}>Login here</span></p>
        }
      </form>
    </div>
  )
}

export default LoginPopup
