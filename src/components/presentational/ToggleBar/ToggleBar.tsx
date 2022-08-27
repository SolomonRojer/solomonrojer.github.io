import React, { FC } from "react";
import { Typography, ToggleButton, ToggleButtonGroup } from "@mui/material";

type toggleProps = {
  type: string;
  handleType: (event: React.MouseEvent<HTMLElement>, newType: string) => void;
  components: componentItem[];
  className?: string;
};

type componentItem = {
  icon?: React.ReactNode;
  text: string;
};
const Toggle: FC<toggleProps> = ({
  type,
  handleType,
  components = [],
  className,
}) => {
  return (
    <ToggleButtonGroup
      value={type}
      exclusive
      onChange={handleType}
      color="primary"
      sx={{ boxShadow: 1 }}
      className={className}
    >
      {components.map((item, i) => (
        <ToggleButton value={item.text} key={i}>
          {item?.icon}
          <Typography variant="caption">{item.text}</Typography>
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default Toggle;
