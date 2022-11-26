import { Popover, Space } from "antd";
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

type Props = {
  children?: JSX.Element;
};

const Layout: FC<Props> = ({ children }) => {
  const { t } = useLocale("common");
  const { isDark, switchTheme, setLocaleSetting } = useContext(AppContext);

  console.log(isDark);

  return (
    <StyledLayout>
      <StyledSider>
        <AppLogo />
        <StyledMenu items={itemList(t)} />
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

const itemList = (t: any): ItemType[] => [
  {
    key: "board",
    label: <Link href={PAGE_ROUTES.DASHBOARD}>{t("board")}</Link>,
    icon: <DashboardOutlined />,
  },
  {
    key: "createQuest",
    label: <Link href={PAGE_ROUTES.CREATE_QUEST}>{t("createQuest")}</Link>,
    icon: <QuestionCircleOutlined />,
  },
  {
    key: "profile",
    label: <Link href={PAGE_ROUTES.MY_PROFILE}>{t("profile")}</Link>,
    icon: <ProfileOutlined />,
  },
];

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

export default Layout;
