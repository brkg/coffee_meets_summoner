import React, {useState, useEffect}from 'react';
import Nav from "./views/Nav";
import Feed from "./views/Feed";
import UserProfile from "./views/UserProfile";
import HighlightUser from './views/HighlightUser';
import Auth from './views/Auth';
import axios from 'axios';

export default function Dashboard(){
    const [user, setUser] = useState({});
    const [teamates, setTeamates] = useState({});
    const [highlightedUser, setHighlightedUser] = useState({});
    const [loggedIn, setLogin] = useState(false);

    useEffect(()=> {
        axios.post('/api/getSummoner', {
          summonerName: "kazaroon"
        })
        .then(data => {
          const {userInfo, playerList} = data.data; 
          addUser(userInfo);
          addTeamates(playerList); 
        })
        .catch(err => console.log(err));
      
    }, []);

    const userTestData = {
        "tier": "DIAMOND",
        "rank": "IV",
        "points": 93,
        "wins": 146,
        "losses": 116,
        "summonerName": "Spanísh Teacher",
        "avatar" : "12"
    }; 
    const potentialTeamatesTestData=  [{
        "tier": "DIAMOND",
        "rank": "IV",
        "points": 93,
        "wins": 146,
        "summonerName": "Spanísh Teacher",
        "avatar" : "12"
        }, 
        {
            "tier": "DIAMOND",
        "rank": "IV",
        "points": 93,
        "wins": 146,
        "losses": 116,
        "summonerName": "Spanísh Teacher",
        "avatar" : "12"

        },
        {
        "tier": "DIAMOND",
        "rank": "IV",
        "points": 93,
        "wins": 146,
        "losses": 116,
        "summonerName": "Spanísh Teacher",
        "avatar" : "12"

        }]
    ;
    
    function checkCreds(email : string, password : string){
        console.log( email, password);
    }

    function setCreds( summonerName : string, email : string, password : string){
        console.log(summonerName, email, password);
    }
    function addUser(userData : Object){
        setUser(userData);
    }

    function addTeamates(teamateData : Object){
        setTeamates(teamateData);
    }

    function highlightUser(teamateName : string){
        fetch(`/api/getUserData/${teamateName}`)
        .then(res => res.json())
        .then(data => setHighlightedUser(data))
        .catch(err => console.log(err));
    }

    let displayHighlighted : JSX.Element = Object.keys(highlightUser).length > 0 ? 
        <HighlightUser user={highlightedUser}/> : 
        <div><p>User will be here</p></div>;

    const displayApp : JSX.Element = 
        <div className="app">
            <Nav/>
            <div className="main-container">
                <div className="main-content">
                    <UserProfile user={userTestData}/>
                    <Feed teamates={potentialTeamatesTestData} displayTeamateData={highlightUser}/> 
                </div>
                <div className="highlighted-user">
                {displayHighlighted}
                </div>
            </div>
        </div>;


    let componentToRender = loggedIn === true ? displayApp : <Auth  checkCreds={checkCreds} setCreds={setCreds}/>;

    return ( 
    <div>
        {componentToRender}
    </div>
    );

};