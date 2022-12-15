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

const QuestItem = () => {
  return (
    <QuestItemWrapper>
      <Avatar
        className="quest-avatar"
        src="https://raroin.creabik.com/assets/img/avatars/avatar_12.png"
      />
      <QuestItemContent>
        <Link href={PAGE_ROUTES.QUEST_DETAIL("0")}>
          <QuestItemTitle>
            How to change the copyrights on the footer
          </QuestItemTitle>
        </Link>

        <TagList>
          <Category categoryName="Docly Theme Support" />
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
