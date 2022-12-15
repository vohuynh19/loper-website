import { uuid } from "@src/utils/functions/uuid";

import Reply from "./Reply";
import Quest from "./Quest";
import RecentActivities from "@quest/components/RecentActivities";

import {
  Replies,
  Title,
  Wrapper,
  Container,
  LeftCol,
  RightCol,
} from "./styled";

const QuestDetail = () => {
  const questReplies = [{}, {}];

  return (
    <Container>
      <Wrapper>
        <LeftCol>
          <Quest />

          <Replies>
            <Title>All Replies</Title>

            {questReplies.map((reply) => {
              return <Reply key={uuid()} />;
            })}
          </Replies>
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

export default QuestDetail;
