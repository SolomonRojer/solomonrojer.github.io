import React, { FC } from "react";
import {
  Box,
  Fab,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { useProfileStyles } from "../UserProfileStyle";
import IconButton from "@mui/material/IconButton";
import { LocationOn, Edit } from "@mui/icons-material";
import { images } from "../../../../../constants/images";
import { useNavigate } from "react-router-dom";

type IconWithTextProps = {
  icon: JSX.Element;
  text: string;
};
const IconWithText: FC<IconWithTextProps> = ({ icon, text }) => {
  return (
    <Box style={{ display: "flex", alignItems: "center" }}>
      <IconButton>{icon}</IconButton>
      <Typography variant="caption" color="text.secondary" component="div">
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
        variant="subtitle1"
        sx={{ fontWeight: "bold" }}
        component="div"
      >
        {count}
      </Typography>
      <Typography variant="caption" color="text.primary" component="div">
        {text}
      </Typography>
    </Box>
  );
};

export function ProfileCardMD() {
  const classes = useProfileStyles();
  const navigate = useNavigate();

  return (
    <Box className={classes.InnerContainer}>
      <Card sx={{ display: "flex", height: "13rem" }}>
        <Box
          sx={{
            display: "flex",
            flexGrow: 1,
            flexDirection: "column",
          }}
        >
          <CardContent>
            <Typography component="div" variant="h6">
              R Resha Sheddy
            </Typography>
            <Typography variant="body2" component="div">
              @reshna_sheddy_22
            </Typography>
            <Typography
              variant="caption"
              component="div"
              color="text.secondary"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing
            </Typography>
            <Box sx={{ marginTop: "2%" }}>
              <IconWithText
                icon={<LocationOn sx={{ fontSize: 15 }} />}
                text="Chennai"
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                marginTop: "2%",
              }}
            >
              <CountText count="500" text="Posts" />
              <CountText count="300" text="Sold" />
              <CountText count="100" text="Saved" />
            </Box>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={{
            width: 200,
          }}
          image={images.profile}
          alt="Live from space album cover"
        />
      </Card>
      <Fab
        size="small"
        aria-label="edit"
        style={{ position: "absolute", top: 85, right: -20 }}
        component="label"
        onClick={() => navigate("/editprofile")}
      >
        <Edit />
      </Fab>
    </Box>
  );
}
