import { Button, ButtonProps } from "antd";
import { FC } from "react";

const IconButton: FC<ButtonProps> = (props) => {
  return <Button icon={props.icon} shape="circle" {...props} />;
};

export default IconButton;
