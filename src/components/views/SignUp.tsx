import React, { ChangeEventHandler, MouseEventHandler } from "react";

export default function SignUp(props : {
        setLogin : MouseEventHandler, 
        summonerName : string, 
        email : string, 
        password : string
        handleEmailChange : ChangeEventHandler,
        handlePasswordChange : ChangeEventHandler,
        handleSummonerChange : ChangeEventHandler,
        setCreds : Function

    }){
    
    const {setLogin, summonerName, email, password, handleEmailChange, handlePasswordChange, handleSummonerChange, setCreds} = props;
    return (
    <div>
        <div className="auth-page">
            
            <h1>Sign Up</h1>
            <form onSubmit={()=> setCreds(summonerName, email, password)}>
            <div>
            <label>
                Summoner Name:
            <input className ="auth-input" type="text" value={summonerName} onChange={handleSummonerChange} />
            </label>
            </div>
             
            <label>
                Email:
            <input className ="auth-input" type="text" value={email} onChange={handleEmailChange} />
            </label>
            <label>
                Password:
            <input className ="auth-input" type="password" value={password} onChange={handlePasswordChange} />
            </label >
             <p onClick={setLogin}>Already have an Account?</p>
            </form>
        </div>
         
    </div>);
}