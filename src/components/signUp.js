import React from 'react'
import './signUp.css'
import crypto from '../assets/crypto.png'

const Signup = () => {
  return (
    <div className="signUp">
    <div className="container">
        {/*left*/}
        <div className="left">
            <img src={crypto} alt=''/>
        </div>
        {/*right*/}

        <div className="right">
          <h2>earn passive income with crypto.</h2>
         
         <p>Earn up to 12% annual rewards on 30+ digital assets i the app to automatically earn rewards at the end of each month</p>
        <div className="input-container">
          <input type="email" placeholder="Enter your email"/> 
          <button className="btn">Learn more</button>
        </div>
        </div>
    </div>
    
    </div>
  )
}

export default Signup