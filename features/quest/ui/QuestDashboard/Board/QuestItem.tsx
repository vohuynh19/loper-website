import { CommentOutlined, StarOutline } from "@mui/icons-material";
import { Avatar, Tag } from "antd";

import {
  Action,
  ActionItem,
  QuestItemContent,
  QuestItemTitle,
  QuestItemWrapper,
  TagList,
  Time,
} from "./styled";

const QuestItem = () => {
  return (
    <QuestItemWrapper>
      <Avatar
        className="quest-avatar"
        src="https://raroin.creabik.com/assets/img/avatars/avatar_12.png"
      />

      <QuestItemContent>
        <QuestItemTitle>
          How to change the copyrights on the footer
        </QuestItemTitle>
        <TagList>
          <Tag>Docly Theme Support</Tag>
          <Tag>Docly Theme Support</Tag>
        </TagList>

        <Time>September 21, 2020 at 8:11 pm</Time>
      </QuestItemContent>

      <Action>
        <ActionItem>
          <CommentOutlined />5
        </ActionItem>

        <ActionItem>
          <StarOutline /> 6
        </ActionItem>
      </Action>
    </QuestItemWrapper>
  );
};

export default QuestItem;
