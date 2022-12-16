import { FavoriteBorder } from "@mui/icons-material";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import axiosInstance from "@src/apis/axios";
import { ENDPOINTS } from "@src/apis/endpoints";
import UserItemType2 from "@user/components/UserItem/UserItemType2";
import { Button, notification } from "antd";
import { useMutation, useQueryClient } from "react-query";
import VerifiedIcon from "@mui/icons-material/Verified";

import {
  Body,
  ReplyWrapper,
  ReplyContent,
  QuestHeadReply,
  LoveArea,
} from "./styled";
import { useAppContract } from "@src/hooks/useAppContract";

const Reply = ({
  commentAddress = "",
  like = 10,
  content = "dignissimos, omnis magnis, commodi donec maecenas incididunt metus",
  questAddress = "",
}) => {
  const wallet = useWallet();
  const modal = useWalletModal();
  const { vote } = useAppContract();

  const { mutate } = useMutation<any, any, any>((params) =>
    axiosInstance.post(ENDPOINTS.LIKE, params)
  );
  const { mutate: voteMutate, isLoading } = useMutation<any, any, any>(
    (params) => axiosInstance.post(ENDPOINTS.VOTE, params)
  );

  const { mutate: contractMutate, isLoading: contractIsLoading } = useMutation<
    any,
    any,
    any
  >((params) => vote(params));

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
      const params = {
        funderAddress: wallet.publicKey,
        solutionAddress: commentAddress,
        isVote: true,
        questAddress,
      };

      contractMutate(params, {
        onSuccess: (tx) => {
          voteMutate(params, {
            onSuccess: () => {
              notification.success({ message: `Txid: ${tx}` });
            },
          });
        },
        onError: (err) => {
          notification.error({ message: `Error: ${err}` });
        },
      });
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
            loading={isLoading || contractIsLoading}
          >
            Vote
          </Button>
        </LoveArea>

        <ReplyContent>{content}</ReplyContent>
      </Body>

      <p
        style={{
          fontSize: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
          padding: 0,
          margin: 0,
          position: "absolute",
          right: 0,
          bottom: -16,
        }}
      >
        <VerifiedIcon color="success" style={{ marginRight: "8px" }} />
        Voted by 2 donator
      </p>
    </ReplyWrapper>
  );
};

export default Reply;
