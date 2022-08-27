import React from "react";
import {
  Box,
  Fab,
  Typography,
  CardContent,
  Avatar,
  Tooltip,
  Button,
  TextField,
  InputAdornment,
  Hidden,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {
  LocationOn,
  Phone,
  AddRounded,
  Person,
  VisibilityOff,
  Email,
  Description,
  VerifiedUser,
} from "@mui/icons-material";
import { useAuthenticationStyle } from "../../Authentication/AuthenticatioStyle";
import { stringToColor } from "../../../../utils/common/StringToColor";
import PopupDialog from "../../../presentational/Popup/Popup";
import { useNavigate } from "react-router-dom";

const EditMD = () => {
  const classes = useAuthenticationStyle();

  return (
    <Box className={classes.cardContainer}>
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h6"
          style={{ fontWeight: "bold", marginBottom: "5%" }}
        >
          Edit Profile
        </Typography>
        <Box style={{ position: "relative" }}>
          <Avatar
            src="https://images.unsplash.com/photo-1589118949245-7d38baf380d6"
            alt="Reshna"
            sx={{
              bgcolor: stringToColor("Reshna"),
              height: "10rem",
              width: "10rem",
            }}
          />

          <Fab
            size="small"
            aria-label="edit"
            style={{ position: "absolute", bottom: 0, right: 0 }}
            component="label"
          >
            <input hidden accept="image/*" type="file" />
            <AddRounded />
          </Fab>
        </Box>
        <CardContent
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
          sx={{ gap: 4 }}
        >
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 2 },
            }}
            noValidate
            autoComplete="off"
            className={classes.InputContainer}
          >
            <TextField
              fullWidth
              placeholder="Enter your name"
              variant="standard"
              InputProps={{
                startAdornment: (
                  <Person
                    color="disabled"
                    fontSize="small"
                    style={{ marginRight: 5 }}
                  />
                ),
              }}
              style={{ fontSize: 14 }}
            />
            <TextField
              fullWidth
              placeholder="Enter your id"
              variant="standard"
              InputProps={{
                startAdornment: (
                  <VerifiedUser
                    color="disabled"
                    fontSize="small"
                    style={{ marginRight: 5 }}
                  />
                ),
              }}
              style={{ fontSize: 14 }}
            />
            <TextField
              placeholder="Enter your email"
              helperText="verification needed"
              variant="standard"
              fullWidth
              error
              style={{ fontSize: 12 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email
                      color="disabled"
                      fontSize="small"
                      style={{ marginRight: 5 }}
                    />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="start">
                    <Tooltip
                      title="hide your contact, so users can't see your details"
                      placement="top"
                    >
                      <IconButton>
                        <VisibilityOff fontSize="small" color="disabled" />
                      </IconButton>
                    </Tooltip>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 2 },
            }}
            noValidate
            autoComplete="off"
            className={classes.InputContainer}
          >
            <TextField
              variant="standard"
              fullWidth
              placeholder="Enter your location"
              InputProps={{
                startAdornment: (
                  <LocationOn
                    color="disabled"
                    fontSize="small"
                    style={{ marginRight: 5 }}
                  />
                ),
                endAdornment: (
                  <Tooltip
                    title="hide your location, so users can't see your details"
                    placement="top"
                  >
                    <IconButton>
                      <VisibilityOff fontSize="small" color="disabled" />
                    </IconButton>
                  </Tooltip>
                ),
              }}
              style={{ fontSize: 14 }}
            />
            <TextField
              variant="standard"
              fullWidth
              placeholder="Description about you"
              InputProps={{
                startAdornment: (
                  <Description
                    color="disabled"
                    fontSize="small"
                    style={{ marginRight: 5 }}
                  />
                ),
              }}
              style={{ fontSize: 14 }}
            />
            <TextField
              placeholder="Enter your phone number"
              helperText="verification needed"
              variant="standard"
              fullWidth
              error
              style={{ fontSize: 12 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Phone
                      color="disabled"
                      fontSize="small"
                      style={{ marginRight: 5 }}
                    />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="start">
                    <Tooltip
                      title="hide your contact, so users can't see your details"
                      placement="top"
                    >
                      <IconButton>
                        <VisibilityOff fontSize="small" color="disabled" />
                      </IconButton>
                    </Tooltip>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </CardContent>
        <Button variant="contained" color="primary">
          Save Changes
        </Button>
      </Box>
    </Box>
  );
};

const EditXS = () => {
  const classes = useAuthenticationStyle();

  return (
    <Box className={classes.cardContainer}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box style={{ position: "relative" }}>
          <Avatar
            src="https://images.unsplash.com/photo-1589118949245-7d38baf380d6"
            alt="Reshna"
            sx={{
              bgcolor: stringToColor("Reshna"),
              height: "8rem",
              width: "8rem",
            }}
          />

          <Fab
            size="small"
            aria-label="edit"
            style={{ position: "absolute", bottom: 0, right: 0 }}
            component="label"
          >
            <input hidden accept="image/*" type="file" />
            <AddRounded />
          </Fab>
        </Box>
        <CardContent>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1 },
            }}
            noValidate
            autoComplete="off"
            className={classes.InputContainer}
          >
            <TextField
              fullWidth
              placeholder="Enter your name"
              variant="standard"
              InputProps={{
                startAdornment: (
                  <Person
                    color="disabled"
                    fontSize="small"
                    style={{ marginRight: 5 }}
                  />
                ),
              }}
              style={{ fontSize: 14 }}
            />
            <TextField
              fullWidth
              placeholder="Enter your id"
              variant="standard"
              InputProps={{
                startAdornment: (
                  <VerifiedUser
                    color="disabled"
                    fontSize="small"
                    style={{ marginRight: 5 }}
                  />
                ),
              }}
              style={{ fontSize: 14 }}
            />
            <TextField
              placeholder="Enter your email"
              helperText="verification needed"
              variant="standard"
              fullWidth
              error
              style={{ fontSize: 12 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email
                      color="disabled"
                      fontSize="small"
                      style={{ marginRight: 5 }}
                    />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="start">
                    <Tooltip
                      title="hide your contact, so users can't see your details"
                      placement="top"
                    >
                      <IconButton>
                        <VisibilityOff fontSize="small" color="disabled" />
                      </IconButton>
                    </Tooltip>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              variant="standard"
              fullWidth
              placeholder="Enter your location"
              InputProps={{
                startAdornment: (
                  <LocationOn
                    color="disabled"
                    fontSize="small"
                    style={{ marginRight: 5 }}
                  />
                ),
                endAdornment: (
                  <Tooltip
                    title="hide your location, so users can't see your details"
                    placement="top"
                  >
                    <IconButton>
                      <VisibilityOff fontSize="small" color="disabled" />
                    </IconButton>
                  </Tooltip>
                ),
              }}
              style={{ fontSize: 14 }}
            />
            <TextField
              variant="standard"
              fullWidth
              placeholder="Description about you"
              InputProps={{
                startAdornment: (
                  <Description
                    color="disabled"
                    fontSize="small"
                    style={{ marginRight: 5 }}
                  />
                ),
              }}
              style={{ fontSize: 14 }}
            />
            <TextField
              placeholder="Enter your phone number"
              helperText="verification needed"
              variant="standard"
              fullWidth
              error
              style={{ fontSize: 12 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Phone
                      color="disabled"
                      fontSize="small"
                      style={{ marginRight: 5 }}
                    />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="start">
                    <Tooltip
                      title="hide your contact, so users can't see your details"
                      placement="top"
                    >
                      <IconButton>
                        <VisibilityOff fontSize="small" color="disabled" />
                      </IconButton>
                    </Tooltip>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </CardContent>
        <Button variant="contained" color="primary">
          Save Changes
        </Button>
      </Box>
    </Box>
  );
};

export default function EditProfile() {
  const [open, setOpen] = React.useState(true);
  const goBackNavigate = useNavigate();
  const theme = useTheme();
  const isXS = useMediaQuery(theme.breakpoints.down("md"));

  React.useEffect(() => {
    if (!open) {
      goBackNavigate(-1);
    }
  }, [open]);

  return (
    <PopupDialog
      open={open}
      setOpen={setOpen}
      title={isXS ? "Edit Profile" : ""}
      disableAction
      fullScreen
      scroll={undefined}
    >
      {isXS ? <EditXS /> : <EditMD />}
    </PopupDialog>
  );
}
