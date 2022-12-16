import { FavoriteBorder } from "@mui/icons-material";
import Category from "@quest/components/Category";
import TagList from "@quest/components/TagList";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import UserItemType2 from "@user/components/UserItem/UserItemType2";

import {
  Body,
  BodyContent,
  Content,
  QuestHead,
  QuestTitle,
  QuestWrapper,
  FYI,
  LoveArea,
} from "./styled";

const Quest = ({
  title = "One page template",
  description = "Hello, where can I find the one-page document template? Rerum cubilia, ultricies cillum, dignissim dignissimos, omnis magnis, commodi donec maecenas incididunt metus wisi I updated the theme, however I cant seem to find the onepage documentation template",
  likeNum = 10,
  category = "Docly Theme Support",
  tags = "Tags,123",
}) => {
  const wallet = useWallet();
  const modal = useWalletModal();

  const likeHandler = () => {
    if (!wallet.connected) {
      modal.setVisible(true);
      return;
    }
  };

  const tagsDecode = tags.split(",").map((val) => {
    return { label: val, value: val };
  });

  return (
    <QuestWrapper>
      <QuestHead>
        <UserItemType2 avatarUrl="https://raroin.creabik.com/assets/img/avatars/avatar_12.png" />
      </QuestHead>

      <Body>
        <LoveArea>
          <FavoriteBorder
            onClick={() => {
              likeHandler();
            }}
          />
          {likeNum}
        </LoveArea>

        <BodyContent>
          <QuestTitle>{title}</QuestTitle>
          <Content>{description}</Content>

          <FYI>
            <TagList tags={tagsDecode} />
            <Category categoryName={category} />
          </FYI>
        </BodyContent>
      </Body>
    </QuestWrapper>
  );
};

export default Quest;
