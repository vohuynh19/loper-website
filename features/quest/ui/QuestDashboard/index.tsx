import { useLocale } from "@src/hooks/useLocale";

import AskQuestion from "./AskQuestion";
import Board from "./Board";
import RecentActivities from "./../../components/RecentActivities";

import { Container, LeftCol, RightCol, Wrapper } from "./styled";
import useQuests from "@quest/hooks/useQuests";

const QuestDashboard = () => {
  const { t } = useLocale("quest");
  const { quests } = useQuests();

  return (
    <Container>
      <Wrapper>
        <LeftCol>
          <AskQuestion />
          <Board />
        </LeftCol>

        <RightCol>
          <RecentActivities
            title="Recent Topics"
            activities={quests.filter((val, idx) => idx < 6)}
          />
          <RecentActivities
            title="Recent Replies"
            activities={quests.filter((val, idx) => idx < 6)}
          />
        </RightCol>
      </Wrapper>
    </Container>
  );
};

export default QuestDashboard;
