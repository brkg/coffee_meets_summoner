import React from "react";
import Teamate from "./Teamate";
export default function Feed(props: Object) {
  const { teamate } = props;

  const feedOfUsers = [];
  for (let user of teamate) {
    const { avatar, userId, kda, rank, previousGames } = user;
    feedOfUsers.push(
      <Teamate
        clasName="feed-tile"
        avatar={avatar}
        userId={userId}
        kda={kda}
        rank={rank}
        previousGames={previousGames}
      />
    );
  }
  return <div>{feedOfUsers}</div>;
}
