import { Button } from "antd";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const LoginBox = styled.div`
  background-color: ${({ theme }) => theme.colors.lightPrimary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spaces.xl} 64px;
  border-radius: ${({ theme }) => theme.spaces.xl};
  margin-top: ${({ theme }) => theme.spaces.xxl};
`;
export const Title = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 40px;
  margin-bottom: ${({ theme }) => theme.spaces.xl};
`;
export const SignButton = styled(Button)`
  width: 100%;
  margin-top: ${({ theme }) => theme.spaces.lg};
`;
