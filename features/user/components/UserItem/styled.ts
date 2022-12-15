import styled from "styled-components";

// Type 1
export const Wrapper1 = styled.div`
  display: flex;
  padding: 16px 0;
`;
export const UserInfo1 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 12px;
`;
export const Name1 = styled.div`
  font-size: 17px;
  font-weight: 700;
  line-height: 24px;
`;
export const Assets1 = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.positive};
`;

// Type 2
export const Wrapper2 = styled.div`
  display: flex;
  align-items: center;
`;
export const UserInfo2 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 12px;
`;
export const Name2 = styled.div`
  font-size: 17px;
  font-weight: 700;
  line-height: 24px;
`;

export const Time2 = styled.div``;

export const Desc2 = styled.div`
  display: flex;
  align-items: center;

  ${Time2} {
    margin-left: 32px;
    color: ${({ theme }) => theme.colors.secondaryText};
  }
`;
