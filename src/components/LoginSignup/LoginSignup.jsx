import React from 'react';
import './LoginSignup.css';

import user_icon from '../assets/person.png';
import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png'

const LoginSignup = () => {
  return (
    <div className="big-container">
        <div className="poster">
        <h2 className="font-kameron">Simplify Management <br></br> with Our Dashboard</h2>
        
        <div className="container">
        <div className="header">
            <div className="text">Sign Up</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            <div className="input">
                <img src={user_icon} alt="" />
                <input type="text" placeholder='Enter your name' />
            </div>
            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" placeholder='Enter your email'/>
            </div>
            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" placeholder='Enter your password'/>
            </div>
        </div>
        <div className="forgot-password ">Lost Password? <span>Click Here</span></div>
      <div className="submit-container">
        <div className="submit">Sign up</div>
        <div className="submit">Login</div>
      </div>
     
    </div>
    
    </div>
   
    </div>
   
  )
}

export default LoginSignup
