import { Avatar, Space, Tag } from "antd";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

import { uuid } from "@utils/functions/uuid";

import Divider from "../../components/Divider";

import {
  Wrapper,
  Header,
  QuestContribute,
  QuestDesc,
  QuestAttach,
  QuestJoin,
  AuthorArea,
  AuthorAvatar,
  AuthorDesc,
  AuthorName,
  AuthorBio,
  AuthorContact,
  QuestVote,
  GroupName,
  HeadInfo,
  QuestTitle,
  VoteBox,
  UserWrapper,
  ContributeArea,
  CountdownDate,
  PoolArea,
  TotalAsset,
  UserTitle,
  Cover,
  AttachmentItem,
  AuthorShort,
  ContactDesc,
  ContactTitle,
  ContactWrapper,
  QuestBox,
  QuestBoxButton,
  QuestBoxTitle,
} from "./styled";

const QuestDetail = () => {
  const solverList = [{}, {}, {}];
  const donatorList = [{}, {}, {}];
  const attachmentList = [{}, {}, {}, {}, {}, {}, {}, {}, {}];

  return (
    <Wrapper>
      <Header>
        <HeadInfo>
          <QuestTitle>Quest title</QuestTitle>
          <GroupName>Group name</GroupName>
        </HeadInfo>
        <div>
          <Tag color="green">Open</Tag>
        </div>
      </Header>

      <QuestContribute>
        <ContributeArea>
          <UserWrapper>
            <UserTitle>Solver</UserTitle>
            <Space>
              {solverList.map((solver) => (
                <Avatar key={uuid()} src={"/"} />
              ))}
            </Space>
          </UserWrapper>

          <UserWrapper>
            <UserTitle>Donator</UserTitle>
            <Space>
              {donatorList.map((donator) => (
                <Avatar key={uuid()} src={"/"} />
              ))}
            </Space>
          </UserWrapper>
        </ContributeArea>

        <PoolArea>
          <CountdownDate>1 days 23 hour left</CountdownDate>
          <TotalAsset> 1000 LOPER </TotalAsset>
        </PoolArea>
      </QuestContribute>

      <Divider thickness={1} space={16} />

      <Cover url={"/vercel.svg"} />

      <h1>Description</h1>
      <QuestDesc>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by
        Cicero, written in 45 BC. This book is a treatise on the theory of
        ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section
        1.10.32.
      </QuestDesc>

      <Divider thickness={1} space={16} />

      <h1>Attachment</h1>
      <QuestAttach>
        {attachmentList.map((attachment) => (
          <AttachmentItem key={uuid()} previewUri="/vercel.svg" />
        ))}
      </QuestAttach>

      <Divider thickness={1} space={16} />

      <QuestJoin>
        <QuestBox>
          <QuestBoxTitle>
            Submit the evidence if you have solved this problem.
          </QuestBoxTitle>
          <QuestBoxButton>Submit</QuestBoxButton>
        </QuestBox>
        <QuestBox>
          <QuestBoxTitle>Please connect your Solana wallet.</QuestBoxTitle>
          <QuestBoxButton>Select Wallet</QuestBoxButton>
        </QuestBox>
      </QuestJoin>

      <Divider thickness={1} space={16} />

      <AuthorArea>
        <AuthorAvatar />

        <AuthorDesc>
          <AuthorShort>
            <AuthorName> Vo Huynh</AuthorName>
            <AuthorBio> Dark is like a wind, always by my side </AuthorBio>
          </AuthorShort>

          <AuthorContact>
            <ContactWrapper>
              <ContactTitle>Email:</ContactTitle>
              <ContactDesc>vohuynh01092002@gmail.com</ContactDesc>
            </ContactWrapper>
            <ContactWrapper>
              <ContactTitle>Phone:</ContactTitle>
              <ContactDesc>0869380696</ContactDesc>
            </ContactWrapper>
            <ContactWrapper>
              <ContactTitle>Address:</ContactTitle>
              <ContactDesc>Room 04 Tan Da Court</ContactDesc>
            </ContactWrapper>
          </AuthorContact>
        </AuthorDesc>
      </AuthorArea>

      <QuestVote>
        <VoteBox>
          <ArrowUpward />
        </VoteBox>
        45
        <VoteBox>
          <ArrowDownward />
        </VoteBox>
      </QuestVote>
    </Wrapper>
  );
};

export default QuestDetail;
