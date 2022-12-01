import { useState } from "react";
import { GroupState } from "../types/states";

const defaultGroups: GroupState[] = [
  { id: 0, name: "Global" },
  { id: 1, name: "Group 1" },
  { id: 2, name: "Group 2" },
  { id: 3, name: "Group 3" },
  { id: 4, name: "Group 4" },
];

const useGroups = () => {
  const [groups, setGroups] = useState<GroupState[]>(defaultGroups);
  const [selectedGroupId, setSelectedGroupId] = useState(defaultGroups[0].id);

  return { groups, selectedGroupId, setSelectedGroupId };
};

export default useGroups;
