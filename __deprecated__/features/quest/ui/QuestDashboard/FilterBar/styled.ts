import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  height: 48px;
  border-radius: ${({ theme }) => theme.spaces.semi};

  justify-content: flex-end;
  padding: ${({ theme }) => theme.spaces.md};

  input {
    padding: 0 ${({ theme }) => theme.spaces.semi};
    margin-right: ${({ theme }) => theme.spaces.semi};
  }
`;
