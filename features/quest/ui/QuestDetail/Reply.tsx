import { FavoriteBorder } from "@mui/icons-material";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import axiosInstance from "@src/apis/axios";
import { ENDPOINTS } from "@src/apis/endpoints";
import UserItemType2 from "@user/components/UserItem/UserItemType2";
import { Button } from "antd";
import { useMutation, useQueryClient } from "react-query";

import {
  Body,
  ReplyWrapper,
  ReplyContent,
  QuestHeadReply,
  LoveArea,
} from "./styled";

const Reply = ({
  commentAddress = "",
  like = 10,
  content = "dignissimos, omnis magnis, commodi donec maecenas incididunt metus",
}) => {
  const wallet = useWallet();
  const modal = useWalletModal();
  const { mutate } = useMutation<any, any, any>((params) =>
    axiosInstance.post(ENDPOINTS.LIKE, params)
  );
  const queryClient = useQueryClient();

  const likeHandler = () => {
    mutate(
      {
        address: commentAddress,
        isSolution: true,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(`get/commentData`);
        },
      }
    );
  };

  const voteHandler = () => {
    if (!wallet.connected) {
      modal.setVisible(true);
      return;
    } else {
    }
  };

  return (
    <ReplyWrapper>
      <QuestHeadReply>
        <UserItemType2 avatarUrl="https://raroin.creabik.com/assets/img/avatars/avatar_12.png" />
      </QuestHeadReply>

      <Body>
        <LoveArea style={{ width: "44px" }}>
          <FavoriteBorder onClick={likeHandler} />
          {like}
          <Button
            type="primary"
            style={{ width: "44px", padding: 0, marginTop: "8px" }}
            onClick={voteHandler}
          >
            Vote
          </Button>
        </LoveArea>

        <ReplyContent>{content}</ReplyContent>
      </Body>
    </ReplyWrapper>
  );
};

export default Reply;
