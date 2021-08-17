import React, { useState } from 'react'
import './LoginScreen.css';
import Logo from '../Images/netflixlogo.png'
import SignUpScreen from './SignUpScreen';

const LoginScreen = () => {
    const [signIn , setSignIn] = useState(false);

    return (
        <div className='loginScreen'>
            <div className="loginScreen__background">
                <img className="loginScreen__logo" src={Logo} alt="" />
                <button onClick={() => setSignIn(true)} className="loginScreen__button">Sign In</button>
                <div className="loginScreen__gradient"></div>
            </div>
            <div className="loginScreen__body">
                {signIn ? (
                    <SignUpScreen />
                ) : (
                    <>
                    <h1>Unlimited movies, TV shows, and more.</h1>
                    <h2>Watch anywhere. Cancel at any time</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                    <div className="loginScreen__input">
                        <form> 
                            <input type="email" placeholder="Email Address" />
                            <button onClick={() => setSignIn(true)} className='loginScreen__getStarted'>Get Started</button>
                        </form>
                    </div>
                </>
                )}
                
            </div>
        </div>
    )
}

export default LoginScreen
