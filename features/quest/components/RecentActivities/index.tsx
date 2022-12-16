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
import moment from "moment";

type Props = {
  activities: any[];
  title: string;
};

const RecentActivities: FC<Props> = ({ activities, title }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>

      <ListView>
        {activities.map((activity) => (
          <ActivityItem
            title={activity.title}
            key={uuid()}
            createdAt={activity.createdAt}
          />
        ))}
      </ListView>
    </Wrapper>
  );
};

const ActivityItem = ({
  title = "Title here",
  time = "2 days, 14 hours ago",
  createdAt = 0,
}) => {
  const dateString = () => {
    var now = moment(new Date());
    var end = moment(createdAt);
    var duration = moment.duration(now.diff(end));
    var days = Math.round(duration.asDays());
    var hours = Math.round(duration.asHours());
    var minutes = Math.round(duration.asMinutes());

    if (days > 0) {
      return `${days} days before`;
    } else if (hours > 0) {
      return `${hours} hours ago`;
    } else if (minutes > 0) {
      return `${minutes} minutes ago`;
    } else {
      return "Just now";
    }
  };

  return (
    <ItemWrapper>
      <CommentOutlined />

      <ItemContent>
        <ItemTitle>
          {title} by
          <Avatar
            src="https://raroin.creabik.com/assets/img/avatars/avatar_12.png"
            size={"small"}
          />
          <Link href="">******</Link>
        </ItemTitle>
        <ItemTime>{dateString()}</ItemTime>
      </ItemContent>
    </ItemWrapper>
  );
};

export default RecentActivities;
