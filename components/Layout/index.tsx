import { Popover, Row, Space, type MenuProps, Col } from "antd";
import { FC, useContext } from "react";
import Link from "next/link";
import Image from "next/image";

import { PAGE_ROUTES } from "@src/utils/constants/routes";
import { useLocale } from "@src/hooks/useLocale";
import AppContext from "@src/contexts/AppContext";

import useGroups from "@profile/hooks/useGroups";
import { GroupState } from "@profile/types/states";

import { Icon } from "@components";
import FavIcon from "~/public/favicon.ico";

import {
  AppLogo,
  HeaderIcon,
  LocaleWrapper,
  StyledContent,
  StyledFooter,
  StyledHeader,
  StyledLayout,
  StyledMenu,
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
  const { groups } = useGroups();

  return (
    <StyledLayout>
      <StyledHeader>
        <Link className="logo" href={PAGE_ROUTES.HOME}>
          <AppLogo />
        </Link>

        <StyledMenu
          mode="horizontal"
          items={itemList(t, groups)}
          defaultOpenKeys={["board"]}
          defaultSelectedKeys={["0"]}
        />

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

      <StyledFooter>
        <Row>
          {footerColumns(t).map((col) => {
            return (
              <Col key={col.title} span={24 / (footerColumns(t).length + 1)}>
                <h1>{col.title}</h1>

                {col.children.map((row) => (
                  <Link key={row.title} href={row.link}>
                    <p>{row.title}</p>
                  </Link>
                ))}
              </Col>
            );
          })}
          <Col
            span={24 / (footerColumns(t).length + 1)}
            style={{ textAlign: "center" }}
          >
            <Image width={100} height={100} alt="fav" src={FavIcon} />
            <Link href="/">
              <h1>Download now</h1>
            </Link>
          </Col>
        </Row>
      </StyledFooter>
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

const itemList = (t: any, groups: GroupState[]): MenuItem[] => [
  getItem("home", <Link href={PAGE_ROUTES.HOME}>{t("home")}</Link>),
  getItem(
    "questions",
    <Link href={PAGE_ROUTES.QUESTIONS}>{t("questions")}</Link>
  ),
  getItem(
    "createQuest",
    <Link href={PAGE_ROUTES.CREATE_QUEST}>{t("createQuest")}</Link>
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

const footerColumns = (t: any) => [
  {
    title: "About Us",
    children: [
      {
        title: "About",
        link: "/",
      },
      {
        title: "Careers",
        link: "/",
      },
      {
        title: "Business Contact",
        link: "/",
      },
    ],
  },
  {
    title: "Communities",
    children: [
      {
        title: "Mediums",
        link: "/",
      },
      {
        title: "Twitter",
        link: "/",
      },
      {
        title: "Facebook",
        link: "/",
      },
      {
        title: "Twitter",
        link: "/",
      },
    ],
  },
  {
    title: "Help",
    children: [
      {
        title: "Bug Report",
        link: "/",
      },
      {
        title: "FAQ",
        link: "/",
      },
      {
        title: "Discussions",
        link: "/",
      },
    ],
  },
];

export default Layout;
