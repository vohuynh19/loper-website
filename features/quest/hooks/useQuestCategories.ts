import { useState } from "react";

import { mockQuestCategories } from "../mocks/questCategories";
import { CategoryState } from "../types/states";

const useQuestCategories = () => {
  const [questCategories, setQuestCategories] = useState<CategoryState[]>(
    mockQuestCategories.map((quest) => ({
      iconUrl:
        "https://wordpress-theme.spider-themes.net/ama/wp-content/uploads/2020/07/dashboard.svg",
      name: "Knowledge Base",
      numberOfPosts: 155,
    }))
  );

  return [questCategories];
};

export default useQuestCategories;
