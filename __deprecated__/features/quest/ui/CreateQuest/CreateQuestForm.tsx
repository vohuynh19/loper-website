import Upload from "@quest/components/Upload";
import { Button, Col, Input, Row, Select } from "antd";
import { StyledForm } from "./styled";

const { Item } = StyledForm;

const CreateQuestForm = () => {
  return (
    <StyledForm layout="vertical" autoComplete="off">
      <Row>
        <Col span={24}>
          <Item label={"Title"}>
            <Input />
          </Item>
        </Col>

        <Col span={24}>
          <Item label={"Desc"}>
            <Input />
          </Item>
        </Col>

        <Col span={12}>
          <Item label={"Group"}>
            <Select />
          </Item>
        </Col>

        <Col span={12}>
          <Item label={"Role"}>
            <Select />
          </Item>
        </Col>

        <Col span={24}>
          <Item label={"Cover background"}>
            <Upload />
          </Item>
        </Col>

        <Col span={24}>
          <Item label={"Attachment"}>
            <Upload />
          </Item>
        </Col>
      </Row>

      <Button
        size="large"
        type="primary"
        htmlType="submit"
        style={{ width: "100%" }}
      >
        Submit
      </Button>
    </StyledForm>
  );
};

export default CreateQuestForm;
