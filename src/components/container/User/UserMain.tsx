import React, { FC, useEffect } from "react";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Hidden,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import {
  BookmarkSharp,
  CropOriginal,
  GridViewSharp,
  LocalOffer,
  LoyaltySharp,
} from "@mui/icons-material";
import { useProfileStyles } from "./Profile/UserProfileStyle";
import UserPosts from "./Gallery/UserPosts";
import UserSales from "./Gallery/UserSales";
import UserFavorites from "./Gallery/UserSaved";
import {
  UserPosts as ProfilePosts,
  UserProducts,
} from "../../../constants/Data/Users";
import {
  Products as FavoriteProduct,
  Posts as FavoritePost,
} from "../../../constants/Data/Products";
import { ProfileCardMD } from "./Profile/ProfileCard/ProfileCardMD";
import { ProfileCardXS } from "./Profile/ProfileCard/ProfileCardXS";
import Toggle from "../../presentational/ToggleBar/ToggleBar";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { selectData, setState } from "../../../store/Slice/NavigationSlice";
import { PostData, SalesData } from "../../../utils/common/PropTypes";
import { useNavigate } from "react-router";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const ToggleComponents = [
  {
    icon: <LocalOffer sx={{ fontSize: 15, marginRigt: 0.5 }} />,
    text: "Sales",
  },
  {
    icon: <CropOriginal sx={{ fontSize: 15, marginRigt: 0.5 }} />,
    text: "Posts",
  },
];

const { innerHeight } = window;

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      <div
        style={{
          visibility: value === index ? "visible" : "hidden",
          minHeight: innerHeight - 100,
        }}
      >
        {children}
      </div>
    </div>
  );
}

export function GalleryTab() {
  const classes = useProfileStyles();
  const dispatch = useAppDispatch();
  const header = useAppSelector(selectData);
  const navigate = useNavigate();

  const [value, setValue] = React.useState(header.profileTab);
  const [type, setType] = React.useState<string>("Sales");

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    dispatch(setState({ profileTab: newValue }));
    setValue(newValue);
  };
  const handleType = (
    event: React.MouseEvent<HTMLElement>,
    newType: string
  ) => {
    setType((PrevVal) => (newType ? newType : PrevVal));
  };

  useEffect(() => {
    dispatch(setState({ prevValue: header.value, value: 0 }));
  }, []);

  const onClickSavedItem = (savedType: string) => {
    navigate("/view", {
      state: {
        type: savedType,
        item: savedType === "post" ? FavoritePost : FavoriteProduct,
        id: "1",
        editable: false,
      },
    });
  };

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        marginTop: "1%",
        position: "relative",
      }}
    >
      <Hidden mdDown>
        {value === 2 && (
          <Toggle
            type={type}
            handleType={handleType}
            className={classes.ToggleSwitch}
            components={ToggleComponents}
          />
        )}
      </Hidden>

      <Tabs value={value} onChange={handleChange} centered>
        <Tab
          label={
            <>
              <GridViewSharp fontSize="small" />
              <Typography sx={{ fontSize: 12, textTransform: "none" }}>
                Posts
              </Typography>
            </>
          }
        />
        <Tab
          label={
            <>
              <LoyaltySharp fontSize="small" />
              <Typography sx={{ fontSize: 12, textTransform: "none" }}>
                Sold
              </Typography>
            </>
          }
        />
        <Tab
          label={
            <>
              <BookmarkSharp fontSize="small" />
              <Typography sx={{ fontSize: 12, textTransform: "none" }}>
                Saved
              </Typography>
            </>
          }
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Hidden mdDown>
          <UserPosts dataItems={ProfilePosts} cols={4} view="md" />
        </Hidden>
        <Hidden mdUp>
          <UserPosts dataItems={ProfilePosts} cols={3} view="xs" />
        </Hidden>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Hidden mdDown>
          <UserSales dataItems={UserProducts} cols={4} view="md" />
        </Hidden>
        <Hidden mdUp>
          <UserSales dataItems={UserProducts} cols={3} view="xs" />
        </Hidden>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Hidden mdDown>
          <UserFavorites
            product={FavoriteProduct}
            post={FavoritePost}
            type={type}
            cols={4}
            view="md"
          />
        </Hidden>
        <Hidden mdUp>
          <ImageGroup
            sales={FavoriteProduct}
            posts={FavoritePost}
            onClick={onClickSavedItem}
          />
        </Hidden>
      </TabPanel>
    </Box>
  );
}

type ImageGroupProps = {
  posts: PostData[];
  sales: SalesData[];
  onClick: (type: string) => void;
};
const ImageGroup: FC<ImageGroupProps> = ({ posts, sales, onClick }) => {
  return (
    <Box
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <div style={{ cursor: "pointer" }} onClick={() => onClick("post")}>
        <ImageList cols={2} gap={0} sx={{ m: 1, border: 1, borderRadius: 2 }}>
          {posts.map((item, i) => {
            if (i < 4)
              return (
                <ImageListItem>
                  <img
                    src={`${item.images[0]}?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`${item.images[0]}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                    style={{ height: "5rem", width: "5rem" }}
                  />
                </ImageListItem>
              );
          })}
        </ImageList>
        <ImageListItemBar sx={{ mx: 2 }} position="below" title="All Post" />
      </div>
      <div style={{ cursor: "pointer" }} onClick={() => onClick("sale")}>
        <ImageList cols={2} gap={0} sx={{ m: 1, border: 1, borderRadius: 2 }}>
          {sales.map((item, i) => {
            if (i < 4)
              return (
                <ImageListItem>
                  <img
                    src={`${item.images[0]}?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`${item.images[0]}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                    style={{ height: "5rem", width: "5rem" }}
                  />
                </ImageListItem>
              );
          })}
        </ImageList>
        <ImageListItemBar sx={{ mx: 2 }} position="below" title="All Sales" />
      </div>
    </Box>
  );
};
const UserProfile = () => {
  const classes = useProfileStyles();
  return (
    <Box>
      <Hidden mdDown>
        <Box className={classes.root}>
          <ProfileCardMD />
        </Box>
      </Hidden>
      <Hidden mdUp>
        <Box className={classes.rootXS}>
          <ProfileCardXS />
        </Box>
      </Hidden>
      <GalleryTab />
    </Box>
  );
};

export default UserProfile;
