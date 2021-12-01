import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
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

function CdcDialog(props: { open: boolean; handleClose: any }) {
  const classes = useStyles();
  const { open, handleClose } = props;
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogContent>
        <DialogContentText>
          <div className={classes.imageContainer}>
            <img src="left1.jpg" alt="" />
            <img src="left2.jpg" alt="" />
            <img src="left3.jpg" alt="" />
          </div>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={handleClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default CdcDialog;
