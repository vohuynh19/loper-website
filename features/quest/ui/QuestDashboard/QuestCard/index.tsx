import { Avatar, Space, Tag } from "antd";
import { FC } from "react";
import { uuid } from "@utils/functions/uuid";

import {
  UserWrapper,
  UserTitle,
  Desc,
  HeadWrapper,
  Title,
  Wrapper,
  StyledButton,
} from "./styled";

type QuestCardProps = {
  contributorList?: any[];
  donatorList?: any[];
};

const QuestCard: FC<QuestCardProps> = ({
  contributorList = [{}, {}, {}],
  donatorList = [{}, {}, {}],
}) => {
  return (
    <Wrapper>
      <HeadWrapper>
        <Title>Title Here</Title>
        <Tag>Quest Status</Tag>
      </HeadWrapper>

      <Desc>
        Description Description Description Description Description Description
        Description Description Description Description Description Description
        Description Description Description Description Description Description
        Description Description Description
      </Desc>

      <UserWrapper>
        <UserTitle>Contributor</UserTitle>
        <Space>
          {contributorList.map((contributor) => (
            <Avatar key={uuid()} src={contributor.avatarUri} />
          ))}
        </Space>
      </UserWrapper>

      <UserWrapper>
        <UserTitle>Donator</UserTitle>
        <Space>
          {donatorList.map((donator) => (
            <Avatar key={uuid()} src={donator.avatarUri} />
          ))}
        </Space>
      </UserWrapper>

      <StyledButton size="large">Stake</StyledButton>
    </Wrapper>
  );
};

export default QuestCard;
