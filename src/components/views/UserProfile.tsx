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
    </div>
  );
}
