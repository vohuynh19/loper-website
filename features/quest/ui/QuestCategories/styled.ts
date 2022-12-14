import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.hBg};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
`;

export const Wrapper = styled.div`
  max-width: 1600px;
  width: 100%;
`;

export const Title = styled.div`
  font-weight: 500;
  font-size: 34px;
  margin-bottom: 16px;
`;

export const CategoryWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  align-items: center;
  margin: 16px;
  padding: 16px 32px;
  border-radius: 16px;
  height: 100px;
`;
export const Content = styled.div``;
export const Icon = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 12px;
`;
export const CategoryTitle = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
`;
export const CategoryDesc = styled.div`
  color: ${({ theme }) => theme.colors.secondaryText};
`;
