import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./constants/theme";
import { RouterComponent } from "./components/container/RouterComponent";

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <RouterComponent />
      </ThemeProvider>
    </>
  );
};

export default App;
