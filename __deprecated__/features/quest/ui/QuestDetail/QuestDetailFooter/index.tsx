import { FC } from "react";

import { useLocale } from "@src/hooks/useLocale";

import { ArrowUpward, ArrowDownward } from "@mui/icons-material";
import Divider from "@quest/components/Divider";

import {
  QuestJoin,
  QuestBox,
  QuestBoxTitle,
  QuestBoxButton,
  AuthorArea,
  AuthorAvatar,
  AuthorDesc,
  AuthorShort,
  AuthorName,
  AuthorBio,
  AuthorContact,
  ContactWrapper,
  ContactTitle,
  ContactDesc,
  QuestVote,
  VoteBox,
} from "../styled";

type Props = {
  authorName: string;
  authorBio: string;
  authorEmail: string;
  authorPhone: string;
  authorAddress: string;
  questVote: number;
};

const QuestDetailFooter: FC<Props> = ({
  authorName,
  authorBio,
  authorEmail,
  authorPhone,
  authorAddress,
  questVote,
}) => {
  const { t } = useLocale("quest");

  return (
    <>
      <QuestJoin>
        <QuestBox>
          <QuestBoxTitle>{t("submitDesc")}</QuestBoxTitle>
          <QuestBoxButton>{t("button.submit")}</QuestBoxButton>
        </QuestBox>
        <QuestBox>
          <QuestBoxTitle>{t("selectWalletDesc")}</QuestBoxTitle>
          <QuestBoxButton>{t("button.selectWallet")}</QuestBoxButton>
        </QuestBox>
      </QuestJoin>

      <Divider thickness={1} space={16} />

      <AuthorArea>
        <AuthorAvatar />

        <AuthorDesc>
          <AuthorShort>
            <AuthorName>{authorName}</AuthorName>
            <AuthorBio> {authorBio} </AuthorBio>
          </AuthorShort>

          <AuthorContact>
            <ContactWrapper>
              <ContactTitle>{t("common.email")}:</ContactTitle>
              <ContactDesc>{authorEmail}</ContactDesc>
            </ContactWrapper>
            <ContactWrapper>
              <ContactTitle>{t("common.phone")}:</ContactTitle>
              <ContactDesc>{authorPhone}</ContactDesc>
            </ContactWrapper>
            <ContactWrapper>
              <ContactTitle>{t("common.address")}:</ContactTitle>
              <ContactDesc>{authorAddress}</ContactDesc>
            </ContactWrapper>
          </AuthorContact>
        </AuthorDesc>
      </AuthorArea>

      <QuestVote>
        <VoteBox>
          <ArrowUpward />
        </VoteBox>
        {questVote}
        <VoteBox>
          <ArrowDownward />
        </VoteBox>
      </QuestVote>
    </>
  );
};

export default QuestDetailFooter;
