// import { createTheme } from '@material-ui/core/styles';
import { createTheme } from "@mui/material/styles";
// const font = "'ProductSans-Bold', Product Sans";

const primary = "#ff033e";
const secondary = "#fff";
const active = "#000";

const textSecondary = "#777";

const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {          
          boxShadow: "none",
          transition: ".5s",
        },
        positionFixed: {
          top: 0,
          left: 0,
        },
      },
    },
  },
  typography: {
    // fontFamily: font,
  },
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
  },
});

export { theme };
