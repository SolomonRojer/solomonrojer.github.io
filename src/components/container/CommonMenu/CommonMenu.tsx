import React, { useState, FC } from "react";
import { useNavigate } from "react-router-dom";
import { Hidden } from "@mui/material";
import { useAppBarStyles } from "./CommonMenuStyle";
import AddPostAndProductMD from "../User/AddItems/LargeView/AddItems";
import AddPostAndProductXS from "../User/AddItems/SmallView/AddItems";
import { FullBar, SmallBar } from "./AppBar";
import BottomNavigationBar from "./BottomBar";

const NavBar = () => {
  const classes = useAppBarStyles();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const navigateScreen = (screen: string) => {
    navigate(screen);
  };
  return (
    <>
      <Hidden mdDown>
        <FullBar
          width="80%"
          margin="10%"
          padding="0.5%"
          navigate={navigateScreen}
          setOpen={setOpen}
        />
        {open && <AddPostAndProductMD open={open} setOpen={setOpen} />}
      </Hidden>
      <Hidden mdUp>
        <SmallBar navigate={navigateScreen} />
        <BottomNavigationBar navigate={navigateScreen} />
      </Hidden>
    </>
  );
};

export default NavBar;
