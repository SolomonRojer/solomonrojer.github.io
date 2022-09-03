import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Hidden } from "@mui/material";
import AddPostAndProductMD from "../User/AddItems/LargeView/AddItems";
import { FullBar, SmallBar } from "./AppBar";
import BottomNavigationBar from "./BottomBar";

const NavBar = () => {
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
