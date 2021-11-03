import React, { ChangeEventHandler, MouseEventHandler } from "react";

export default function Login(props: {
        setSignUp : Function, 
        email : string, 
        password : string, 
        checkCreds : Function,
        handleEmailChange : ChangeEventHandler,
        handlePasswordChange : ChangeEventHandler,

    }){
    
        const {setSignUp, email, password, handleEmailChange, handlePasswordChange, checkCreds} = props;

return (
    <div>
         <div className="auth-page">
            <h1>Login</h1>
            <form onSubmit={()=> checkCreds( email, password)}>
            <label>
                Email:
            <input className ="auth-input" type="text" value={email} onChange={handleEmailChange} />
            </label>
            <label>
                Password:
            <input className ="auth-input" type="password" value={password} onChange={handlePasswordChange} />
            </label>
             <p onClick={setSignUp}>Don't have an Account?</p>
            </form>
        </div>
    </div>)
}