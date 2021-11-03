import React from "react";

interface iGames{
    championName : string,
    lane : string, 
    kills : number,
    deaths : number,
    assists : number,
    items : Array<number>,
    masteries : Array<Object>,
    win : Boolean,

}

export default function HighlightUser(props : {user : string, userData : Array<iGames>}){
    const { user, userData} = props;

    console.log(userData);
    const gamesToDisplay : Array<JSX.Element> = [];

    userData.forEach((game : iGames) => {
        const {championName, lane, kills, deaths, assists, items, masteries, win} = game;
        
        const itemsToDisplay : Array<JSX.Element> = [];


        items.forEach((item : any) => {
           itemsToDisplay.push(
            <img 
                className="highlighted-user-profile-imgs" 
                src={`http://ddragon.leagueoflegends.com/cdn/11.22.1/img/item/${item.id}.png`} 
                alt={`iteam #${item.id} : ${item.name}`} 
                width="50px" 
            />
           )  
        });

        const backgroundColor = win === false ? "highlighted-user-loss" : "highlighted-user-win"

        gamesToDisplay.push(
            <div className={`highlighted-game ${backgroundColor}`}  >
                <div>
                    <h5>{championName}</h5>
                    <p>{lane}</p>
                </div>
                <div className="highlighted-row-element">
                    {itemsToDisplay}
                </div>
                <div className="highlighted-row-element">
                    <p>kda</p>
                    <p>{`${kills}|${deaths}|${assists}`}</p>
                </div>
            </div>
        )

    })
     

    return(
        <div className="highlightedUserPanel">
            <div className='generic-data'>
            <h2>{`${user}'s last 5 games`}</h2>
             <div className="highlighted-games-data">
                {gamesToDisplay}
             </div>
            </div>
        </div>
    )
}