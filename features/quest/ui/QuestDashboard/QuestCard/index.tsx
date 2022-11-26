import { Avatar, Tag } from "antd";
import { FC } from "react";
import { uuid } from "@utils/functions/uuid";

import {
  ContributorIcon,
  ContributorWrapper,
  Desc,
  DonatorIcon,
  DonatorWrapper,
  HeadWrapper,
  Title,
  Wrapper,
} from "./styled";

type QuestCardProps = {
  contributorList?: any[];
  donatorList?: any[];
};

const QuestCard: FC<QuestCardProps> = ({
  contributorList = [],
  donatorList = [],
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
        /types ...
      </Desc>

      <ContributorWrapper>
        <ContributorIcon />
        {contributorList.map((contributor) => (
          <Avatar key={uuid()} src={contributor.avatarUri} />
        ))}
      </ContributorWrapper>

      <DonatorWrapper>
        <DonatorIcon />
        {donatorList.map((donator) => (
          <Avatar key={uuid()} src={donator.avatarUri} />
        ))}
      </DonatorWrapper>
    </Wrapper>
  );
};

export default QuestCard;
