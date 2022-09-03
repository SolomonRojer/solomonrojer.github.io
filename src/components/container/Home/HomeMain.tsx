import { Tabs, Box, Tab, Typography, Hidden } from "@mui/material";
import * as React from "react";
import { useCollectionStyles } from "./Product/HomeItemsStyle";
import { FilterNone } from "@material-ui/icons";
import { Star } from "@mui/icons-material";
import "./ScrollStyle.scss";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { selectData, setState } from "../../../store/Slice/NavigationSlice";

type HomeProps = {
  children: JSX.Element;
  className: string;
  type: "sale" | "post";
};

const HomeContainer: React.FC<HomeProps> = ({
  children,
  className,
  type = "sale",
}) => {
  const classes = useCollectionStyles();
  const header = useAppSelector(selectData);
  const dispatch = useAppDispatch();

  const [value, setValue] = React.useState<number>(0);

  React.useEffect(() => {
    dispatch(
      setState({
        prevValue: header.value,
        value: type === "sale" ? 1 : 2,
        headerTitle: type === "sale" ? "PetTech" : "Posts",
      })
    );
  }, [header, dispatch, type]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box className={classes.root}>
      <Hidden mdDown>
        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          className={classes.TabContainer}
        >
          <Tab
            label={<Typography sx={{ fontSize: 9 }}>All</Typography>}
            icon={<FilterNone fontSize="small" />}
            className={classes.Tab}
          />
          <Tab
            label={
              <Typography sx={{ fontSize: 9 }} color="info.main">
                Pet-tech
              </Typography>
            }
            icon={<Star color="warning" fontSize="small" />}
            className={classes.Tab}
          />
        </Tabs>
      </Hidden>
      <Box className={className}>{children}</Box>      
    </Box>
  );
};

export default HomeContainer;
