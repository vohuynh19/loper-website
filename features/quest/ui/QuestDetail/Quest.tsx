import { FavoriteBorder } from "@mui/icons-material";
import Category from "@quest/components/Category";
import TagList from "@quest/components/TagList";
import UserItemType2 from "@user/components/UserItem/UserItemType2";

import {
  Body,
  BodyContent,
  Content,
  QuestHead,
  QuestTitle,
  QuestWrapper,
  FYI,
} from "./styled";

const Quest = () => {
  return (
    <QuestWrapper>
      <QuestHead>
        <UserItemType2 />
      </QuestHead>

      <Body>
        <FavoriteBorder />

        <BodyContent>
          <QuestTitle>One page template</QuestTitle>
          <Content>
            Hello, where can I find the one-page document template? Rerum
            cubilia, ultricies cillum, dignissim dignissimos, omnis magnis,
            commodi donec maecenas incididunt metus wisi I updated the theme,
            however I cant seem to find the onepage documentation template
          </Content>

          <FYI>
            <TagList
              tags={[
                { label: "Code", value: "1" },
                { label: "Nothing", value: "0" },
              ]}
            />
            <Category categoryName="Docly Theme Support" />
          </FYI>
        </BodyContent>
      </Body>
    </QuestWrapper>
  );
};

export default Quest;
