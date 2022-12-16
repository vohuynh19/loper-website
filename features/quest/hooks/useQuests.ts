import { QuestModel } from "../types/models";
import { useQuery } from "react-query";
import axiosInstance from "@src/apis/axios";

import { ENDPOINTS } from "@src/apis/endpoints";
import { DEFAULT_FILTER } from "@src/apis/types";

const useQuests = () => {
  const { data } = useQuery("get/quest", () => {
    return axiosInstance.post(ENDPOINTS.QUEST.GET, DEFAULT_FILTER);
  });

  return { quests: (data?.data?.docs as QuestModel[]) || [] };
};

export default useQuests;
