import styled from "styled-components";
import { Button } from "~/components";

export const Wrapper = styled.div`
  margin: 0 80px;
  position: relative;
  background-color: ${({ theme }) => theme.colors.hBg};
  min-height: 600px;
  padding: ${({ theme }) => theme.spaces.xl};
  border-radius: ${({ theme }) => theme.spaces.lg};
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
`;

export const HeadInfo = styled.div`
  flex: 1;
`;
export const QuestTitle = styled.div`
  font-size: 24px;
  line-height: 27px;
`;
export const GroupName = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.secondaryText};
  line-height: 27px;
`;

export const QuestContribute = styled.div`
  display: flex;
`;
export const ContributeArea = styled.div`
  flex: 1;
`;
export const UserWrapper = styled.div`
  display: flex;
  margin: 8px 0;
  align-items: center;
  font-weight: 600;
  font-size: 16px;
`;
export const UserTitle = styled.div`
  width: 100px;
`;
export const PoolArea = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;
export const CountdownDate = styled.div`
  font-size: 18px;
  line-height: 27px;
  color: ${({ theme }) => theme.colors.secondaryText};
`;
export const TotalAsset = styled.div`
  font-size: 20px;
  line-height: 27px;
  color: ${({ theme }) => theme.colors.secondaryText};
`;

export const QuestDesc = styled.div`
  color: ${({ theme }) => theme.colors.secondaryText};
  line-height: 24px;
`;

type CoverProps = {
  url: string;
};
export const Cover = styled.div<CoverProps>`
  background: ${({ url }) => `url(${url}) no-repeat center`};
  width: 100%;
  height: 320px;
`;

export const QuestAttach = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
type AttachmentItemProps = {
  previewUri: string;
};
export const AttachmentItem = styled.div<AttachmentItemProps>`
  background: ${({ previewUri }) => `url(${previewUri}) no-repeat center`};
  width: 120px;
  height: 120px;
  background-color: ${({ theme }) => theme.colors.lightPrimary};
  opacity: 0.6;
  border-radius: ${({ theme }) => theme.spaces.lg};
  margin-right: ${({ theme }) => theme.spaces.lg};
  margin-bottom: ${({ theme }) => theme.spaces.lg};
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

export const QuestJoin = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const QuestBox = styled.div`
  width: calc(calc(50%) - calc(24px));
  height: 160px;
  outline: 1px solid ${({ theme }) => theme.colors.lightPrimary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const QuestBoxTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.secondaryText};
`;

export const QuestBoxButton = styled(Button)`
  margin-top: 24px;
  height: 40px;
  width: 160px;
  font-size: 16px;
  border-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
`;

export const AuthorArea = styled.div`
  display: flex;
  align-items: center;
`;
export const AuthorShort = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 120px;
  border-right: 1px solid ${({ theme }) => theme.colors.lightPrimary};
`;
export const AuthorAvatar = styled.div`
  width: 120px;
  height: 120px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  margin-right: 24px;
`;
export const AuthorDesc = styled.div`
  flex: 1;
  display: flex;
  height: 100%;
  font-style: italic;
`;

export const AuthorName = styled.div`
  line-height: 32px;
  font-size: 24px;
`;
export const AuthorBio = styled.div`
  color: ${({ theme }) => theme.colors.secondaryText};
`;

export const AuthorContact = styled.div`
  flex: 2;
  padding: 0 ${({ theme }) => theme.spaces.xl};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const ContactWrapper = styled.div`
  display: flex;
  height: 28px;
  align-items: center;
`;
export const ContactTitle = styled.div`
  width: 64px;
  font-weight: 600;
`;
export const ContactDesc = styled.div`
  font-style: italic;
`;

export const QuestVote = styled.div`
  position: absolute;
  top: 16px;
  left: -80px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 80px;
  font-size: 40px;
  color: ${({ theme }) => theme.colors.positive};
`;

export const VoteBox = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  margin: ${({ theme }) => theme.spaces.md};

  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.secondaryText};
  svg {
    color: ${({ theme }) => theme.colors.secondaryText};
  }

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.primary};
    svg {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const QuestSectionTitle = styled.h1``;
