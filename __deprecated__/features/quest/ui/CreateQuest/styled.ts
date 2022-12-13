import { Form } from "antd";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 500px;
`;

export const Content = styled.div`
  width: 600px;
`;

export const StyledForm = styled(Form)`
  background-color: ${({ theme }) => theme.colors.hBg};
  padding: ${({ theme }) => theme.spaces.xxl};
  border-radius: ${({ theme }) => theme.spaces.xl};
`;
