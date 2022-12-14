import { Avatar } from "antd";
import { FC } from "react";
import { UserInfo1, Wrapper1, Name1, Assets1 } from "./styled";

type Props = {
  avatarUrl?: string;
  name?: string;
  amount?: number;
};

const UserItemType2: FC<Props> = ({ avatarUrl, name, amount }) => {
  return (
    <Wrapper1>
      <Avatar style={{ width: "5em", height: "5em" }} src={avatarUrl} />
      <UserInfo1>
        <Name1>{name}</Name1>
        <Assets1>{amount} FDB</Assets1>
      </UserInfo1>
    </Wrapper1>
  );
};

export default UserItemType2;
