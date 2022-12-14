import { uuid } from "@src/utils/functions/uuid";

import Reply from "./Reply";
import Quest from "./Quest";

import { Replies, Title, Wrapper } from "./styled";

const QuestDetail = () => {
  const questReplies = [{}, {}];

  return (
    <Wrapper>
      <Quest />

      <Replies>
        <Title></Title>

        {questReplies.map((reply) => {
          return <Reply key={uuid()} />;
        })}
      </Replies>
    </Wrapper>
  );
};

export default QuestDetail;
