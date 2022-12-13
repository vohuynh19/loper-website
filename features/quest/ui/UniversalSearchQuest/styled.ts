import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 600px;
  background-image: ${({ theme }) =>
    `linear-gradient(${theme.colors.primary}, ${theme.colors.hBg})`};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 56px;
  color: ${({ theme }) => theme.colors.textContrast};

  max-width: 800px;
  text-align: center;
`;

export const Desc = styled.div`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.textContrast};
  margin-bottom: 32px;
`;
