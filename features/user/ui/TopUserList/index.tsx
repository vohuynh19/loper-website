import { Col, Row } from "antd";

import TopUserListItem from "./TopUserListItem";
import useTopUserList from "../../hooks/useTopUserList";

import { Container, Wrapper } from "./styled";

const TopUserList = () => {
  const [donatorList, solverList] = useTopUserList();

  return (
    <Container>
      <Wrapper>
        <TopUserListItem
          title="Hot Donator"
          userList={donatorList.filter((item, index) => index < 8)}
        />
        <TopUserListItem
          title="Hot Solver"
          userList={donatorList.filter((item, index) => index < 8)}
        />
      </Wrapper>
    </Container>
  );
};

export default TopUserList;
