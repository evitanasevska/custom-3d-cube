import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  imageContainer: {
    width: "100%",
    height: "100%",
    "& img": {
      width: "100%",
    },
  },
});

export default function SpecificationDialog(props: {
  open: boolean;
  handleClose: any;
}) {
  const classes = useStyles();
  const { open, handleClose } = props;
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"UVC LED light specification"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <div className={classes.imageContainer}>
            <img src="bottom1.png" alt="" />
            <img src="bottom2.png" alt="" />
            <img src="bottom3.png" alt="" />
            <img src="bottom4.png" alt="" />
            <img src="bottom5.png" alt="" />
          </div>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="contained">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
