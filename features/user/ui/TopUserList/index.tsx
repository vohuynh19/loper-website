import { Col, Row } from "antd";

import TopUserListItem from "./TopUserListItem";
import useTopUserList from "../../hooks/useTopUserList";

import { Container, Wrapper } from "./styled";

const TopUserList = () => {
  const [donatorList, solverList] = useTopUserList();

  return (
    <Container>
      <Wrapper>
        <Row style={{ flex: 1 }}>
          <Col span={12}>
            <TopUserListItem
              title="Hot Donator"
              userList={donatorList.filter((item, index) => index < 8)}
            />
          </Col>
          <Col span={12}>
            <TopUserListItem
              title="Hot Solver"
              userList={donatorList.filter((item, index) => index < 8)}
            />
          </Col>
        </Row>
      </Wrapper>
    </Container>
  );
};

export default TopUserList;
