import React, { ChangeEventHandler, MouseEventHandler } from "react";
export default function Login(props: {
        setSignUp : MouseEventHandler, 
        email : string, 
        password : string, 
        checkCreds : Function,
        handleEmailChange : ChangeEventHandler,
        handlePasswordChange : ChangeEventHandler,

    }){
    
        const {setSignUp, email, password, handleEmailChange, handlePasswordChange, checkCreds} = props;

return (
    <div className="auth-page">
         <div className='auth-form'>
            <h1>Coffee Meets Summoner</h1>
            <h4>Login</h4>
            <form onSubmit={()=> checkCreds( email, password)}>
            <label>
                Email:
            <input className ="auth-input" type="text" value={email} onChange={handleEmailChange} />
            </label>
            <label>
                Password:
            <input className ="auth-input" type="password" value={password} onChange={handlePasswordChange} />
            </label>
             <button className='auth-button' onClick={()=>checkCreds()}>Login</button>
             <p onClick={()=>setSignUp()}>Don't have an Account?</p>
            </form>
        </div>
    </div>)
}