import { theme } from "antd";
import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.hBg};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 64px);
  padding: 0 24px;
`;

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.bg};
  border-radius: 24px;
  width: 100%;
  padding: 24px;
  margin: 40px 0;
  max-width: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 500px;
  .formAnt {
    width: 100%;
    .ant-form-item-label {
      color: ${({ theme }) => theme.colors.secondaryText};
      font-weight: 500;
      font-size: 16px;
    }
    .ant-picker-suffix {
      font-size: 18px;
      color: ${({ theme }) => theme.colors.text};
    }
  }
  button {
    margin-top: 24px;
    width: 100%;
    height: 48px !important;
  }
`;

export const Title = styled.div`
  font-weight: 500;
  font-size: 28px;
  padding-bottom: 16px;
  text-align: center;
`;
