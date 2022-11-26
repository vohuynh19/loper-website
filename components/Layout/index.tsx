import { Space } from "antd";
import { ItemType } from "antd/es/menu/hooks/useItems";
import { FC } from "react";
import { Icon, Button } from "@components";
import {
  DashboardOutlined,
  QuestionCircleOutlined,
  ProfileOutlined,
} from "@ant-design/icons";

import {
  AppLogo,
  StyledContent,
  StyledFooter,
  StyledHeader,
  StyledLayout,
  StyledMenu,
  StyledSider,
} from "./styled";

type Props = {
  children?: JSX.Element;
};

const itemList: ItemType[] = [
  { key: "Board", label: "Board", icon: <DashboardOutlined /> },
  {
    key: "Create Quest",
    label: "Create Quest",
    icon: <QuestionCircleOutlined />,
  },
  { key: "Profile", label: "Profile", icon: <ProfileOutlined /> },
];

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

export default Layout;
