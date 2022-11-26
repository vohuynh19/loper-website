import { Button } from "antd";
import styled from "styled-components";

export const Wrapper = styled.div`
  padding: ${({ theme }) => theme.spaces.lg};
  margin: ${({ theme }) => theme.spaces.md};
  background-color: ${({ theme }) => theme.colors.hBg};
  border-radius: ${({ theme }) => theme.spaces.lg};
  margin-top: ${({ theme }) => theme.spaces.lg};
`;
export const HeadWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Title = styled.div``;
export const Desc = styled.div``;

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${({ theme }) => theme.spaces.md};
`;
export const UserTitle = styled.div`
  width: 96px;
`;
export const StyledButton = styled(Button)`
  width: 100%;
  margin-top: ${({ theme }) => theme.spaces.xl};
`;
