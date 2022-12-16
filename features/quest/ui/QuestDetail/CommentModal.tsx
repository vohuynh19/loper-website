import { useWallet } from "@solana/wallet-adapter-react";
import axiosInstance from "@src/apis/axios";
import { ENDPOINTS } from "@src/apis/endpoints";
import { Form, Modal, notification } from "antd";
import { useImperativeHandle } from "react";
import { useRef } from "react";
import { useState } from "react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useAppContract } from "@src/hooks/useAppContract";
import dynamic from "next/dynamic";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const TextArea = dynamic(() => import("antd/es/input/TextArea"), {
  ssr: false,
});

const CommentModal: ForwardRefRenderFunction<any, any> = ({}, ref) => {
  const [form] = Form.useForm();
  const [visible, setVisible] = useState(false);
  const dataSource = useRef<any>({});
  const wallet = useWallet();
  const { createComment } = useAppContract();
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation<any, any, any>((params) =>
    axiosInstance.post(ENDPOINTS.COMMENT.CREATE, params)
  );
  const { mutate: contractMutate, isLoading: contractLoading } = useMutation<
    any,
    any,
    any
  >((params) => createComment(params));

  useImperativeHandle(ref, () => ({
    open: (data: any) => {
      dataSource.current = data;
      setVisible(true);
    },
  }));

  const submitHandler = (values: any) => {
    const params = {
      questAddress: dataSource?.current?.questAddress,
      userAddress: wallet.publicKey,
      content: form.getFieldValue("comment"),
      imageLink: "",
    };

    contractMutate(params, {
      onSuccess: (res: any) => {
        console.log(res);
        mutate(
          { ...params, solutionAddress: res[1].toString() },
          {
            onSuccess: () => {
              notification.success({ message: `Txid: ${res[0].toString()}` });
              form.resetFields();
              queryClient.invalidateQueries(`get/commentData`);
              setVisible(false);
            },
          }
        );
      },
      onError: (err) => {
        notification.error({ message: `Error ${err}` });
      },
    });
  };

  return (
    <Modal
      open={visible}
      footer={
        wallet.connected ? undefined : (
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <WalletMultiButton />
          </div>
        )
      }
      title="Comment"
      onOk={submitHandler}
      confirmLoading={isLoading || contractLoading}
      onCancel={() => setVisible(false)}
    >
      <Form form={form} layout={"vertical"} style={{ marginTop: "24px" }}>
        <Form.Item name="comment">
          <TextArea showCount size={"large"} maxLength={500} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default forwardRef(CommentModal);
