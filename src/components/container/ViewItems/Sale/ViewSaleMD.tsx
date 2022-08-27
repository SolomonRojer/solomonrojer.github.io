import React, { FC, useEffect, useState } from "react";
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
import { SalesData } from "../../../../utils/common/PropTypes";
import { Products } from "../../../../constants/Data/Products";
import { useParams } from "react-router-dom";

const getData = (id: string) => {
  return Products?.filter((item) => item?.id === id)?.[0] as SalesData;
};

const ViewSaleMD: React.FC = (props) => {
  const classes = useViewItemStyle();
  const { id } = useParams();

  const item: SalesData = getData(id as string);

  return (
    <Grid container style={{ marginTop: "7%" }}>
      <Grid
        item
        xs={6}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Divider />
        <SwipeImage images={item.images} width="40rem" height="30rem" />
      </Grid>
      <Grid item xs={6}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "32rem",
          }}
        >
          <Box>
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
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
                  className={classes.UserName}
                >
                  {item?.author}
                </Typography>
              </div>
              <div>
                <Typography color="disabled" variant="caption">
                  {item?.date}
                </Typography>
              </div>
            </Box>
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography component="div" variant="subtitle2">
                  {item?.title}
                </Typography>
                <Typography
                  component="div"
                  variant="h6"
                  sx={{ fontWeight: "bold" }}
                >
                  {item?.price}
                </Typography>
              </Box>
              <Typography
                variant="body1"
                color="text.secondary"
                component="div"
                sx={{ fontWeight: "bold" }}
              >
                {item?.contact ? `Contact Owner : ${item?.contact}` : ""}
              </Typography>
            </Box>
            <Box
              style={{
                maxHeight: "20rem",
                overflowY: "auto",
                marginBlock: "2%",
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
                  {item?.keywords?.map((item, i) => (
                    <Chip
                      label={`#${item}`}
                      color="default"
                      size="small"
                      key={i}
                    />
                  ))}
                </Box>
              )}

              {item?.location && (
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
              )}

              {item?.otherFields?.length && (
                <Box
                  sx={{
                    "& > :not(style)": { m: 0.5 },
                  }}
                  style={{ marginTop: "2%" }}
                >
                  <List>
                    {item?.otherFields?.map((item, i) => (
                      <ListItem disablePadding>
                        <ListItemIcon>
                          <ArrowRight fontSize="small" color="disabled" />
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <Typography variant="body2">{item}</Typography>
                          }
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              )}
            </Box>
          </Box>
          <Box>
            <CardActions className={classes.CardIcons}>
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
        </CardContent>
      </Grid>
    </Grid>
  );
};

export default ViewSaleMD;
