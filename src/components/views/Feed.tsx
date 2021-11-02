import React from "react";
import Teamate from "./Teamate";

interface IUser {
  userId: string;
  kda: string;
  rank: string;
  previousGames: Object[];
  avatar: string;
}

interface UserProps {
  teamates: IUser[];
}

export default function Feed(props: UserProps) {
  const { teamates } = props;

  const feedOfUsers: Array<JSXElement> = [];
  teamates.forEach((user: IUser) => {
    const { avatar, userId, kda, rank, previousGames } = user;
    feedOfUsers.push(
      <Teamate
        avatar={avatar}
        userId={userId}
        kda={kda}
        rank={rank}
        previousGames={previousGames}
      />
    );
  });
  return <div>{feedOfUsers}</div>;
}
