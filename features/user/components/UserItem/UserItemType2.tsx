import Role, { RoleType } from "@components/Role";
import { Avatar } from "antd";
import { FC } from "react";
import { UserInfo2, Wrapper2, Name2, Desc2, Time2 } from "./styled";

type Props = {
  avatarUrl?: string;
  name?: string;
  amount?: number;
  role?: RoleType;
  time?: number;
};

const UserItemType2: FC<Props> = ({
  avatarUrl,
  name = "VO HUYNH",
  role,
  time = "September 21, 2020 at 8:16 pm",
}) => {
  return (
    <Wrapper2>
      <Avatar style={{ width: "44px", height: "44px" }} src={avatarUrl} />
      <UserInfo2>
        <Name2>{name}</Name2>
        <Desc2>
          <Role role={role} />
          <Time2>{time}</Time2>
        </Desc2>
      </UserInfo2>
    </Wrapper2>
  );
};

export default UserItemType2;
