import { uuid } from "@src/utils/functions/uuid";
import moment from "moment";

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
        <QuestItem
          id={quest._id}
          title={quest.title}
          time={moment(quest.createdAt).format("MMMM DD,YYYY [at] HH:mm A")}
          key={uuid()}
          category={quest.category}
          commentNum={quest.solverAddress.length}
        />
      ))}
    </Wrapper>
  );
};

export default Board;
