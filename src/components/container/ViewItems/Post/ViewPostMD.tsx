import React, { FC } from "react";
import {
  Box,
  CardContent,
  CardMedia,
  Card,
  IconButton,
  Avatar,
  Chip,
  Typography,
  CardActions,
  Checkbox,
  Grid,
} from "@mui/material";
import {
  LocationOn,
  Pets,
  Share,
  TurnedIn,
  TurnedInNot,
} from "@mui/icons-material";
import { useViewItemStyle } from "./ViewPostStyle";
import { stringToColor } from "../../../../utils/common/StringToColor";
import PopupDialog from "../../../presentational/Popup/Popup";
import type { ViewPostProps, ViewItemProps } from "./ViewPostProps";
import SwipeImage from "../../../presentational/SwipeImage/ImageList";

const ViewItem: FC<ViewItemProps> = ({ item }) => {
  const classes = useViewItemStyle();

  return (
    <Card sx={{ width: "55rem", height: "25rem" }}>
      <Grid container>
        <Grid item xs={6} sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "25rem",
            }}
          >
            <Box>
              <Box style={{ display: "flex", alignItems: "center" }}>
                <IconButton onClick={() => alert("Profile")}>
                  <Avatar
                    sx={{
                      width: 30,
                      height: 30,
                      bgcolor: stringToColor("Remy Sharp"),
                    }}
                    alt={item?.author}
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
              </Box>
              <Typography component="div" variant="subtitle2">
                {item?.title}
              </Typography>
              <Box
                style={{
                  maxHeight: "9rem",
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
              </Box>
              {item?.keywords?.length && (
                <Box
                  sx={{
                    "& > :not(style)": { m: 0.3 },
                  }}
                  style={{ overflowY: "auto", maxHeight: "4rem" }}
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
            </Box>
            <Box>
              <CardActions className={classes.CardIcons}>
                <Typography color="disabled" variant="caption">
                  <LocationOn sx={{ fontSize: 14 }} color="disabled" />
                  {item?.location}
                </Typography>
                <Typography color="disabled" variant="caption">
                  {item?.date}
                </Typography>
              </CardActions>
              <CardActions className={classes.CardIcons}>
                <span>
                  <Checkbox
                    icon={<Pets />}
                    checkedIcon={<Pets color="primary" />}
                  />
                  <IconButton aria-label="share">
                    <Share />
                  </IconButton>
                </span>
                <Checkbox
                  icon={<TurnedInNot />}
                  checkedIcon={<TurnedIn color="primary" />}
                />
              </CardActions>
            </Box>
          </CardContent>
        </Grid>
        <Grid
          item
          xs={6}
          style={{ position: "relative", backgroundColor: "#eee" }}
        >         
          <SwipeImage images={item.images} width="100%" height="25rem" />
        </Grid>
      </Grid>
    </Card>
  );
};

const ViewPost: FC<ViewPostProps> = ({ open, setOpen, item }) => {
  const descriptionElementRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <PopupDialog
      open={open}
      setOpen={setOpen}
      title=""
      fullScreen
      transparent
      disableAction
    >
      <ViewItem item={item} />
    </PopupDialog>
  );
};

export default ViewPost;
