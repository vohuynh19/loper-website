import Divider from "@quest/components/Divider";
import QuestDetailHeader from "./QuestDetailHeader";

import { Wrapper } from "./styled";
import QuestDetailFooter from "./QuestDetailFooter";
import QuestDetailBody from "./QuestDetailBody";
import useQuestDetails from "../../hooks/useQuestDetail";

const QuestDetail = () => {
  const { questData } = useQuestDetails("123");

  return (
    <Wrapper>
      <QuestDetailHeader
        questTitle={questData.quest.questTitle}
        groupName={questData.quest.groupName}
        solverList={questData.solverList}
        donatorList={questData.donatorList}
        timeOut={questData.quest.timeOut}
        totalFund={questData.quest.totalFund}
      />

      <Divider thickness={1} space={16} />

      <QuestDetailBody
        desc={questData.quest.desc}
        attachmentList={questData.attachmentList}
      />

      <QuestDetailFooter
        authorName={questData.author.authorName}
        authorBio={questData.author.authorBio}
        authorEmail={questData.author.authorEmail}
        authorPhone={questData.author.authorPhone}
        authorAddress={questData.author.authorAddress}
        questVote={questData.voteUp - questData.voteDown}
      />
    </Wrapper>
  );
};

export default QuestDetail;
