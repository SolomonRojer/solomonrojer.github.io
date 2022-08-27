import { makeStyles } from "@material-ui/core/styles";

export const useAppBarStyles = makeStyles(() => ({
  appbarTrigger: {
    boxShadow: "5px 0px 27px -5px rgba(0, 0, 0, 0.3) !important",
  },
  NameMenu: {
    fontSize: 20,    
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",    
  },
  logo: {    
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",     
  },
}));
