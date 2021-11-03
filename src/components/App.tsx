import React, {useState, useEffect}from 'react';
import Nav from "./views/Nav";
import Feed from "./views/Feed";
import UserProfile from "./views/UserProfile";
import HighlightUser from './views/HighlightUser';
import Auth from './views/Auth';
import axios from 'axios';
import e from 'express';


export default function Dashboard(){
    const [user, setUser] = useState({});
    const [summonerName, setSummonerName] = useState('');
    const [loginFailed, setLoginFailed] = useState(false);
    const [teamates, setTeamates] = useState([]);
    const [highlightedUser, setHighlightedUser] = useState('');
    const [highlightedUserData, setHighlightedUserData] = useState([]);
    const [loggedIn, setLogin] = useState(false);

    useEffect(()=> {
        axios.post('/api/getSummoner', {
          summonerName: "kazaroon"
        })
        .then(data => {
          const {userInfo, playerList} = data.data; 
          userInfo.summonerName =  summonerName;
          addUser(userInfo);
          addTeamates(playerList); 
        })
        .catch(err => console.log(err));
    }, []);
    
    function checkCreds(email : string, password : string){
    
        axios.post('/api/login', {
            username : email,
            password : password
        })
        .then(data => {
            if (data.data.user){
                const {username } = data.data.user;
                setLoginFailed(false);
                setSummonerName(username);
            } else {
                setLoginFailed(true);
            }
             
        })
        .catch(err =>  setLoginFailed(true));
    }

    function setCreds( summonerName : string, email : string, password : string){
        
        axios.post("/api/signup", {
            summonerName : summonerName,
            username : email, 
            password : password
        }).then(() =>
        {
            setLogin(true);
            setSummonerName(summonerName);
        })
          .catch(err => console.log(err));
         
        
    }
    function addUser(userData : Object){
        setUser(userData);
    }

    function addTeamates(teamateData : Object){
        setTeamates(teamateData);
    }

    function highlightUserFunction(teamateName : string){
        let resData : any = []
        axios.post('/api/getMatch', {
            summonerName: teamateName
          })
          .then(data => {
            resData = data.data;
            console.log(data.data);
            setHighlightedUser(teamateName);
            setHighlightedUserData(resData);
              
          })
          .catch(err => {
            setHighlightedUser("User not found");
            console.log(err);
          });
          
    }

    let displayHighlighted : JSX.Element = highlightedUser !== ''  ? 
        <HighlightUser user={highlightedUser} userData={highlightedUserData}/> : 
        <div><p>Click on Potential Teamates</p></div>;
    
    
    const displayApp : JSX.Element = 
        <div className="app">
            <Nav/>
            <div className="main-container">
                <div className="main-content">
                    <UserProfile user={user}/>
                    <Feed teamates={teamates} highlightUserFunction={highlightUserFunction} /> 
                </div>
                <div className="highlighted-user">
                {displayHighlighted}
                </div>
            </div>
        </div>;


    let componentToRender = loggedIn === true ? displayApp : <Auth  checkCreds={checkCreds} setCreds={setCreds} loginFailed={loginFailed}/>;

    return ( 
    <div>
        {componentToRender}
    </div>
    );

};