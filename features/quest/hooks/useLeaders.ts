import { useState } from "react";
import { FilterState, LeaderState } from "../types/states";

const useLeaders = () => {
  const [leaders, setLeaders] = useState<LeaderState[]>([
    { rank: 1 },
    { rank: 2 },
    { rank: 3 },
    { rank: 4 },
    { rank: 5 },
  ]);

  return { leaders };
};

export default useLeaders;
