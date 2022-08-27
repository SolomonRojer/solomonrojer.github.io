import React, { Dispatch, FC } from "react";
import {
  Box,
  Fab,
  Typography,
  CardContent,
  CardMedia,
  TextField,
  Input,
  ButtonBase,
  Paper,
  IconButton,
  FormControlLabel,
  Checkbox,
  Link,
  Button,
  Tooltip,
  Avatar,
} from "@mui/material";
import {
  Phone,
  LocationOn,
  AddRounded,
  AddCircleRounded,
  AddAPhoto,
  VisibilityOff,
  Email,
  Lock,
  Edit,
  Person,
  Description,
  VerifiedUser,
} from "@mui/icons-material";
import { Stack } from "@mui/material";
import { useAuthenticationStyle } from "./AuthenticatioStyle";
import PopupDialog from "../../presentational/Popup/Popup";

const Register = () => {
  const classes = useAuthenticationStyle();

  return (
    <Box className={classes.cardContainer}>
      <CardContent
        style={{
          height: "25rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1 },
            }}
            noValidate
            autoComplete="off"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Input
              fullWidth
              placeholder="Enter your name"
              startAdornment={
                <Person
                  color="disabled"
                  fontSize="small"
                  style={{ marginRight: 5 }}
                />
              }
              style={{ fontSize: 14 }}
            />
            <Input
              fullWidth
              placeholder="Enter your email"
              startAdornment={
                <Email
                  color="disabled"
                  fontSize="small"
                  style={{ marginRight: 5 }}
                />
              }
              style={{ fontSize: 14 }}
            />
            <Input
              fullWidth
              placeholder="Enter your password"
              type="password"
              startAdornment={
                <Lock
                  color="disabled"
                  fontSize="small"
                  style={{ marginRight: 5 }}
                />
              }
              endAdornment={
                <IconButton>
                  <VisibilityOff fontSize="small" color="disabled" />
                </IconButton>
              }
              style={{ fontSize: 14 }}
            />
            <Input
              fullWidth
              placeholder="Confirm your password"
              type="password"
              startAdornment={
                <Lock
                  color="disabled"
                  fontSize="small"
                  style={{ marginRight: 5 }}
                />
              }
              endAdornment={
                <IconButton>
                  <VisibilityOff fontSize="small" color="disabled" />
                </IconButton>
              }
              style={{ fontSize: 14 }}
            />
          </Box>
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 15 } }}
                />
              }
              label={<Typography sx={{ fontSize: 12 }}>Remember me</Typography>}
            />
          </Box>
        </Box>
        <Button fullWidth variant="contained" color="primary">
          Register
        </Button>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: 12 }}>Already a member?</Typography>
          <Link href="#" underline="none" sx={{ fontSize: 12 }}>
            Login now
          </Link>
        </Box>
      </CardContent>
    </Box>
  );
};

const Login = () => {
  const classes = useAuthenticationStyle();
  return (
    <Box className={classes.cardContainer}>
      <CardContent
        style={{
          height: "20rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 2 },
            }}
            noValidate
            autoComplete="off"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Input
              fullWidth
              placeholder="Enter your email"
              startAdornment={
                <Email
                  color="disabled"
                  fontSize="small"
                  style={{ marginRight: 5 }}
                />
              }
              style={{ fontSize: 14 }}
            />
            <Input
              fullWidth
              placeholder="Enter your password"
              type="password"
              startAdornment={
                <Lock
                  color="disabled"
                  fontSize="small"
                  style={{ marginRight: 5 }}
                />
              }
              endAdornment={
                <IconButton>
                  <VisibilityOff fontSize="small" color="disabled" />
                </IconButton>
              }
              style={{ fontSize: 14 }}
            />
          </Box>
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 15 } }}
                />
              }
              label={<Typography sx={{ fontSize: 12 }}>Remember me</Typography>}
            />
            <Link href="#" underline="none" sx={{ fontSize: 12 }}>
              Forgot password?
            </Link>
          </Box>
        </Box>
        <Button fullWidth variant="contained" color="primary">
          Login
        </Button>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: 12 }}>Not a member?</Typography>
          <Link href="#" underline="none" sx={{ fontSize: 12 }}>
            Register now
          </Link>
        </Box>
      </CardContent>
    </Box>
  );
};

type AuthenticationProps = {
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
  type: string;
};
const Authentication: FC<AuthenticationProps> = ({ open, setOpen, type }) => {
  const descriptionElementRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <PopupDialog
      open={open}
      setOpen={setOpen}
      title={type === "login" ? "LOGIN" : "REGISTER"}
      actionName={type === "login" ? "LOGIN" : "Save"}
      disableAction
    >
      {type === "login" ? <Login /> : <Register />}
    </PopupDialog>
  );
};

export default Authentication;
