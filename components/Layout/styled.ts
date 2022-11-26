import { Layout, Menu } from "antd";
import styled from "styled-components";
import VercelLogo from "~/public/vercel.svg";

const { Sider, Header, Footer, Content } = Layout;

export const StyledLayout = styled(Layout)`
  .ant-menu {
    border: none !important;
  }
`;

export const StyledSider = styled(Sider)`
  & {
    background-color: ${({ theme }) => theme.colors.bg} !important;
  }
`;
export const StyledHeader = styled(Header)`
  & {
    background-color: ${({ theme }) => theme.colors.bg} !important;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: flex-end;
    align-items: center;
  }

  .ant-space-item {
    display: flex;
    align-items: center;
  }
`;
export const StyledFooter = styled(Footer)`
  & {
    background-color: ${({ theme }) => theme.colors.bg};
  }
`;
export const StyledContent = styled(Content)``;

export const StyledMenu = styled(Menu)`
  & {
    position: sticky !important;
    top: 0;
  }
`;

export const AppLogo = styled(VercelLogo)`
  width: 100%;
  padding: ${({ theme }) => `${theme.spaces.lg} ${theme.spaces.xl}`};
  cursor: pointer;
`;
