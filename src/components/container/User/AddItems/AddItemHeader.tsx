import React from "react";
import { CardHeader, IconButton, Avatar, Button } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { stringToColor } from "../../../../utils/common/StringToColor";
import { AddItemsHeaderProps } from "./AddItemProps";

const AddItemHeader: React.FC<AddItemsHeaderProps> = ({
  setOpen,
  user,
  type,
  setNext,
  RemovePostConfirmation,
  itemId = "",
  next = false,
}) => {
  return (
    <CardHeader
      avatar={
        <IconButton onClick={() => alert("Profile")}>
          <Avatar
            sx={{
              width: 30,
              height: 30,
              bgcolor: stringToColor(user.userName),
            }}
            alt="UserName"
            src={user.profile}
          />
        </IconButton>
      }
      action={
        type === "post" ? (
          <Button color="primary" onClick={() => setOpen(false)}>
            Post
          </Button>
        ) : (
          <>
            {setNext && (
              <Button color="primary" onClick={() => setNext(!next)}>
                {next ? "Prev" : "Next"}
              </Button>
            )}
            {next && (
              <Button color="primary" onClick={() => setOpen(false)}>
                {itemId ? "Save Changes" : "SELL"}
              </Button>
            )}
            {itemId && RemovePostConfirmation && (
              <IconButton onClick={() => RemovePostConfirmation(itemId)}>
                <Delete fontSize="small" color="error" />
              </IconButton>
            )}
          </>
        )
      }
      title={user.userId}
      style={{ height: "3rem" }}
    />
  );
};

export default AddItemHeader;
