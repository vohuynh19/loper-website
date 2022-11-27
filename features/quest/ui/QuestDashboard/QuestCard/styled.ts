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
export const Title = styled.div`
  font-size: ${({ theme }) => theme.fs.xl};
  font-weight: 500;
  height: 40px;
  display: flex;
  align-items: center;
`;
export const Desc = styled.div`
  font-size: ${({ theme }) => theme.fs.sm};
  color: ${({ theme }) => theme.colors.secondaryText};
  line-height: 17px;
`;

export const UserWrapper = styled.div`
  font-weight: 500;
  display: flex;
  align-items: center;
  margin-top: ${({ theme }) => theme.spaces.lg};
`;
export const UserTitle = styled.div`
  width: 96px;
`;
export const StyledButton = styled(Button)`
  font-weight: 500;
  width: 100%;
  margin-top: ${({ theme }) => theme.spaces.xl};
`;
