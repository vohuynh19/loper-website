import { Tag } from "antd";
import { FC } from "react";

type Props = {
  categoryName: string;
};

const Category: FC<Props> = ({ categoryName }) => {
  return <Tag>{categoryName}</Tag>;
};

export default Category;
