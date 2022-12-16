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
export const LoveArea = styled.div`
  & > svg {
    height: 44px;
    width: 44px;
    margin-top: 16px;
    cursor: pointer;
    :hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  text-align: center;
  font-size: 24px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const LeftCol = styled.div`
  width: 64%;
`;
export const RightCol = styled.div`
  width: 36%;
  padding-left: 32px;
`;

export const QuestHead = styled.div`
  padding: 16px 0 32px 0;
`;

export const QuestHeadReply = styled.div`
  padding: 16px 0;
`;

export const Title = styled.div`
  font-size: 28px;
  padding-bottom: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  margin-bottom: 12px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Replies = styled.div`
  background-color: ${({ theme }) => theme.colors.bg};
  padding: 24px;
  border-radius: 16px;

  margin-top: 40px;
`;
export const ReplyWrapper = styled.div`
  padding: 16px 0;
`;
export const QuestTitle = styled.div`
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 16px;
`;
export const Content = styled.div`
  font-size: 16px;
  line-height: 24px;
`;

export const QuestWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.bg};
  padding: 24px;
  border-radius: 16px;
`;
export const Body = styled.div`
  display: flex;
`;
export const BodyContent = styled.div`
  padding-left: 12px;
`;
export const FYI = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 24px 0 16px 0;
  padding: 16px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const ReplyContent = styled.div`
  width: 100%;
  margin-left: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: 0 0 32px 0;
  line-height: 24px;
`;
