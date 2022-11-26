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
        <Title>Quest Card</Title>
        <Tag>Quest Card</Tag>
      </HeadWrapper>

      <Desc>
        Issue in [BuilderIO/qwik](https://github.com/BuilderIO/qwik) found in
        #51218 `Error: start` ``` Req #6872 - references at createTextSpan
        /types .../
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
