import useQuestCategories from "@quest/hooks/useQuestCategories";
import { uuid } from "@src/utils/functions/uuid";
import { Col, Row } from "antd";
import QuestCategoryItem from "./QuestCategoryItem";
import { Container, Title, Wrapper } from "./styled";

const QuestCategories = () => {
  const [questCategories] = useQuestCategories();

  return (
    <Container>
      <Wrapper>
        <Title>Categories</Title>

        <Row>
          {questCategories.map((category) => {
            return (
              <Col key={uuid()} span={8}>
                <QuestCategoryItem
                  title={category.name}
                  iconUrl={category.iconUrl}
                  numberOfPost={category.numberOfPosts}
                />
              </Col>
            );
          })}
        </Row>
      </Wrapper>
    </Container>
  );
};

export default QuestCategories;
