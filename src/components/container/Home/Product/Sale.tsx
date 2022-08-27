import * as React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Avatar,
  IconButton,
  Typography,
  Fade,
  Box,
  CardActionArea,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  LocationOn,
  Star,
  TurnedInNot,
  TurnedIn,
  Edit,
  Delete,
} from "@mui/icons-material";
import { Checkbox, Chip, Grid } from "@material-ui/core";
import { useCollectionStyles } from "./HomeItemsStyle";
import { stringToColor } from "../../../../utils/common/StringToColor";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { SalesData } from "../../../../utils/common/PropTypes";
import ImageCarousel from "../../../presentational/Carousel/ImageCarousel";
import { Products } from "../../../../constants/Data/Products";
import HomeContainer from "../HomeMain";

const { innerWidth } = window;

type SalesProps = {
  view: string;
  salesItems: SalesData[];
  type?: boolean;
};

const RecipeReviewCard: React.FC<SalesProps> = ({
  view,
  salesItems,
  type = false,
}) => {
  const classes = useCollectionStyles();
  const navigate = useNavigate();

  const viewProduct = (item: SalesData) => {
    navigate("/viewproduct", { state: { item } });
  };

  const onClickEdit = (item: SalesData) => {
    navigate("/add", { state: { item } });
  };

  return (
    <>
      {salesItems.map((item, i) => (
        <Grid item md={3} sm={6} xs={12} key={i}>
          <Fade in={true} style={{ transitionDelay: `${100 * i}ms` }}>
            <Card>
              <CardContent className={classes.ProductContent1}>
                <Chip
                  onClick={() => navigate("/profile")}
                  style={{
                    backgroundColor: "rgba(0,0,0,0.02)",
                    cursor: "pointer",
                    maxWidth:
                      view === "md"
                        ? "15rem"
                        : innerWidth - (20 / 100) * innerWidth,
                  }}
                  avatar={
                    <Avatar
                      src={item?.profile}
                      alt={item.author}
                      sx={{
                        bgcolor: stringToColor(item.author),
                      }}
                    />
                  }
                  label={
                    item.userType === "admin" ? (
                      <Box>
                        <Typography variant="caption" color="info.main">
                          Pet-Tech
                        </Typography>
                        <IconButton disableTouchRipple disableFocusRipple>
                          <Star sx={{ fontSize: 15 }} color="warning" />
                        </IconButton>
                      </Box>
                    ) : (
                      <Typography
                        style={{
                          maxWidth:
                            view === "md"
                              ? "13rem"
                              : innerWidth - (20 / 100) * innerWidth,
                        }}
                        className={classes.UserName1}
                        variant="body2"
                      >
                        {item.author}
                      </Typography>
                    )
                  }
                />
                {type && (
                  <span>
                    <IconButton onClick={() => onClickEdit(item)}>
                      <Edit color="disabled" />
                    </IconButton>
                    <IconButton
                    // onClick={() => RemovePostConfirmation(item.id)}
                    >
                      <Delete color="disabled" />
                    </IconButton>
                  </span>
                )}
              </CardContent>
              <CardActionArea disableRipple disableTouchRipple>
                {view === "md" ? (
                  <Link to={`/viewproduct_/${item.id}`} target="_blank">
                    <CardMedia
                      className={classes.CardImage}
                      component="img"
                      image={item.images[0]}
                      alt="Paella dish"
                    />
                  </Link>
                ) : (
                  <Box onClick={() => viewProduct(item)}>
                    <ImageCarousel
                      images={item.images}
                      width="100%"
                      Carouselheight="20rem"
                      Imageheight="100%"
                    />
                  </Box>
                )}
              </CardActionArea>
              <CardContent>
                <Box className={classes.ProductContent1}>
                  <Box
                    style={{
                      marginTop:
                        view === "xs" && item.images.length > 1 ? "-10%" : "0",
                    }}
                  >
                    <Typography variant="h6">{item.price}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.title}
                    </Typography>
                  </Box>
                  <Checkbox
                    icon={<TurnedInNot />}
                    checkedIcon={<TurnedIn color="primary" />}
                    style={{
                      marginTop:
                        view === "xs" && item.images.length > 1 ? "-15%" : "0",
                    }}
                  />
                </Box>

                <span style={{ display: "flex", alignItems: "center" }}>
                  <LocationOn sx={{ fontSize: 15 }} color="disabled" />
                  <Typography variant="caption" color="text.secondary">
                    {item.location}
                  </Typography>
                </span>
              </CardContent>
            </Card>
          </Fade>
        </Grid>
      ))}
    </>
  );
};

export const Sale: React.FC<SalesProps> = ({
  view,
  salesItems,
  type = false,
}) => {
  const classes = useCollectionStyles();
  return (
    <Grid container className={classes.root} spacing={view === "md" ? 2 : 0}>
      <RecipeReviewCard view={view} salesItems={salesItems} type={type} />
    </Grid>
  );
};

const HomeSale = () => {
  const classes = useCollectionStyles();

  const theme = useTheme();
  const isXS = useMediaQuery(theme.breakpoints.down("md"));

  const className = isXS ? classes.TabContentXS : classes.TabContent;

  return (
    <HomeContainer className={className} type="sale">
      <Sale view={isXS ? "xs" : "md"} salesItems={Products} />
    </HomeContainer>
  );
};

export default HomeSale;
