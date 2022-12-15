import { PAGE_ROUTES } from "@src/utils/constants/routes";
import Link from "next/link";
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
    <Link href={PAGE_ROUTES.QUESTIONS}>
      <CategoryWrapper>
        <Icon src={iconUrl} />
        <Content>
          <CategoryTitle>{title}</CategoryTitle>
          <CategoryDesc>{numberOfPost} Post</CategoryDesc>
        </Content>
      </CategoryWrapper>
    </Link>
  );
};

export default QuestCategoryItem;
