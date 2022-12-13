import { useState } from "react";
import { FilterState, QuestState } from "../types/states";

const useQuests = () => {
  const [quests, setQuests] = useState<QuestState[]>([
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ]);

  const searchHandler = (filter: FilterState) => {};

  return { quests, searchHandler };
};

export default useQuests;
