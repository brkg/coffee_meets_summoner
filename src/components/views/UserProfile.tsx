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
      <h5 className="feed-tile-subtitle">Summoner: <span className="feed-tile-entry">{summonerName}</span></h5>
      <img src={`https://leagueoflegendsavatar/${avatar}`} width="100px" />
    </div>
    </div>
  );
}
