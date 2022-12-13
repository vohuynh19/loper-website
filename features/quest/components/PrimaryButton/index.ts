import { Button } from "antd";
import styled from "styled-components";

const PrimaryButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary};
`;

export default PrimaryButton;
