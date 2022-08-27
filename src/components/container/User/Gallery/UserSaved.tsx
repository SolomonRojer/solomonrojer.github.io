import React, { FC } from "react";
import { Box } from "@mui/material";
import UserPosts from "./UserPosts";
import UserSales from "./UserSales";
import { UserFavoritesProps } from "./userDataProps";

const UserFavorites: FC<UserFavoritesProps> = ({
  post,
  product,
  type = "Sales",
  cols = 4,
  view = "md",
}) => {
  return (
    <Box>
      {type === "Sales" && (
        <UserSales
          typeOfItem="favorites"
          dataItems={product}
          cols={cols}
          view={view}
        />
      )}
      {type === "Posts" && (
        <UserPosts
          typeOfItem="favorites"
          dataItems={post}
          cols={cols}
          view={view}
        />
      )}
    </Box>
  );
};

export default UserFavorites;
