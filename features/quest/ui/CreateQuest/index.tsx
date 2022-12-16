import {
  CategoryOutlined,
  MoneyOutlined,
  TagOutlined,
  TitleOutlined,
} from "@mui/icons-material";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Button, DatePicker, Form, Input, notification } from "antd";
import moment from "moment";
import { useMutation } from "react-query";
import dynamic from "next/dynamic";
const TextArea = dynamic(() => import("antd/es/input/TextArea"), {
  ssr: false,
});

import { ENDPOINTS } from "@src/apis/endpoints";
import axiosInstance from "@src/apis/axios";

import { CreateQuestParam, useAppContract } from "@src/hooks/useAppContract";

import { Container, Title, Wrapper } from "./styled";
import { useState } from "react";

const CreateQuest = () => {
  const wallet = useWallet();
  const [form] = Form.useForm();
  const { createQuest } = useAppContract();
  const { mutate: createServerQuest, isLoading: loading1 } = useMutation<
    any,
    any,
    any
  >((params) => {
    return axiosInstance.post(ENDPOINTS.QUEST.CREATE, params);
  });
  const { mutate: createContractQuest, isLoading: loading2 } = useMutation<
    any,
    any,
    any
  >((params) => {
    return createQuest(params);
  });

  const [time, setTime] = useState(moment().unix());

  const createQuestHandler = async (values: any) => {
    try {
      await form.validateFields();
      const params = {
        ...values,
        timeEnd: time,
      };
      createContractQuest(params, {
        onSuccess: (tx: string) => {
          createServerQuest(params, {
            onSuccess: () => {
              notification.success({ message: `txid: ${tx}` });
            },
          });
        },
        onError: (err) => {
          notification.error({ message: `Error: ${err}` });
        },
      });
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <Container>
      <Wrapper>
        {!wallet.connected ? (
          <WalletMultiButton />
        ) : (
          <Form
            form={form}
            className="formAnt"
            layout="vertical"
            autoComplete="off"
            onFinish={createQuestHandler}
          >
            <Title>Create New Question</Title>

            <Form.Item
              rules={[{ required: true }]}
              required
              name={"title"}
              label={"Title"}
            >
              <Input size={"large"} suffix={<TitleOutlined />} />
            </Form.Item>

            <Form.Item
              rules={[{ required: true }]}
              required
              name={"amount"}
              label={"Initial Fund Amount"}
            >
              <Input size={"large"} suffix={<MoneyOutlined />} />
            </Form.Item>

            <Form.Item
              rules={[{ required: true }]}
              required
              name={"timeEnd"}
              label={"Expired At"}
            >
              <DatePicker
                onChange={(value) => setTime(value?.unix() || time)}
                style={{ width: "100%" }}
                size={"large"}
              />
            </Form.Item>
            <Form.Item
              rules={[{ required: true }]}
              required
              name={"category"}
              label={"Category"}
            >
              <Input size={"large"} suffix={<CategoryOutlined />} />
            </Form.Item>
            <Form.Item
              rules={[{ required: true }]}
              required
              name={"tags"}
              label={"Tags"}
            >
              <Input size={"large"} suffix={<TagOutlined />} />
            </Form.Item>
            <Form.Item
              rules={[{ required: true }]}
              required
              name={"description"}
              label={"Description"}
            >
              <TextArea showCount size={"large"} maxLength={500} />
            </Form.Item>

            <Button
              loading={loading1 || loading2}
              htmlType="submit"
              size={"large"}
              type="primary"
            >
              Submit
            </Button>
          </Form>
        )}
      </Wrapper>
    </Container>
  );
};

export default CreateQuest;
