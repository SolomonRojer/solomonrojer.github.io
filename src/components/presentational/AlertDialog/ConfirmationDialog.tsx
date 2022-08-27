import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { DeleteForever } from "@mui/icons-material";

type AlertDialogProps = {
  alertDialog: boolean;
  setAlertDialog: React.Dispatch<React.SetStateAction<boolean>>;
  handleConfirm: () => void;
};

export const AlertDialog: React.FC<AlertDialogProps> = ({
  alertDialog,
  setAlertDialog,
  handleConfirm,
}) => {
  return (
    <div>
      <Dialog
        open={alertDialog}
        onClose={() => setAlertDialog(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth='xs'
      >
        <DialogTitle id="alert-dialog-title">Delete this Pet?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You won't be able to restore this pet. It will be permenently
            deleted.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setAlertDialog(false)}>Don't Delete</Button>
          <Button onClick={handleConfirm} autoFocus color="error">
            <DeleteForever />
            Remove
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AlertDialog;
