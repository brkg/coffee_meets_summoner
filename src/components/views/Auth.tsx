import React, {MouseEventHandler, useState} from "react";
import Login from "./Login";
import SignUp from "./SignUp";

export default function Auth(props : {setCreds : Function, checkCreds : Function}){

    const [previousUser, setPreviousUser] = useState(true); 
    const [summonerName, setSummonerName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const {setCreds , checkCreds} = props; 

    function handleEmailChange(e : any){
        const newEmail = e.target.value;
        setEmail(newEmail)
    }

    function handlePasswordChange(e : any){
        const newPassword = e.target.value;
        setPassword(newPassword);
    }

    function handleSummonerChange(e : any){
        const newSummonerName = e.target.value;
        setSummonerName(newSummonerName);
    }
    function setLogin(){
        setPreviousUser(true);
    }

    function setSignUp(){
        setPreviousUser(false);
    }

    const signup : JSX.Element =  
    <SignUp 
        setLogin={setLogin} 
        summonerName={summonerName} 
        email={email} 
        password={password} 
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        handleSummonerChange={handleSummonerChange}
        setCreds={setCreds}
    />;
    const login : JSX.Element = 
    <Login 
    setSignUp={setSignUp} 
    email={email} 
    password={password} 
    handleEmailChange={handleEmailChange}
    handlePasswordChange={handlePasswordChange}
    checkCreds={checkCreds}/>;
    
   
    let pageToRender : JSX.Element = previousUser === true ? login : signup;
    return <div className="auth-container">
       {pageToRender}
    </div>
}