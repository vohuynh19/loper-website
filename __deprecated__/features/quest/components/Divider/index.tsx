import styled from "styled-components";

type Props = {
  thickness: number;
  color?: string;
  space: number;
};

const Divider = styled.div<Props>`
  height: ${({ thickness }) => `${thickness}px`};
  width: 100%;
  margin: ${({ space }) => `${space}px`} 0;
  background-color: ${({ theme, color }) =>
    color ? color : theme.colors.lightPrimary};
  box-sizing: border-box;
`;

export default Divider;
