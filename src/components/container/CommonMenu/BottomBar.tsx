import React, { FC, useEffect } from "react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Home, CollectionsRounded, AddBoxOutlined } from "@mui/icons-material";
import type { BottomBarProps } from "./CommonMenuPropsType";
import { useAppSelector } from "../../../store/hooks";
import { selectData } from "../../../store/Slice/NavigationSlice";

const BottomNavigationBar: FC<BottomBarProps> = ({ navigate }) => {
  const headerValue = useAppSelector(selectData);

  const [value, setValue] = React.useState("");

  useEffect(() => {
    if (headerValue.value === 1) setValue("home");
    else if (headerValue.value === 2) setValue("post");
    else setValue("");
  }, [headerValue]);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue((prev) => (newValue !== "additem" ? newValue : prev));
    if (newValue === "post") {
      navigate("/post");
    } else if (newValue === "home") {
      navigate("/");
    } else if (newValue === "additem") {
      navigate("/add");
    }
  };

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 2 }}
      elevation={2}
    >
      <BottomNavigation
        sx={{ width: "100%" }}
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction label="Home" value="home" icon={<Home />} />
        <BottomNavigationAction
          label="Search"
          value="search"
          icon={<SearchIcon />}
        />

        <BottomNavigationAction
          label="Post"
          value="post"
          icon={<CollectionsRounded />}
        />
        <BottomNavigationAction
          value="additem"
          icon={<AddBoxOutlined fontSize="large" />}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNavigationBar;
