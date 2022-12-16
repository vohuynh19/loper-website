import {
  Coffee,
  CoffeeMakerOutlined,
  EngineeringOutlined,
  WorkOutlineOutlined,
} from "@mui/icons-material";
import { FC } from "react";
import styled from "styled-components";

const Wrapper = styled.span`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.secondaryText};
  svg {
    margin-right: 8px;
  }
`;

export enum RoleType {
  OWNER = "OWNER",
  SOLVER = "SOLVER",
  DONATOR = "DONATOR",
}

type Props = {
  role?: RoleType;
};
const Role: FC<Props> = ({ role }) => {
  const icon = () => {
    switch (role) {
      case RoleType.OWNER:
        return <Coffee />;
      case RoleType.SOLVER:
        return <EngineeringOutlined />;
      case RoleType.DONATOR:
        return <CoffeeMakerOutlined />;
      default:
        return <EngineeringOutlined />;
    }
  };

  const text = () => {
    switch (role) {
      case RoleType.OWNER:
        return "Owner";
      case RoleType.SOLVER:
        return "Solver";
      case RoleType.DONATOR:
        return "Donator";
      default:
        return "Anonymous";
    }
  };

  return (
    <Wrapper>
      {icon()} {text()}
    </Wrapper>
  );
};

export default Role;
