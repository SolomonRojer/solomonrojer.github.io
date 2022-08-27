import * as React from "react";
import {
  Card,
  CardHeader,
  CardActions,
  Avatar,
  Checkbox,
  Grid,
  Fade,
  Box,
  Chip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { IconButton, Typography } from "@mui/material";
import {
  Star,
  Share,
  Pets,
  TurnedIn,
  TurnedInNot,
  Delete,
} from "@mui/icons-material";
import { useCollectionStyles } from "./HomeItemsStyle";
import { stringToColor } from "../../../../utils/common/StringToColor";
import ViewPost from "../../ViewItems/Post/ViewPostMD";
import { PostInitialData } from "../../../../constants/Data/InitialData";
import type { PostData as PostDataType } from "../../../../utils/common/PropTypes";
import { useNavigate } from "react-router-dom";
import ImageCarousel from "../../../presentational/Carousel/ImageCarousel";
import HomeContainer from "../HomeMain";
import { Posts as PostData } from "../../../../constants/Data/Products";

const { innerWidth } = window;

type PostProps = {
  view: string;
  PostItems: PostDataType[];
  type?: boolean;
};
const RecipeReviewCard: React.FC<PostProps> = ({
  view,
  PostItems,
  type = false,
}) => {
  const classes = useCollectionStyles();
  const navigate = useNavigate();

  const [viewItem, setViewItem] = React.useState(false);
  const [isReadMore, setIsReadMore] = React.useState<boolean[]>(
    Array(PostItems.length).fill(true)
  );

  const [viewPostItem, setViewPostItem] =
    React.useState<PostDataType>(PostInitialData);

  const handleOnClickPost = (item: PostDataType) => {
    if (view === "md") {
      setViewPostItem(item);
      setViewItem(true);
    }
  };

  const handleReadMore = (i: number) => {
    const copyIsReadMore = [...isReadMore];
    copyIsReadMore[i] = false;
    setIsReadMore(copyIsReadMore);
  };

  return (
    <>
      {PostItems.map((item, i) => (
        <Grid item xs={12} key={i}>
          <Fade in={true} style={{ transitionDelay: `${100 * i}ms` }}>
            <Card>
              <CardHeader
                sx={{ height: "4rem" }}
                avatar={
                  <IconButton onClick={() => navigate("/profile")}>
                    <Avatar
                      sx={{
                        width: 30,
                        height: 30,
                        bgcolor: stringToColor("Remy Sharp"),
                      }}
                      alt={item.author}
                      src={item.profile}
                    />
                  </IconButton>
                }
                action={
                  type && (
                    <IconButton aria-label="more" id="long-button">
                      <Delete sx={{ color: "rgba(0,0,0,0.5)" }} />
                    </IconButton>
                  )
                }
                title={
                  <Typography
                    variant="subtitle2"
                    className={classes.UserName}
                    style={{
                      cursor: "pointer",
                      maxWidth:
                        view === "md"
                          ? "80%"
                          : innerWidth - (20 / 100) * innerWidth,
                    }}
                    color="text.primary"
                    onClick={() => navigate("/profile")}
                  >
                    {item.userType === "admin" ? (
                      <Box style={{ display: "flex", alignItems: "center" }}>
                        <Typography variant="subtitle2" color="info.main">
                          Pet-Tech
                        </Typography>
                        <IconButton color="warning">
                          <Star sx={{ fontSize: 14 }} />
                        </IconButton>
                      </Box>
                    ) : (
                      item.author
                    )}
                  </Typography>
                }
                subheader={
                  item.userType !== "admin" && (
                    <Typography variant="body2" color="text.secondary">
                      {item.location}
                    </Typography>
                  )
                }
              />
              <Box
                onClick={() => handleOnClickPost(item)}
                style={{ cursor: view === "md" ? "pointer" : "default" }}
              >
                <ImageCarousel
                  images={item.images}
                  width="100%"
                  Carouselheight="20rem"
                  Imageheight="100%"
                />
              </Box>
              <CardActions
                className={classes.CardIcons}
                style={{ marginTop: item.images.length > 1 ? "-7%" : 0 }}
              >
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
              {view === "xs" && (
                <Box style={{ marginInline: "0.5rem" }}>
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
                      {item?.description.length > 50 && isReadMore[i] ? (
                        <>
                          {item?.description.slice(0, 50)}
                          <span
                            style={{ cursor: "pointer" }}
                            onClick={() => handleReadMore(i)}
                          >
                            ...More
                          </span>
                        </>
                      ) : (
                        item?.description
                      )}
                    </Typography>
                  </Box>
                  {item?.keywords?.length && (
                    <Box
                      sx={{
                        "& > :not(style)": { m: 0.3 },
                      }}
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
                  <Typography
                    sx={{ fontSize: 10, marginBlock: "0.5rem" }}
                    color="text.secondary"
                  >
                    {item.date}
                  </Typography>
                </Box>
              )}
            </Card>
          </Fade>
        </Grid>
      ))}

      {viewItem && (
        <ViewPost open={viewItem} setOpen={setViewItem} item={viewPostItem} />
      )}
    </>
  );
};

export const Post: React.FC<PostProps> = ({
  view,
  PostItems,
  type = false,
}) => {
  const classes = useCollectionStyles();

  return (
    <div
      className={classes.centerDiv}
      style={{ width: view === "md" ? "85%" : "100%" }}
    >
      <Grid
        container
        className={classes.root}
        style={{
          width: view === "md" ? "55%" : "100%",
          marginTop: "2.5%",
        }}
        spacing={view === "md" ? 2 : 0}
      >
        <RecipeReviewCard PostItems={PostItems} view={view} type={type} />
      </Grid>
    </div>
  );
};

const HomePost = () => {
  const classes = useCollectionStyles();

  const theme = useTheme();
  const isXS = useMediaQuery(theme.breakpoints.down("md"));

  const className = isXS ? classes.TabContentPostXS : classes.TabContentPost;

  return (
    <HomeContainer className={className} type="post">
      <Post view={isXS ? "xs" : "md"} PostItems={PostData} />
    </HomeContainer>
  );
};

export default HomePost;
