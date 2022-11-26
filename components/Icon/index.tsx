import { FC } from "react";
import styled from "styled-components";
import IconComponent, { IconName } from "~/public/assets/icons";

type IconProps = {
  name: IconName;
  color?: string;
  size?: "sm" | "md1" | "md2" | "md3" | "lg" | "xl";
  onClick?: () => void;
};

const Icon: FC<IconProps> = ({ color, name, onClick, ...rest }) => {
  const SVGComponent = styleIcon(IconComponent[name]);
  return <SVGComponent onClick={onClick} fill={color} {...rest} />;
};

const styleIcon = (Component: any) => styled(Component)<IconProps>`
  & {
    width: ${({ size }) => sizeMapping(size)} !important;
    height: ${({ size }) => sizeMapping(size)} !important;
  }
`;

const sizeMapping = (size: string) => {
  switch (size) {
    case "sm":
      return "8px";
    case "md1":
      return "12px";
    case "md2":
      return "16px";
    case "md3":
      return "20px";
    case "lg":
      return "24px";
    case "xl":
      return "32px";
    default:
      return "16px";
  }
};

export default Icon;
