import { useLocale } from "~/src/hooks/useLocale";
import { uuid } from "@utils/functions/uuid";
import useQuests from "@quest/hooks/useQuests";

import QuestCard from "./QuestCard";
import FilterBar from "./FilterBar";
import LeaderBoard from "./LeaderBoard";

import { QuestCardWrapper, SideLeft, SideRight, Wrapper } from "./styled";

const QuestDashboard = () => {
  const { t } = useLocale("quest");
  const { quests, searchHandler } = useQuests();

  return (
    <Wrapper>
      <SideLeft>
        <FilterBar onSearch={searchHandler} />
        <QuestCardWrapper>
          {quests.map((quest) => (
            <QuestCard key={uuid()} />
          ))}
        </QuestCardWrapper>
      </SideLeft>

      <SideRight>
        <LeaderBoard />
      </SideRight>
    </Wrapper>
  );
};

export default QuestDashboard;
