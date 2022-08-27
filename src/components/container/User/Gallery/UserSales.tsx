import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import {
  ImageListItemBar,
  IconButton,
  Typography,
  Fade,
  Chip,
  Avatar,
} from "@mui/material";
import { Delete, Edit, Star } from "@mui/icons-material";
import { useProfileStyles } from "../Profile/UserProfileStyle";
import { stringToColor } from "../../../../utils/common/StringToColor";
import type { UserSalesProps } from "./userDataProps";
import EditItem from "../EditSaleItem/EditItem";
import { SalesData } from "../../../../utils/common/PropTypes";
import { SaleInitialData } from "../../../../constants/Data/InitialData";
import { Link, useNavigate } from "react-router-dom";
import AlertDialog from "../../../presentational/AlertDialog/ConfirmationDialog";

const UserSales: React.FC<UserSalesProps> = ({
  typeOfItem = "usersale",
  dataItems = [],
  cols = 4,
  view = "md",
}) => {
  const classes = useProfileStyles();
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
  const [item, setItem] = React.useState<SalesData>(SaleInitialData);
  const [alertDialog, setAlertDialog] = React.useState(false);
  const [removeId, setRemoveId] = React.useState("");

  const onClickEdit = (item: SalesData) => {
    setOpen(true);
    setItem(item);
  };
  const RemovePostConfirmation = (id: string) => {
    setAlertDialog(true);
  };

  const RemovePost = () => {
    // remove with removeId
    setAlertDialog(false);
  };

  const handleOnClickProduct = (item: SalesData) => {
    view === "xs" &&
      navigate("/view", {
        state: { type: "sale", item: dataItems, id: "1", editable: true },
      });
  };

  return (
    <div>
      <ImageList
        sx={{
          width: "100%",
          overflowY: "hidden",
          marginBottom: view === "xs" ? "4rem" : 0,
        }}
        variant="quilted"
        cols={cols}
      >
        {dataItems.map((item, i) => (
          <Fade in={true} style={{ transitionDelay: `${100 * i}ms` }} key={i}>
            <ImageListItem key={item.title}>
              {view === "md" ? (
                <Link to={`/viewproduct_/${item.id}`} target="_blank">
                  <img
                    src={`${item.images[0]}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.images[0]}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                    style={{
                      cursor: "pointer",
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Link>
              ) : (
                <img
                  src={`${item.images[0]}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.images[0]}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    cursor: "pointer",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  onClick={() => handleOnClickProduct(item)}
                />
              )}
              {cols === 4 && (
                <ImageListItemBar
                  title={
                    <Typography
                      sx={{ fontSize: 11 }}
                      align={typeOfItem === "usersale" ? "left" : "right"}
                    >
                      {item.title}
                    </Typography>
                  }
                  subtitle={
                    <Typography
                      sx={{ fontSize: 13 }}
                      align={typeOfItem === "usersale" ? "left" : "right"}
                    >
                      {item.price}
                    </Typography>
                  }
                  position="bottom"
                  actionIcon={
                    typeOfItem === "usersale" ? (
                      <>
                        <IconButton
                          sx={{ color: "rgba(255,255,255,0.5)" }}
                          aria-label={`star ${item.title}`}
                          onClick={() => onClickEdit(item)}
                        >
                          <Edit />
                        </IconButton>
                        <IconButton
                          sx={{ color: "rgba(255,255,255,0.5)" }}
                          aria-label={`star ${item.title}`}
                          onClick={() => RemovePostConfirmation(item.title)}
                        >
                          <Delete />
                        </IconButton>
                      </>
                    ) : (
                      <Chip
                        onClick={() => navigate("/profile")}
                        style={{ cursor: "pointer" }}
                        avatar={
                          <Avatar
                            src={item?.profile}
                            alt={item?.author}
                            sx={{
                              bgcolor: stringToColor(item?.author as string),
                            }}
                          />
                        }
                        label={
                          <Typography
                            className={classes.UserName}
                            color="secondary"
                            sx={{
                              fontSize: 12,
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            {item?.userType === "admin" ? (
                              <>
                                <Typography
                                  sx={{ fontSize: 12 }}
                                  color="info.main"
                                >
                                  Pet-Tech
                                </Typography>
                                <Star sx={{ fontSize: 14 }} color="warning" />
                              </>
                            ) : (
                              item?.author
                            )}
                          </Typography>
                        }
                        sx={{ backgroundColor: "rgba(0,0,0,0.5)" }}
                      />
                    )
                  }
                  actionPosition={typeOfItem === "usersale" ? "right" : "left"}
                />
              )}
            </ImageListItem>
          </Fade>
        ))}
      </ImageList>
      {open && <EditItem open={open} setOpen={setOpen} item={item} />}
      {alertDialog && (
        <AlertDialog
          alertDialog={alertDialog}
          setAlertDialog={setAlertDialog}
          handleConfirm={RemovePost}
        />
      )}
    </div>
  );
};

export default UserSales;
