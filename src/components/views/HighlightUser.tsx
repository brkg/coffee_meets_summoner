import React from "react";


export default function HighlightUser(props : any){
    const { avatar, summonerName } = props.user;

    return(
        <div className="highlightedUserPanel">
            <div className='generic-data'>
            <img src={`https://leagueoflegendsavatar/${avatar}`} width="100px" />
            <p>{summonerName}</p>
            </div>
        </div>
    )
}