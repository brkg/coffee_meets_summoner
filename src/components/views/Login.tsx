import React, { ChangeEventHandler, MouseEventHandler } from "react";
export default function Login(props: {
        setSignUp : MouseEventHandler, 
        email : string, 
        password : string, 
        checkCreds : Function,
        handleEmailChange : ChangeEventHandler,
        handlePasswordChange : ChangeEventHandler,
        loginFailed : Boolean

    }){
    
        const {setSignUp, email, password, handleEmailChange, handlePasswordChange, checkCreds, loginFailed} = props;

        let displayLoginFailed : JSX.Element = <p></p>;
         if(loginFailed){
            displayLoginFailed = <p className="login-failed">Account not found please try again</p>
        }
return (
    <div className="auth-page">
         <div className='auth-form'>
            <h1>Coffee Meets Summoner</h1>
            <h4>Login</h4>
            <div>
            <label>
                Email:
            <input className ="auth-input" type="text" value={email} onChange={handleEmailChange} />
            </label>
            <label>
                Password:
            <input className ="auth-input" type="password" value={password} onChange={handlePasswordChange} />
            </label>
            <button className='auth-button' onClick={()=>checkCreds(email, password)}>Login</button> 
              <p>{displayLoginFailed}</p>
              <p onClick={()=>setSignUp()}>Don't have an Account?</p>
            </div>
        </div>
    </div>)
}