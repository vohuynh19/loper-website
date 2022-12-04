import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightPrimary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spaces.xl} 0;
  border-radius: ${({ theme }) => theme.spaces.xl};
`;
export const Title = styled.div`
  font-size: 24px;
  margin-bottom: ${({ theme }) => theme.spaces.xl};
`;

export const Desc = styled.div`
  font-size: 16px;
  line-height: 27px;
  margin-bottom: ${({ theme }) => theme.spaces.xl};
`;
