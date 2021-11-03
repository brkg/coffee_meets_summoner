import React from "react";

interface iGames{
    championName : string,
    lane : string, 
    kills : number,
    deaths : number,
    assists : number,
    items : Array<number>,
    spells : Array<Object>,
    win : Boolean,

}

export default function HighlightUser(props : {user : string, userData : Array<iGames>}){
    const { user, userData} = props;

    let contentToDisplay : any = <div></div>;
    if(user === 'User not found'){
        contentToDisplay = <div className="highlightedUserPanel"><h1>{user}</h1></div>
    } else{
        
        const gamesToDisplay : Array<JSX.Element> = [];

    userData.forEach((game : iGames) => {
        const {championName, lane, kills, deaths, assists, items, spells,  win} = game;
        
        const itemsToDisplay : Array<JSX.Element> = [];


        items.forEach((item : any) => {
           itemsToDisplay.push(
            <img 
                className="highlighted-user-profile-imgs history-images" 
                src={`http://ddragon.leagueoflegends.com/cdn/11.22.1/img/item/${item.id}.png`} 
                alt={`iteam #${item.id} : ${item.name}`}  
            />
           )  
        });

        const spellsToDisplay : Array<JSX.Element> = [];

        spells.forEach((spell : any) => {
           spellsToDisplay.push(
            
            <img 
                src={`http://ddragon.leagueoflegends.com/cdn/11.22.1/img/spell/${spell.id}.png`} 
                alt={`${spell.id}`}           
            />    
            
           )  
             
        })


        const backgroundColor = win === false ? "loss" : "win"

        gamesToDisplay.push(
            <div className={`highlighted-game-${backgroundColor}`+ " match-history"} >
                <div className="champion-info">
                    <h5>{`${championName}`}</h5>
                    <img
                        src={`https://ddragon.leagueoflegends.com/cdn/11.22.1/img/champion/${championName}.png`}
                        alt={`Champion ${championName}`}
                        width="50wv"
                    />
                    <h5>{lane.toLowerCase()}</h5>
                </div>
                <div className="summoner-spells">
                    <h5>Spells</h5>
                    <div className="history-images">{spellsToDisplay}</div>
                    <h5></h5>
                </div>
                <div className="items">
                    <h5>Items</h5>
                    <div className="history-images">{itemsToDisplay}</div>
                    <h5></h5>
                </div>
                <div className="kda">
                    <h5>KDA</h5>
                    <h5>{`${kills}|${deaths}|${assists}`}</h5>
                    <h5></h5>
                </div>
            </div>
        )

    });

    contentToDisplay = 
        <div className="highlightedUserPanel">
            <div className='generic-data'>
                <h2>{`${user}'s Last 5 Solo Ranked Games`}</h2>
                <div className="highlighted-games-data">
                    {gamesToDisplay}
                </div>
            </div>
        </div>; 

    }

    return <div className="highlighted-user-main">{contentToDisplay}</div> 
}