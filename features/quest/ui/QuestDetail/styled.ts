import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 80px;
  position: relative;
  background-color: ${({ theme }) => theme.colors.hBg};
  min-height: 600px;
  padding: ${({ theme }) => theme.spaces.xl};
  border-radius: ${({ theme }) => theme.spaces.lg};
`;
