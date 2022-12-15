import { useLocale } from "@src/hooks/useLocale";

import AskQuestion from "./AskQuestion";
import Board from "./Board";
import RecentActivities from "./../../components/RecentActivities";

import { Container, LeftCol, RightCol, Wrapper } from "./styled";

const QuestDashboard = () => {
  const { t } = useLocale("quest");

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
            activities={[{}, {}, {}, {}, {}, {}]}
          />
          <RecentActivities
            title="Recent Replies"
            activities={[{}, {}, {}, {}, {}, {}]}
          />
        </RightCol>
      </Wrapper>
    </Container>
  );
};

export default QuestDashboard;
