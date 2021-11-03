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
                className="highlighted-user-profile-imgs" 
                src={`http://ddragon.leagueoflegends.com/cdn/11.22.1/img/item/${item.id}.png`} 
                alt={`iteam #${item.id} : ${item.name}`} 
                width="50px" 
            />
           )  
        });

        const spellsToDisplay : Array<JSX.Element> = [];

        spells.forEach((spell : any) => {
           spellsToDisplay.push(
            <div>
                <p>{spell.name}</p>
                <img 
                    src={`http://ddragon.leagueoflegends.com/cdn/11.22.1/img/spell/${spell.id}.png`} 
                    alt={`${spell.id}`}           
                />    
            </div>
           )  
             
        })


        const backgroundColor = win === false ? "loss" : "win"

        gamesToDisplay.push(
            <div className={`highlighted-game-${backgroundColor}`} >
                <div>
                    <h5>{`Champion: ${championName} `}</h5>
                    <img
                        src={`https://ddragon.leagueoflegends.com/cdn/11.22.1/img/champion/${championName}.png`}
                        alt={`Champion ${championName}`}
                        width='50px'
                    />
                    <p>{lane}</p>
                </div>
                <div className="highlighted-row-element">
                    <h5>Spells</h5>
                    {spellsToDisplay}
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

    });

    contentToDisplay = 
        <div className="highlightedUserPanel">
            <div className='generic-data'>
                <h2>{`${user}'s last 5 games`}</h2>
                <div className="highlighted-games-data">
                    {gamesToDisplay}
                </div>
            </div>
        </div>; 

    }

    return <div className="highlighted-user-main">{contentToDisplay}</div> 
}