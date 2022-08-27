import {FC } from "react";
import {
  Avatar,
  IconButton,
  Box,
} from "@mui/material";
import { stringToColor } from "../../../utils/common/StringToColor";
import type {  
  ProfileProps,
} from "./CommonMenuPropsType";

const ProfileMenu: FC<ProfileProps> = ({ navigate }) => {
  return (
    <>
      <Box
        sx={{ marginInline: "2%" }}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <IconButton sx={{ p: 0 }} onClick={() => navigate("/profile")}>
          <Avatar
            sx={{ width: 30, height: 30, bgcolor: stringToColor("Remy Sharp")}}
            alt="Remy Sharp"
            src="/static/images/avatar/2.jpg"
          />
        </IconButton>
        {/* <Typography
          component="div"
          style={{
            fontSize: 11,
          }}
        >
          UserName
        </Typography> */}
      </Box>
    </>
  );
};

export default ProfileMenu

