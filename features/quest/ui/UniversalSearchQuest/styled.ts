import styled from "styled-components";

export const Wrapper = styled.div`
  background-image: ${({ theme }) =>
    `linear-gradient(${theme.colors.primary}, ${theme.colors.hBg})`};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 64px);

  position: relative;
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

export const DecorateImg = styled.img`
  position: absolute;
  width: 400px;
  left: 44px;
`;

export const DecorateImg1 = styled.img`
  position: absolute;
  width: 200px;
  right: 400px;
  top: 44px;
`;

export const DecorateImg2 = styled.img`
  position: absolute;
  width: 300px;
  right: 200px;
  bottom: 44px;
`;
