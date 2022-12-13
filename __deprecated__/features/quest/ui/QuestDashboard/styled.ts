import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const SideLeft = styled.div`
  flex: 1;
  padding: ${({ theme }) => `${theme.spaces.md} ${theme.spaces.lg}`};
`;
export const SideRight = styled.div`
  width: 320px;
`;
