import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.bg};
  height: 100%;
`;

export const Title = styled.div`
  font-size: ${({ theme }) => theme.fs.xxl};
`;

export const LeaderItemWrapper = styled.div`
  width: 100%;
  display: flex;
  margin: ${({ theme }) => theme.spaces.semi} 0;
  padding: ${({ theme }) => theme.spaces.semi};
  align-items: center;

  background-color: ${({ theme }) => theme.colors.hBg};
  border-radius: 16px;
`;
export const LeaderItemInfo = styled.div`
  flex: 1;
  padding: 0 ${({ theme }) => theme.spaces.semi};
`;
export const LeaderTitle = styled.div`
  font-size: ${({ theme }) => theme.fs.lg};
  font-weight: 500;
  line-height: 32px;
`;
export const LeaderEarned = styled.div`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.positive};
`;

export const LeaderRank = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.positive};
  color: ${({ theme }) => theme.colors.textContrast};
`;
