import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.hBg};
  padding: 40px 24px;
`;

export const UserListWrapper = styled.div``;

export const Wrapper = styled.div`
  max-width: 1600px;
  width: 100%;
  min-height: 500px;
  display: flex;

  ${UserListWrapper} {
    :first-child {
      padding-right: 24px;
    }

    :last-child {
      padding-left: 24px;
    }
  }
`;

export const Title = styled.div`
  font-size: 34px;
  margin-bottom: 24px;
  font-weight: 500;
`;

export const BodyUserList = styled.div`
  background-color: ${({ theme }) => theme.colors.bg};
  padding: 8px 16px;
  border-radius: 16px;
`;
