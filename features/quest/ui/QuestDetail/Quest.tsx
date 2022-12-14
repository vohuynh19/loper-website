import { FavoriteOutlined } from "@mui/icons-material";
import UserItemType2 from "@user/components/UserItem/UserItemType2";
import { Body, BodyContent, Content, QuestTitle, QuestWrapper } from "./styled";

const Quest = () => {
  return (
    <QuestWrapper>
      <UserItemType2 />

      <Body>
        <FavoriteOutlined />

        <BodyContent>
          <QuestTitle></QuestTitle>
          <Content></Content>
        </BodyContent>
      </Body>
    </QuestWrapper>
  );
};

export default Quest;
