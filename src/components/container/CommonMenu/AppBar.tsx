import { FC, useEffect, useState } from "react";
import {
  IconButton,
  AppBar,
  useScrollTrigger,
  Toolbar,
  Typography,
  ButtonBase,
  Fab,
  Divider,
  Box,
} from "@mui/material";
import { useAppBarStyles } from "./CommonMenuStyle";
import {
  Home,
  AddRounded,
  Star,
  ArrowBackRounded,
  Pets,
  CollectionsRounded,
  StarOutline,
} from "@mui/icons-material";
import type { FullBarProps, SmallBarProps } from "./CommonMenuPropsType";
import ProfileMenu from "./UserProfile";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { selectData, setState } from "../../../store/Slice/NavigationSlice";
import { SearchBox } from "../../presentational/SearchBox/SearchBox";
import { useNavigate } from "react-router";

export const FullBar: FC<FullBarProps> = ({
  width,
  margin,
  padding,
  navigate,
  setOpen,
}) => {
  const classes = useAppBarStyles();
  const dispatch = useAppDispatch();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window : undefined,
  });

  const viewPost = () => {
    navigate("/post");
  };

  const viewSale = () => {
    navigate("/");
  };

  return (
    <AppBar
      color="secondary"
      className={trigger ? classes.appbarTrigger : undefined}
      elevation={trigger ? 24 : 0}
      style={{
        width: width,
        marginInline: margin,
        paddingBlock: padding,
        borderWidth: 1,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
      }}
    >
      <Toolbar variant="dense">
        <ButtonBase
          onClick={() => navigate("/")}
          disableRipple
          sx={{
            width: "10rem",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Pets color="primary" />
          <Typography className={classes.NameMenu} color="primary">
            PetTech
          </Typography>
        </ButtonBase>
        <SearchBox />
        <IconButton
          size="large"
          aria-label="show 4 new mails"
          color="inherit"
          onClick={viewSale}
        >
          <Home />
        </IconButton>
        <IconButton size="large" color="inherit" onClick={viewPost}>
          <CollectionsRounded />
        </IconButton>
        <ProfileMenu navigate={navigate} />
        <Fab
          sx={{ marginInline: "2%", paddingInline: "2%", borderRadius: 25 }}
          onClick={() => setOpen(true)}
          color="primary"
          size="small"
        >
          <AddRounded />
        </Fab>
      </Toolbar>
    </AppBar>
  );
};

export const SmallBar: FC<SmallBarProps> = ({ navigate }) => {
  const classes = useAppBarStyles();
  const header = useAppSelector(selectData);
  const dispatch = useAppDispatch();
  const goBackNavigate = useNavigate();

  const [type, setType] = useState("all");

  useEffect(() => {
    if (header.value === 0) dispatch(setState({ headerTitle: "User Name" }));
  }, [header.value]);

  const goBack = () => {
    goBackNavigate(-1);
  };

  const handleType = () => {
    setType((prevState) => (prevState === "all" ? "pettech" : "all"));
  };

  const goHome = () => {
    if (header.headerTitle === "PetTech") navigate("/");
  };

  const onClickProfile = (screen: string) => {
    navigate(screen);
  };

  return (
    <AppBar color="secondary">
      <Toolbar
        variant="dense"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <ButtonBase
          onClick={goHome}
          disableRipple
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <Box className={classes.logo}>
            {header.value !== 0 && header.value !== 1 && (
              <IconButton onClick={goBack}>
                <ArrowBackRounded fontSize="small" />
              </IconButton>
            )}
            {(header.headerTitle === "PetTech" ||
              header.headerTitle === "") && (
              <Pets color="primary" sx={{ marginInline: "7%" }} />
            )}
            <Typography
              className={classes.NameMenu}
              sx={{ fontWeight: "bold" }}
              color="primary"
            >
              {header.headerTitle}
              {(header.value === 1 || header.value === 2) && (
                <IconButton onClick={handleType}>
                  {type === "all" ? (
                    <StarOutline
                      color="warning"
                      sx={{ fontSize: 15 }}
                      style={{ marginLeft: "10%" }}
                    />
                  ) : (
                    <Star
                      color="warning"
                      sx={{ fontSize: 15 }}
                      style={{ marginLeft: "10%" }}
                    />
                  )}
                </IconButton>
              )}
            </Typography>
          </Box>
        </ButtonBase>
        <ProfileMenu navigate={(screen: string) => onClickProfile(screen)} />
      </Toolbar>
      <Divider light />
    </AppBar>
  );
};
