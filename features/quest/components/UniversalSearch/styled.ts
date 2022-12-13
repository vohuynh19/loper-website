import { Button, Input } from "antd";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 600px;
  width: 100%;
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.bg};
  border-radius: 24px;
  height: 52px;
  padding: 0 4px;
`;

export const SearchButton = styled(Button)`
  border-radius: 24px;
  padding: 0 24px;
  height: 36px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.bg};
  border: none;
`;

export const FloatCloseButton = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }

  margin-right: 8px;
`;

export const StyledInput = styled(Input)`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.colors.secondaryText};
  flex: 1;
  &:focus {
    border: none !important;
    outline: none !important;
  }

  &:hover {
    border: none !important;
    outline: none !important;
  }
`;
