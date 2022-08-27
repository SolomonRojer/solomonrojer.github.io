import { makeStyles } from "@material-ui/core/styles";

const useProfileStyles = makeStyles({
  root: {
    marginTop: "5%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  rootXS: {
    marginTop: "5%",
    display: "flex",
    marginInline: "3%",
    flexDirection: "column",
  },
  InnerContainer: {
    width: "40%",
    position: "relative",
  },
  ToggleSwitch: {
    position: "absolute",
    top: "5%",
    right: "2%",
    height: "2rem",
    borderRadius: 20,
    zIndex: 1,
  },
  ToggleButtonLeft: {
    border: "none",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  ToggleButtonRight: {
    border: "none",
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  UserName: {
    whiteSpace: "nowrap",
    width: "8rem",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
});

export { useProfileStyles };
