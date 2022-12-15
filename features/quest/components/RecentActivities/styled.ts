import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.bg};
  padding: 8px 16px;
  margin-bottom: 16px;
  border-radius: 8px;
`;
export const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 16px;
  margin-top: 8px;
`;

export const ItemWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: 8px 0;
  align-items: center;
  svg {
    margin-right: 16px;
  }
`;

export const ListView = styled.div`
  ${ItemWrapper} {
    :last-child {
      border-bottom: none;
    }
  }
`;

export const ItemContent = styled.div``;
export const ItemTitle = styled.div`
  font-size: 16px;
  line-height: 24px;

  .ant-avatar {
    margin: 0 8px;
  }
`;
export const ItemTime = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.secondaryText};
`;
