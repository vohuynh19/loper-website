import { FC } from "react";
import {
  CategoryDesc,
  CategoryTitle,
  CategoryWrapper,
  Content,
  Icon,
} from "./styled";

type Props = {
  iconUrl: string;
  title: string;
  numberOfPost: number;
};

const QuestCategoryItem: FC<Props> = ({ numberOfPost, iconUrl, title }) => {
  return (
    <CategoryWrapper>
      <Icon src={iconUrl} />
      <Content>
        <CategoryTitle>{title}</CategoryTitle>
        <CategoryDesc>{numberOfPost} Post</CategoryDesc>
      </Content>
    </CategoryWrapper>
  );
};

export default QuestCategoryItem;
