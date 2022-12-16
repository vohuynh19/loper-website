import { Avatar } from "antd";
import Link from "next/link";
import { CommentOutlined, StarOutline } from "@mui/icons-material";

import { PAGE_ROUTES } from "@src/utils/constants/routes";

import Category from "../../../components/Category";

import {
  Action,
  ActionItem,
  QuestItemContent,
  QuestItemTitle,
  QuestItemWrapper,
  TagList,
  Time,
} from "./styled";

const QuestItem = ({
  title = "How to change the copyrights on the footer",
  time = "September 21, 2020 at 8:11 pm",
  commentNum = 5,
  likeNum = 7,
  category = "Docly Theme Support",
  id = "0",
}) => {
  return (
    <QuestItemWrapper>
      <Avatar
        className="quest-avatar"
        src="https://raroin.creabik.com/assets/img/avatars/avatar_12.png"
      />
      <QuestItemContent>
        <Link href={PAGE_ROUTES.QUEST_DETAIL(id)}>
          <QuestItemTitle>{title}</QuestItemTitle>
        </Link>

        <TagList>
          <Category categoryName={category} />
        </TagList>

        <Time>{time}</Time>
      </QuestItemContent>

      <Action>
        <ActionItem>
          <CommentOutlined /> {commentNum}
        </ActionItem>

        <ActionItem>
          <StarOutline /> {likeNum}
        </ActionItem>
      </Action>
    </QuestItemWrapper>
  );
};

export default QuestItem;
