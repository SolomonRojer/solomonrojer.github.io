import React, { useEffect } from "react";
import {
  Box,
  CardContent,
  IconButton,
  Avatar,
  Chip,
  Typography,
  CardActions,
  Checkbox,
  Grid,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  LocationOn,
  Pets,
  Share,
  TurnedIn,
  TurnedInNot,
  ArrowRight,
} from "@mui/icons-material";
import { useViewItemStyle } from "./ViewSaleStyle";
import { stringToColor } from "../../../../utils/common/StringToColor";
import SwipeImage from "../../../presentational/SwipeImage/ImageList";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { selectData, setState } from "../../../../store/Slice/NavigationSlice";
import { SalesData } from "../../../../utils/common/PropTypes";
import { useLocation } from "react-router-dom";
import ImageCarousel from "../../../presentational/Carousel/ImageCarousel";

type ViewSaleXSProps = {
  item: SalesData;
};

const ViewSaleXS: React.FC = (props) => {
  const classes = useViewItemStyle();
  const dispatch = useAppDispatch();
  const header = useAppSelector(selectData);

  const location = useLocation();
  const { item } = location.state as ViewSaleXSProps;

  useEffect(() => {
    dispatch(setState({ prevValue: header.value, value: 6, headerTitle: "" }));
    window.scrollTo(0, 0);
  }, []);

  return (
    <Grid container style={{ marginTop: "7%" }}>
      <Grid item xs={12}>
        <Box
          style={{
            width: "100%",
            height: "20rem",
            backgroundColor: "#eee",
          }}
        >
          <ImageCarousel
            images={item.images}
            width="100%"
            Carouselheight="20rem"
          />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "32rem",
          }}
        >
          <Box>
            <CardActions
              className={classes.CardIcons}
              style={{ marginTop: "-5%" }}
            >
              <Box>
                <Checkbox
                  icon={<Pets fontSize="small" />}
                  checkedIcon={<Pets fontSize="small" color="primary" />}
                />
                <IconButton aria-label="share">
                  <Share />
                </IconButton>
              </Box>
              <Checkbox
                icon={<TurnedInNot fontSize="small" />}
                checkedIcon={<TurnedIn fontSize="small" color="primary" />}
              />
            </CardActions>
          </Box>

          <Box>
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography
                  component="div"
                  variant="h6"
                  sx={{ fontWeight: "bold" }}
                >
                  {item?.title}
                </Typography>
                <Typography
                  component="div"
                  variant="subtitle1"
                  sx={{ fontWeight: "bold" }}
                >
                  {item?.price}
                </Typography>
              </Box>
            </Box>

            {item?.otherFields?.length && (
              <Box
                sx={{
                  "& > :not(style)": { m: 0.5 },
                }}
                style={{ marginTop: "2%" }}
              >
                <Divider />
                <List>
                  {item?.otherFields?.map((ele, i) => (
                    <ListItem disablePadding>
                      <ListItemIcon>
                        <ArrowRight fontSize="small" color="disabled" />
                      </ListItemIcon>
                      <ListItemText
                        primary={<Typography variant="body2">{ele}</Typography>}
                      />
                    </ListItem>
                  ))}
                </List>
                <Divider />
              </Box>
            )}

            <Box
              style={{
                marginBlock: "4%",
              }}
            >
              <Typography
                variant="caption"
                color="text.secondary"
                component="div"
              >
                {item?.description}
              </Typography>

              {item?.keywords?.length && (
                <Box
                  sx={{
                    "& > :not(style)": { m: 0.5 },
                  }}
                  style={{ marginTop: "2%" }}
                >
                  {item?.keywords?.map((ele, i) => (
                    <Chip
                      label={`#${ele}`}
                      color="default"
                      size="small"
                      key={i}
                    />
                  ))}
                </Box>
              )}
            </Box>
            <Divider />
            <Box style={{ marginBlock: "4%" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <IconButton onClick={() => alert("Profile")}>
                  <Avatar
                    sx={{
                      width: 30,
                      height: 30,
                      bgcolor: stringToColor(item.author),
                    }}
                    alt={item.author}
                    src={item?.profile}
                  />
                </IconButton>
                <Typography
                  component="div"
                  variant="subtitle1"
                  className={classes.AuthorName}
                >
                  {item?.author}
                </Typography>
              </div>
            </Box>

            {item?.contact && (
              <Box sx={{ marginBlock: "1rem" }}>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  component="div"
                  sx={{ fontWeight: "bold" }}
                >
                  Contact Owner : {item?.contact}
                </Typography>
              </Box>
            )}
            <Box>
              <Box
                style={{
                  marginTop: "2%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <LocationOn sx={{ fontSize: 15 }} color="disabled" />
                <Typography color="disabled" variant="caption">
                  {item?.location}
                </Typography>
              </Box>
              <Typography color="disabled" variant="caption">
                Posted On {item?.date}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Grid>
    </Grid>
  );
};

export default ViewSaleXS;
