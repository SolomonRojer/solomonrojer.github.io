import { makeStyles } from "@material-ui/core/styles";

const useCollectionStyles = makeStyles({
  root: {
    marginTop: "1%",
    position: "relative",
  },
  TabContent: {
    position: "absolute",
    marginTop: "4%",
    left: "6%",
    width: "93%",
  },
  TabContentXS: { marginBlock: "13%" },
  TabContentPost: {
    position: "absolute",
    left: "10%",
    width: "90%",
    marginTop: "2%",
  },
  TabContentPostXS: { marginTop: "10%", marginBottom: "15%" },
  TabContainer: {
    borderRight: 1,
    position: "fixed",
    top: "30%",
    width: "5%",
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    boxShadow: "5px 0px 27px -5px rgba(0, 0, 0, 0.3) !important",
  },
  Tab: {
    alignSelf: "center",
    fontSize: 12,
    textTransform: "initial",
  },
  cardContainer: {
    width: "95%",
    marginBlock: "3%",
  },
  CardImage: {
    width: "100%",
    height: "15rem",
    objectFit: "cover",
  },
  Description: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  ProductContent1: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
    height: "3rem",
  },
  Profile: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  ProfileDetails: {
    marginLeft: "2%",
  },
  ProfileAvatar: {
    width: "80%",
  },
  UserName: {
    whiteSpace: "nowrap",
    width: "80%",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  UserName1: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  CardIcons: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  SpecialIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  ToggleSwitch: {
    position: "absolute",
    marginTop: "5%",
    right: "1%",
    height: "2rem",
  },
  ToggleSwitch2: {
    position: "fixed",
    marginTop: "5%",
    right: "15%",
    height: "2rem",
    zIndex: 2,
  },
  Title: {
    position: "absolute",
    top: "4rem",
    left: "5rem",
  },
  centerDiv: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
});

const carouselHeight = "25rem";
const useCarouselStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    height: carouselHeight,
    position: "relative",
  },
  Carousel: {
    width: "85%",
    marginInline: "3%",
    marginTop: "6%",
  },
  img_responsive: {
    width: "70%",
    objectFit: "contain",
  },
  img_responsive1: {
    width: "100%",
    maxHeight: carouselHeight,
  },
  sec: {
    position: "absolute",
    top: "30%",
    left: "15%",
  },
  ImageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  ShadeDiv: {
    height: carouselHeight,
    borderRadius: 20,
    width: "100%",
    backgroundColor: "#000",
    position: "absolute",
    top: 0,
    left: 0,
    opacity: 0.8,
  },
  profileImageMD: {
    position: "absolute",
    top: "5%",
    left: "7%",
    zIndex: 2,
    width: "40%",
  },
});
export { useCollectionStyles, useCarouselStyles };
