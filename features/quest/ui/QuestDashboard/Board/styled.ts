import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 16px 0;
`;

export const ToolbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.sBg};
  padding: 0 16px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const LeftToolbar = styled.div`
  display: flex;
  align-items: center;
`;
export const StatusItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  padding: 16px 0;
  svg {
    margin-right: 6px;
    font-size: 18px;
  }
  font-weight: 500;
  color: ${({ theme }) => theme.colors.secondaryText};
`;
export const RightToolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  span {
    display: flex;
    align-items: center;
    margin-left: 24px;
    cursor: pointer;
  }
`;
export const StatusText = styled.div``;
export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  label {
    padding: 4px 0;
  }
  .ant-radio-group {
    display: flex;
    flex-direction: column;
    label {
      padding: 4px 0;
    }
  }
`;

export const QuestItemWrapper = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.bg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: 24px;
  align-items: center;
  width: 100%;

  .quest-avatar {
    width: 44px;
    height: 44px;
    margin-right: 16px;
  }

  :hover {
    background-color: ${({ theme }) => theme.colors.sBg};
  }
`;

export const QuestItemContent = styled.div`
  flex: 1;
`;
export const QuestItemTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
`;
export const TagList = styled.div`
  margin: 8px 0;
`;
export const Time = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.secondaryText};
`;

export const Action = styled.div`
  display: flex;
`;
export const ActionItem = styled.div`
  display: flex;
  align-items: center;

  margin-left: 24px;
  svg {
    margin-right: 8px;
  }
`;
