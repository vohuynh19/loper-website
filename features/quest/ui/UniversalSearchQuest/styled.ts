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
  padding: 0 24px;
`;

export const Content = styled.div`
  z-index: 100;
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

export const DecorateImg = styled.img`
  position: absolute;
  width: 24%;
  left: 44px;
  min-width: 300px;
`;

export const DecorateImg1 = styled.img`
  position: absolute;
  width: 12%;
  right: 24%;
  top: 44px;
  min-width: 200px;
`;

export const DecorateImg2 = styled.img`
  position: absolute;
  width: 18%;
  right: 44px;
  bottom: 44px;
  min-width: 200px;
`;
