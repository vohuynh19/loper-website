import { uuid } from "@src/utils/functions/uuid";

import useQuests from "../../../hooks/useQuests";
import BoardToolbar from "./BoardToolbar";
import QuestItem from "./QuestItem";

import { Wrapper } from "./styled";

const Board = () => {
  const { quests } = useQuests();

  return (
    <Wrapper>
      <BoardToolbar />
      {quests.map((quest) => (
        <QuestItem key={uuid()} />
      ))}
    </Wrapper>
  );
};

export default Board;
