import { Button } from "antd";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.bg};
  border-radius: 16px;
  align-items: center;
  padding: 16px 24px;
`;
export const Icon = styled.img`
  margin-right: 24px;
`;
export const Content = styled.div`
  flex: 1;
`;
export const Title = styled.div`
  font-size: 22px;
  font-weight: 500;
`;
export const Desc = styled.div`
  font-size: 16px;
`;

export const AskButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textContrast};
  font-size: 18px;
  height: 52px;
  width: 180px;
  font-weight: 500;
`;
