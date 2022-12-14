import { useState } from "react";

import { LabelState } from "../types/states";

const useLabels = () => {
  const [labels, setLabels] = useState<LabelState[]>([
    { label: "IT" },
    { label: "Knowledge" },
  ]);

  return { labels };
};

export default useLabels;
