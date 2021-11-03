import React from "react";

interface IUser { 
  summonerName: string;
  points: number;
  wins : number;
  losses: number;
  rank: string;
  tier :String 
  avatar: number;

}

 

export default function UserProfile(props: any) {
  const { avatar, summonerName, wins, losses, tier, rank, points, displayTeamateData} = props.user;

  const average : number = (wins + losses) / 2;

  return (
    <div className="user-profile-container">
       <div className="user-profile" onClick={()=>displayTeamateData}>
        <div>
          <h5 className="feed-tile-subtitle">Summoner: <span className="feed-tile-entry">{summonerName}</span></h5>
          <img src={`https://ddragon.leagueoflegends.com/cdn/11.22.1/img/profileicon/${avatar}.png`} width="100px" />
        </div>
        <div className="feed-row">
          <p className="feed-tile-subtitle">Tier <span className="feed-tile-entry">{tier}</span></p>
          <p className="feed-tile-subtitle">Rank <span className="feed-tile-entry">{rank}</span></p>
          <p className="feed-tile-subtitle">Points <span className="feed-tile-entry">{points}</span></p>
        </div>
        <div className="feed-row">
          <p className="feed-tile-subtitle">Wins <span className="feed-tile-entry">{wins}</span></p>
          <p className="feed-tile-subtitle">Losses <span className="feed-tile-entry">{losses}</span></p>
          <p className="feed-tile-subtitle">Average <span className="feed-tile-entry">{average}</span></p>
        </div>
      </div>
    </div>
    
  );
}
