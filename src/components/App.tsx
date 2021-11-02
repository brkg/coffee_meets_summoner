import React, {useState, useEffect}from 'react';
import Nav from "./views/Nav";
import Feed from "./views/Feed";
import UserProfile from "./views/UserProfile";
import HighlightUser from './views/HighlightUser';
export default function Dashboard(){
    const [user, setUser] = useState({});
    const [teamates, setTeamates] = useState({});
    const [highlightedUser, setHighlightedUser] = useState({});
    
    useEffect(() => {
        addUser(userTestData);
        addTeamates(potentialTeamatesTestData);
    })
    // useEffect(()=> {
    //     fetch('api/getSummoner')
    //     .then(res => res.json())
    //     .then(data => {
    //         const {user, users} = data; 
    //         addUser(user);
    //         addTeamates(users); 
    //     })
    //     .catch(err => console.log(err));
    // });

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

    return (<div className="app">
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
        

    </div>
);

};