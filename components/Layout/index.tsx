import { Space } from "antd";
import { ItemType } from "antd/es/menu/hooks/useItems";
import { FC } from "react";
import {
  DashboardOutlined,
  QuestionCircleOutlined,
  ProfileOutlined,
} from "@ant-design/icons";

import { Icon, Button } from "@components";

import {
  AppLogo,
  StyledContent,
  StyledFooter,
  StyledHeader,
  StyledLayout,
  StyledMenu,
  StyledSider,
} from "./styled";
import Link from "next/link";
import { PAGE_ROUTES } from "~/src/utils/constants/routes";

type Props = {
  children?: JSX.Element;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <StyledLayout>
      <StyledSider>
        <AppLogo />
        <StyledMenu items={itemList} />
      </StyledSider>

      <StyledLayout>
        <StyledHeader>
          <Space align="center" size="large">
            <Icon name="translate" size="lg" />
            <Icon name="lightMode" size="lg" />
            <Button> Login </Button>
          </Space>
        </StyledHeader>
        <StyledContent>{children}</StyledContent>
        <StyledFooter />
      </StyledLayout>
    </StyledLayout>
  );
};

const itemList: ItemType[] = [
  {
    key: "Board",
    label: <Link href={PAGE_ROUTES.DASHBOARD}>Board</Link>,
    icon: <DashboardOutlined />,
  },
  {
    key: "Create Quest",
    label: <Link href={PAGE_ROUTES.CREATE_QUEST}>Create Quest</Link>,
    icon: <QuestionCircleOutlined />,
  },
  {
    key: "Profile",
    label: <Link href={PAGE_ROUTES.MY_PROFILE}>Profile</Link>,
    icon: <ProfileOutlined />,
  },
];

export default Layout;
