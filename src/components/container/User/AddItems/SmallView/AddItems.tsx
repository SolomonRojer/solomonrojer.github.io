import { CloseRounded, Done, East, West } from "@mui/icons-material";
import { Box, Checkbox, IconButton, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SalesData } from "../../../../../utils/common/PropTypes";
import PopupDialog from "../../../../presentational/Popup/Popup";
import PostOrSell from "./PostOrSell";

type SalesDataState = {
  item: SalesData;
};

const AddPostAndProduct: React.FC = (props) => {
  const descriptionElementRef = React.useRef<HTMLElement>(null);

  const [open, setOpen] = React.useState(true);
  const [value, setValue] = React.useState(false);
  const [count, setCount] = React.useState(0);

  const goBackNavigate = useNavigate();
  const location = useLocation();

  const state = location?.state
    ? (location?.state as SalesDataState)
    : undefined;

  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    } else {
      goBackNavigate(-1);
    }
  }, [open]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setValue(checked);
  };

  const headerActionLeft = () => {
    if (count === 0) setOpen(false);
    else setCount((prev) => prev - 1);
  };

  const headerActionRight = () => {
    if ((count === 1 && !value) || (count == 2 && value)) setOpen(false);
    else setCount((prev) => prev + 1);
  };

  useEffect(
    () => () => {
      setValue(false);
      setCount(0);
    },
    []
  );

  return (
    <PopupDialog
      open={open}
      setOpen={setOpen}
      headerTitle={
        <Typography
          style={{ display: "flex", alignItems: "center", fontWeight: "bold" }}
          variant="subtitle1"
        >
          <IconButton onClick={headerActionLeft}>
            {count === 0 ? (
              <CloseRounded fontSize="small" sx={{ marginRight: "5%" }} />
            ) : (
              <West fontSize="small" sx={{ marginRight: "5%" }} />
            )}
          </IconButton>
          {value ? "Sell Pet" : "New Post"}
        </Typography>
      }
      headerIcon={
        (count === 1 && !value) || (count == 2 && value) ? <Done /> : <East />
      }
      headerAction={headerActionRight}
      fullScreen
      disableAction
      disableCenter
    >
      <div style={{ width: "100%" }}>
        {count === 0 && (
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Box style={{ display: "flex", alignItems: "center" }}>
              <Checkbox onChange={handleChange} checked={value} />
              <Typography>Sell</Typography>
            </Box>
            <Typography color="text.secondary" variant="caption">
              Choose upto{" "}
              <span style={{ fontWeight: "bold", fontSize: 14 }}>
                {value ? 5 : 2}
              </span>{" "}
              pictures
            </Typography>
          </Box>
        )}
        <PostOrSell
          setOpen={setOpen}
          value={value}
          count={count}
          editItem={state?.item}
        />
      </div>
    </PopupDialog>
  );
};

export default AddPostAndProduct;
