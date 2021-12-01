import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  boxVideoContainer: {
    width: "100%",
    height: 300,
  },
});

function VideoDialog(props: { open: boolean; handleClose: any }) {
  const classes = useStyles();
  const { open, handleClose } = props;
  return (
    <Dialog
      fullWidth
      maxWidth="sm"
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="alert-dialog-title">
        {"School Classrooms Reduce Pathogen Spread with UVC"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <div className={classes.boxVideoContainer}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/-430LhbUCr0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ borderRadius: 10 }}
            ></iframe>
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

export default VideoDialog;
