import { FavoriteBorder } from "@mui/icons-material";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import UserItemType2 from "@user/components/UserItem/UserItemType2";

import {
  Body,
  ReplyWrapper,
  ReplyContent,
  QuestHeadReply,
  LoveArea,
} from "./styled";

const Reply = ({
  like = 10,
  content = "dignissimos, omnis magnis, commodi donec maecenas incididunt metus",
}) => {
  const wallet = useWallet();
  const modal = useWalletModal();

  const likeHandler = () => {
    if (!wallet.connected) {
      modal.setVisible(true);
      return;
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
        </LoveArea>

        <ReplyContent>{content}</ReplyContent>
      </Body>
    </ReplyWrapper>
  );
};

export default Reply;
