import { makeStyles } from "@material-ui/core/styles";

const useAuthenticationStyle = makeStyles({
  root: {
    marginTop: "1%",
    position: "relative",
  },

  cardContainer: {
    width: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  CardImage: {
    width: "100%",
    height: "15rem",
    objectFit: "contain",
  },
  SideImage: {
    objectFit: "contain",
    marginBottom: 1,
    width: "5.55rem",
  },
  InputContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

export { useAuthenticationStyle };
