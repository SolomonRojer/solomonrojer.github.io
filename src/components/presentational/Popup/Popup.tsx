import React, { Dispatch, FC } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import { CloseRounded } from "@material-ui/icons";
import { Breakpoint } from "@mui/system";

type PopupDialogProps = {
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
  title?: string;
  actionName?: string;
  children?: React.ReactNode;
  disableAction?: boolean;
  fullScreen?: boolean;
  scroll?: "paper" | "body" | undefined;
  maxWidth?: Breakpoint | false;
  transparent?: boolean;
  headerIcon?: JSX.Element;
  headerTitle?: JSX.Element | string;
  headerAction?: () => void;
  disableCenter?: boolean;
};

const PopupDialog: FC<PopupDialogProps> = ({
  open,
  setOpen,
  title,
  actionName = "Ok",
  children,
  disableAction = false,
  fullScreen = false,
  scroll = "paper",
  maxWidth = "sm",
  transparent = false,
  headerTitle,
  headerIcon,
  headerAction,
  disableCenter,
}) => {
  const descriptionElementRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const headerActionHandle = () => {
    if (headerAction) headerAction();
    else setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      scroll={scroll}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
      fullScreen={fullScreen}
      maxWidth={maxWidth}
      PaperProps={
        transparent
          ? {
              style: {
                backgroundColor: "transparent",
                boxShadow: "none",
              },
            }
          : {}
      }
    >
      <DialogTitle id="scroll-dialog-title" style={{ fontWeight: "bold" }}>
        {headerTitle || title}
        <IconButton
          aria-label="close"
          onClick={headerActionHandle}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
          }}
          color={transparent ? "secondary" : "default"}
        >
          {headerIcon || <CloseRounded />}
        </IconButton>
      </DialogTitle>
      <DialogContent
        style={{
          alignItems: disableCenter ? "flex-start" : "center",
          justifyContent: "center",
          display: "flex",
          padding:0
        }}
      >
        {children}
      </DialogContent>
      {!disableAction && (
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={() => setOpen(false)}>{actionName}</Button>
        </DialogActions>
      )}
    </Dialog>
  );
};

export default PopupDialog;
