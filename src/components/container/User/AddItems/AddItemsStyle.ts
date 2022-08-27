import { makeStyles } from "@material-ui/core/styles";

const useAddItemsStyle = makeStyles({
  root: {
    marginTop: "1%",
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
  TabText: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  TabContainer: {
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    backgroundColor: "#fff",
  },
});

export { useAddItemsStyle };
