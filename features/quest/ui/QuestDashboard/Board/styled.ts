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

export const QuestItemWrapper = styled.div``;
