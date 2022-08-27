import { makeStyles } from "@material-ui/core/styles";

const useViewItemStyle = makeStyles({
  root: {
    marginTop: "1%",
    position: "relative",
  },

  cardContainer: {
    width: "100%",
    display: "flex",
    position: "relative",
  },
  CardImage: {
    width: "100%",
    height: "16rem",
    objectFit: "cover",
  },
  SideImage: {
    objectFit: "contain",
    marginBottom: 1,
    width: "5.55rem",
  },

  CardIcons: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  UserName: {    
    width: "20rem",    
    overflowWrap: "break-word",
  },
});

export { useViewItemStyle };
