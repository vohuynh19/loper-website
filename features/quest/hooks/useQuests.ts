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

  return { quests };
};

export default useQuests;
