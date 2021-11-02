import React from "react";
import Teamate from "./Teamate";

interface Iteamate {
  summonerName: string;
  points: number;
  wins : number;
  loses: number;
  rank: string;
  tier :String 
  avatar: number;
  highlightUser : Function;
}

 

export default function Feed(props: any) {
  const { teamates } = props;

  const feedOfUsers: Array<JSX.Element> = [];
  teamates.forEach((user: Iteamate) => {
    const { avatar, summonerName, wins, loses, tier, rank, points, highlightUser} = user;
    feedOfUsers.push(
      <Teamate
        avatar={avatar}
        summonerName={summonerName}
        wins={wins}
        loses={loses}
        tier={tier}
        rank={rank}
        points={points}
        highlightUser={highlightUser}
      />
    );
  });
  return <div className="main-feed">{feedOfUsers}</div>;
}
