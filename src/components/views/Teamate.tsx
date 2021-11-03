import React from "react";

interface ITeamate {
  summonerName: string;
  points: number;
  wins : number;
  loses: number;
  rank: string;
  tier :String 
  highlightUserFunction : Function;
  
}


export default function Teamate(props: ITeamate) {

  const { summonerName, wins, loses, tier, rank, points, highlightUserFunction} = props;

  const average = wins / loses;
  
  return <div className="feed-tile" onClick={()=>highlightUserFunction(summonerName)}>
    <div className="feed-row">
    <h5 className="feed-tile-name">{summonerName}</h5>
    </div>
    <div className="feed-row">
      <p className="feed-tile-subtitle">Tier <span className="feed-tile-entry">{tier}</span></p>
      <p className="feed-tile-subtitle">Rank <span className="feed-tile-entry">{rank}</span></p>
      <p className="feed-tile-subtitle">Points <span className="feed-tile-entry">{points}</span></p>
    </div>
    <div className="feed-row">
      <p className="feed-tile-subtitle">Wins <span className="feed-tile-entry">{wins}</span></p>
      <p className="feed-tile-subtitle">Losses <span className="feed-tile-entry">{loses}</span></p>
      <p className="feed-tile-subtitle">Average <span className="feed-tile-entry">{average}</span></p>

    </div>
  </div>;
}
