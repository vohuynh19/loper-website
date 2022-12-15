import { FC } from "react";
import styled from "styled-components";
import { TagOutlined } from "@mui/icons-material";

import { uuid } from "@src/utils/functions/uuid";

export type TagType = {
  label: string;
  value: string;
};

type Props = {
  tags: TagType[];
};

const Wrapper = styled.span`
  display: flex;
  align-items: center;

  .tags-title {
    font-weight: 500;
    margin-right: 16px;
  }

  .tags-list {
    a {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const TagList: FC<Props> = ({ tags }) => {
  const newTags = tags.map((tag) => {
    return `<a key="${uuid()}">${tag.label}</a>`;
  });

  return (
    <Wrapper>
      <TagOutlined />
      <span className="tags-title">Tagged: </span>
      <span
        className="tags-list"
        dangerouslySetInnerHTML={{ __html: newTags.join(" , ") }}
      />
    </Wrapper>
  );
};

export default TagList;
