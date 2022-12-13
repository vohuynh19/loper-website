import { Avatar } from "antd";
import { FC } from "react";

import useLeaders from "@quest/hooks/useLeaders";
import { uuid } from "@utils/functions/uuid";

import {
  Title,
  Wrapper,
  LeaderItemWrapper,
  LeaderItemInfo,
  LeaderTitle,
  LeaderEarned,
  LeaderRank,
} from "./styled";

const LeaderBoard = () => {
  const { leaders } = useLeaders();
  return (
    <Wrapper>
      <Title>Leader board</Title>
      {leaders.map((leader) => (
        <LeaderItem key={uuid()} rank={leader.rank} />
      ))}
    </Wrapper>
  );
};

type LeaderItemProps = {
  rank: number;
};
const LeaderItem: FC<LeaderItemProps> = ({ rank }) => {
  return (
    <LeaderItemWrapper>
      <Avatar />
      <LeaderItemInfo>
        <LeaderTitle>Leader Name</LeaderTitle>
        <LeaderEarned>Earned: 100 LPC</LeaderEarned>
      </LeaderItemInfo>

      <LeaderRank>{rank}</LeaderRank>
    </LeaderItemWrapper>
  );
};

export default LeaderBoard;
