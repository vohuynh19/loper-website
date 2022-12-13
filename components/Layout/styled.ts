import { Button, Layout, Menu } from "antd";
import styled from "styled-components";
import VercelLogo from "~/public/vercel.svg";

const { Sider, Header, Footer, Content } = Layout;

export const StyledLayout = styled(Layout)`
  .ant-menu {
    border: none !important;
  }

  .css-dev-only-do-not-override-1i6yeeq {
    font-family: ${({ theme }) => theme.fontFamily};
  }
`;

export const StyledSider = styled(Sider)`
  & {
    background-color: ${({ theme }) => theme.colors.hBg} !important;
  }
`;
export const StyledHeader = styled(Header)`
  & {
    background-color: ${({ theme }) => theme.colors.bg} !important;
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    padding-inline: 32px !important;
  }

  .ant-space-item {
    display: flex;
    align-items: center;
  }
  .logo {
    display: flex;
    align-items: center;
  }
`;
export const StyledFooter = styled(Footer)`
  & {
    background-color: ${({ theme }) => theme.colors.bg} !important;
  }
`;
export const StyledContent = styled(Content)`
  font-family: ${({ theme }) => theme.fontFamily} !important;
  color: ${({ theme }) => theme.colors.text};
  & {
    background-color: ${({ theme }) => theme.colors.bg};
  }
`;

export const StyledMenu = styled(Menu)`
  & {
    flex: 1;
    background-color: ${({ theme }) => theme.colors.bg} !important;
    font-size: ${({ theme }) => theme.fs.lg};
    svg {
      font-size: ${({ theme }) => theme.fs.lg};
    }
    .ant-menu-item-selected {
    }
    .ant-menu-item {
      height: 40px;
      display: flex;
      align-items: center;
    }
  }
`;

export const AppLogo = styled(VercelLogo)`
  padding: ${({ theme }) => `${theme.spaces.lg} ${theme.spaces.xl}`};
  cursor: pointer;
  width: 200px;
`;

export const HeaderIcon = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 50%;
  padding: ${({ theme }) => theme.spaces.md};
  &:hover {
    background-color: ${({ theme }) => theme.colors.sBg};
  }
`;

export const LocaleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const LocaleItem = styled(Button)`
  font-size: ${({ theme }) => theme.fs.lg};
  text-align: start;
`;
export const LoginButton = styled(Button)`
  width: 120px;
`;
