import { AddRounded } from "@mui/icons-material";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import React, { Dispatch, FC } from "react";
import PopupDialog from "../../../../presentational/Popup/Popup";
import { TabPanelProps, AddPostAndProductProps } from "../AddItemProps";
import { useAddItemsStyle } from "../AddItemsStyle";
import SellPet from "./SellOrEditPet";
import SharePost from "./SharePost";

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
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const AddPostAndProduct: FC<AddPostAndProductProps> = ({
  open,
  setOpen,  
}) => {
  const classes = useAddItemsStyle();

  const descriptionElementRef = React.useRef<HTMLElement>(null);
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <PopupDialog
      open={open}
      setOpen={setOpen}
      title=""
      fullScreen
      transparent
      disableAction
    >
      <div>
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          className={classes.TabContainer}
        >
          <Tab
            label={
              <Typography variant="caption" className={classes.TabText}>
                <AddRounded fontSize="small" /> Post
              </Typography>
            }
          />
          <Tab
            label={
              <Typography variant="caption" className={classes.TabText}>
                <AddRounded fontSize="small" /> Sell
              </Typography>
            }
          />
        </Tabs>
        <TabPanel value={value} index={0}>
          <SharePost setOpen={setOpen} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <SellPet setOpen={setOpen} />
        </TabPanel>
      </div>
    </PopupDialog>
  );
};

export default AddPostAndProduct;
