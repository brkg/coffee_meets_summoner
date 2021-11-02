import React from "react";

interface IUser { 
  summonerName: string;
  points: number;
  wins : number;
  loses: number;
  rank: string;
  tier :String 
  avatar: number;

}

 

export default function UserProfile(props: any) {
  const { avatar, summonerName, wins, loses, tier, rank, points, displayTeamateData} = props.user;

  const average : number = (wins + loses) / 2;

  return (
    <div className="user-profile" onClick={()=>displayTeamateData}>
    <div>
    <h5 className="user-profile-name">{summonerName}</h5>
    <img src={`https://leagueoflegendsavatar/${avatar}`} width="100px" />
    </div>
    <div>
      <p className="feed-tile-subtitle">Tier <span className="feed-tile-entry">{tier}</span></p>
      <p className="feed-tile-subtitle">Rank <span className="feed-tile-entry">{rank}</span></p>
    </div>
    <div>
      <p className="feed-tile-subtitle">Points <span className="feed-tile-entry">{points}</span></p>
      <p className="feed-tile-subtitle">Wins <span className="feed-tile-entry">{wins}</span></p>
      <p className="feed-tile-subtitle">Losses <span className="feed-tile-entry">{loses}</span></p>
      <p className="feed-tile-subtitle">Average <span className="feed-tile-entry">{average}</span></p>

    </div>
    </div>
  );
}
