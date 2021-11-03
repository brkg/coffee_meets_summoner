import React from "react";
import Teamate from "./Teamate";

interface Iteamate {
  summonerName: string;
  points: number;
  wins : number;
  losses: number;
  rank: string;
  tier :String 
  highlightUserFunction : Function;
}

 

export default function Feed(props: any) {
  const { teamates, highlightUserFunction} = props;

  const feedOfUsers: Array<JSX.Element> = [];
  teamates.forEach((user: Iteamate) => {
    const { summonerName, wins, losses, tier, rank, points} = user;
    feedOfUsers.push(
      <Teamate
        summonerName={summonerName}
        wins={wins}
        losses={losses}
        tier={tier}
        rank={rank}
        points={points}
        highlightUserFunction={highlightUserFunction}
      />
    );
  });
  return <div className="main-feed">{feedOfUsers}</div>;
}
