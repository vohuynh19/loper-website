import { Popover, Space, type MenuProps } from "antd";
import { FC, useContext } from "react";
import Link from "next/link";
import {
  DashboardOutlined,
  QuestionCircleOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import { ItemType } from "antd/es/menu/hooks/useItems";

import { PAGE_ROUTES } from "~/src/utils/constants/routes";
import { useLocale } from "~/src/hooks/useLocale";
import AppContext from "~/src/contexts/AppContext";

import { Icon } from "@components";

import {
  AppLogo,
  HeaderIcon,
  LocaleWrapper,
  StyledContent,
  StyledFooter,
  StyledHeader,
  StyledLayout,
  StyledMenu,
  StyledSider,
  LocaleItem,
  LoginButton,
} from "./styled";

type MenuItem = Required<MenuProps>["items"][number];

type Props = {
  children?: JSX.Element;
};

const Layout: FC<Props> = ({ children }) => {
  const { t } = useLocale("common");
  const { isDark, switchTheme, setLocaleSetting } = useContext(AppContext);

  return (
    <StyledLayout>
      <StyledSider width={240}>
        <AppLogo />
        <StyledMenu
          mode="inline"
          items={itemList(t)}
          defaultSelectedKeys={["board"]}
          defaultOpenKeys={["board"]}
        />
      </StyledSider>

      <StyledLayout>
        <StyledHeader>
          <Space align="center" size="large">
            <Popover content={localePopoverContent(t, setLocaleSetting)}>
              <HeaderIcon>
                <Icon name="translate" size="lg" />
              </HeaderIcon>
            </Popover>

            <HeaderIcon>
              <Icon
                onClick={() => switchTheme(!isDark)}
                name={isDark ? "lightMode" : "darkMode"}
                size="lg"
              />
            </HeaderIcon>

            <LoginButton> {t("login")} </LoginButton>
          </Space>
        </StyledHeader>
        <StyledContent>{children}</StyledContent>
        <StyledFooter />
      </StyledLayout>
    </StyledLayout>
  );
};

const localePopoverContent = (t: any, setLocaleSetting: any) => {
  return (
    <LocaleWrapper>
      <LocaleItem type="text" onClick={() => setLocaleSetting({ lang: "en" })}>
        {t("english")}
      </LocaleItem>
      <LocaleItem type="text" onClick={() => setLocaleSetting({ lang: "vi" })}>
        {t("vietnamese")}
      </LocaleItem>
    </LocaleWrapper>
  );
};

const itemList = (t: any): MenuItem[] => [
  getItem(
    "board",
    <Link href={PAGE_ROUTES.DASHBOARD}>{t("board")}</Link>,
    <DashboardOutlined />,
    [
      getItem("1", "Option 1"),
      getItem("2", "Option 2"),
      getItem("3", "Option 3"),
      getItem("4", "Option 4"),
    ]
  ),
  getItem(
    "createQuest",
    <Link href={PAGE_ROUTES.CREATE_QUEST}>{t("createQuest")}</Link>,
    <QuestionCircleOutlined />
  ),
  getItem(
    "profile",
    <Link href={PAGE_ROUTES.MY_PROFILE}>{t("profile")}</Link>,
    <ProfileOutlined />
  ),
];

const getItem = (
  key?: React.Key | null,
  label?: React.ReactNode,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem => {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
};

export default Layout;
