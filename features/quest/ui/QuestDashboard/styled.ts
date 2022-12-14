import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.hBg};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 64px);
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1600px;
  padding: 40px 24px;
`;

export const LeftCol = styled.div`
  width: 64%;
`;
export const RightCol = styled.div`
  width: 36%;
  padding-left: 32px;
`;
