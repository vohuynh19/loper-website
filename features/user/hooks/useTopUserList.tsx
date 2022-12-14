import { useState } from "react";

import { TopUserList } from "../mocks/topUserList";
import { UserState } from "../types/states";

const defaultState = TopUserList.map((item) => {
  return {
    name: "Vo Huynh",
    avatarUrl: "https://raroin.creabik.com/assets/img/avatars/avatar_12.png",
    balance: 123,
  };
});

const useTopUserList = () => {
  const [donatorList, setDonatorList] = useState<UserState[]>(defaultState);

  const [solverList, setSolverList] = useState<UserState[]>(defaultState);

  return [donatorList, solverList];
};

export default useTopUserList;
