import { useState } from "react";

import { mockQuestCategories } from "../mocks/questCategories";
import { CategoryState } from "../types/states";

const useQuestCategories = () => {
  const [questCategories, setQuestCategories] = useState<CategoryState[]>(
    mockQuestCategories.map((quest) => ({
      iconUrl: "https://raroin.creabik.com/assets/img/icons/github.svg",
      name: "Knowledge Base",
      numberOfPosts: 155,
    }))
  );

  return [questCategories];
};

export default useQuestCategories;
