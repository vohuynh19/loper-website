import { FavoriteOutlined } from "@mui/icons-material";
import UserItemType2 from "@user/components/UserItem/UserItemType2";

import {
  Body,
  BodyContent,
  Content,
  FYI,
  TagList,
  Category,
  Title,
  ReplyWrapper,
} from "./styled";

const Reply = () => {
  return (
    <ReplyWrapper>
      <UserItemType2 />

      <Body>
        <FavoriteOutlined />

        <BodyContent>
          <Title></Title>
          <Content></Content>

          <FYI>
            <TagList></TagList>
            <Category></Category>
          </FYI>
        </BodyContent>
      </Body>
    </ReplyWrapper>
  );
};

export default Reply;
