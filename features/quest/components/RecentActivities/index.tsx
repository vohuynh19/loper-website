import { CommentOutlined } from "@mui/icons-material";
import { Avatar } from "antd";
import { FC } from "react";
import Link from "next/link";

import { uuid } from "@src/utils/functions/uuid";

import {
  ItemContent,
  ItemTime,
  ItemTitle,
  ItemWrapper,
  ListView,
  Title,
  Wrapper,
} from "./styled";
import { PostState, CommentState } from "../../types/states";

type Props = {
  activities: PostState[] | CommentState[];
  title: string;
};

const RecentActivities: FC<Props> = ({ activities, title }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>

      <ListView>
        {activities.map((activity) => (
          <ActivityItem key={uuid()} />
        ))}
      </ListView>
    </Wrapper>
  );
};

const ActivityItem = () => {
  return (
    <ItemWrapper>
      <CommentOutlined />

      <ItemContent>
        <ItemTitle>
          Test by
          <Avatar
            src="https://raroin.creabik.com/assets/img/avatars/avatar_12.png"
            size={"small"}
          />
          <Link href="">Vo Huynh</Link>
        </ItemTitle>
        <ItemTime>2 days, 14 hours ago</ItemTime>
      </ItemContent>
    </ItemWrapper>
  );
};

export default RecentActivities;
