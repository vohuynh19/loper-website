import styled from "styled-components";

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
