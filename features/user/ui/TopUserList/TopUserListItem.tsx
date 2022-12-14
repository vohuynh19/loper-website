import { Col, Row } from "antd";
import { FC } from "react";

import { uuid } from "@src/utils/functions/uuid";
import UserItemType1 from "../../components/UserItem/UserItemType1";
import { UserState } from "../../types/states";

import { Title, UserListWrapper, BodyUserList } from "./styled";

type Props = {
  title: string;
  userList: UserState[];
};

const TopUserListItem: FC<Props> = ({ title, userList }) => {
  return (
    <UserListWrapper>
      <Title>{title}</Title>

      <BodyUserList>
        <Row>
          {userList.map((user) => (
            <Col key={uuid()} span={12}>
              <UserItemType1
                name={user.name}
                amount={user.balance}
                avatarUrl={user.avatarUrl}
              />
            </Col>
          ))}
        </Row>
      </BodyUserList>
    </UserListWrapper>
  );
};

export default TopUserListItem;
