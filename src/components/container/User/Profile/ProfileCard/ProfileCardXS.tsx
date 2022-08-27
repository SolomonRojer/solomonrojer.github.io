import React, { FC } from "react";
import { Box, Typography, Avatar, Button, Grid } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { LocationOn } from "@mui/icons-material";
import { images } from "../../../../../constants/images";
import { stringToColor } from "../../../../../utils/common/StringToColor";
import { useNavigate } from "react-router-dom";

type IconWithTextProps = {
  icon: JSX.Element;
  text: string;
};
const IconWithText: FC<IconWithTextProps> = ({ icon, text }) => {
  return (
    <Box style={{ display: "flex", alignItems: "center" }}>
      <IconButton>{icon}</IconButton>
      <Typography sx={{ fontSize: 10 }} color="text.secondary" component="div">
        {text}
      </Typography>
    </Box>
  );
};
type CountTextProps = {
  count: string;
  text: string;
};
const CountText: FC<CountTextProps> = ({ count, text }) => {
  return (
    <Box
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography
        variant="subtitle2"
        sx={{ fontWeight: "bold" }}
        component="div"
      >
        {count}
      </Typography>
      <Typography sx={{ fontSize: 12 }} color="text.primary" component="div">
        {text}
      </Typography>
    </Box>
  );
};

export function ProfileCardXS() {
  const navigate = useNavigate();
  return (
    <Box style={{ marginTop: "10%" }}>
      <Grid container sx={{ width: "100%" }}>
        <Grid
          item
          xs={5}
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <IconButton
            onClick={() => alert("Profile")}
            sx={{ width: "5rem", height: "5rem" }}
          >
            <Avatar
              sx={{
                width: "5rem",
                height: "5rem",
                bgcolor: stringToColor("userName"),
              }}
              alt="userName"
              src={images.profile}
            />
          </IconButton>
          <Typography
            component="div"
            style={{ fontWeight: "bold", fontSize: 12 }}
          >
            R Resha Sheddy
          </Typography>
          <Typography
            component="div"
            color="text.secondary"
            style={{ fontSize: 10 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </Typography>
          <IconWithText
            icon={<LocationOn sx={{ fontSize: 10 }} />}
            text="Chennai"
          />
        </Grid>
        <Grid
          item
          xs={6}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            marginLeft: "3%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "2%",
            }}
          >
            <CountText count="500" text="Posts" />
            <CountText count="300" text="Sold" />
            <CountText count="100" text="Saved" />
          </Box>
          <Button
            fullWidth
            variant="contained"
            size="small"
            color="inherit"
            style={{ textTransform: "none" }}
            onClick={() => navigate("/editprofile")}
          >
            <Typography style={{ fontSize: 12 }} color="ButtonText">
              Edit Profile
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
