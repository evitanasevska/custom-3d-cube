import * as React from "react";
import { makeStyles } from "@mui/styles";
import Fab from "@mui/material/Fab";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Button } from "@mui/material";
import Cube from "./cube-component/Cube";
import DialogComponent from "./other-components/DialogComponent";
import GalleryDialog from "./other-components/GalleryDialog";

const color = "rgba(95, 54, 189, 0.4)";
const useStyles = makeStyles({
  center: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  boxCanvas: {
    width: 300,
    height: 300,
  },
  boxSide: {
    width: "100%",
    height: "100%",
    backgroundColor: color,
    boxShadow: "rgb(95, 54, 189) 0px 0px 0px 3px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  boxImageContainer: {
    width: 230,
    height: 230,
    backgroundColor: "white",
    borderRadius: 10,
    "& img": {
      objectFit: "contain",
    },
  },
  boxVideoContainer: {
    width: 230,
    height: 230,
  },
});

function App() {
  const classes = useStyles();
  const [openTextDialog, setOpenTextDialog] = React.useState(false);
  const [openGalleryDialog, setOpenGalleryDialog] = React.useState(false);

  const handleClickOpenTextDialog = () => {
    setOpenTextDialog(true);
  };

  const handleCloseTextDialog = () => {
    setOpenTextDialog(false);
  };

  const handleClickOpenGalleryDialog = () => {
    setOpenGalleryDialog(true);
  };

  const handleCloseGalleryDialog = () => {
    setOpenGalleryDialog(false);
  };

  return (
    <div className={classes.center}>
      <div className={classes.boxCanvas}>
        <Cube size={300} index="front">
          <div className={classes.boxSide}>
            <div className={classes.boxImageContainer}>
              <img src="/logo.png" alt="logo" />
            </div>
          </div>
          <div className={classes.boxSide}>
            <Fab
              color="secondary"
              target="_blank"
              href="https://www.facebook.com/theitlabs/"
            >
              <FacebookIcon style={{ color: "white" }} />
            </Fab>
          </div>
          <div className={classes.boxSide}>
            <div className={classes.boxVideoContainer}>
              <iframe
                width="230"
                height="230"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ borderRadius: 10 }}
              ></iframe>
            </div>
          </div>
          <div className={classes.boxSide}>
            <Fab
              color="secondary"
              target="_blank"
              href="https://www.linkedin.com/company/it-labs/"
            >
              <LinkedInIcon style={{ color: "white" }} />
            </Fab>
          </div>
          <div className={classes.boxSide}>
            <Button variant="contained" onClick={handleClickOpenTextDialog}>
              open dialog
            </Button>
          </div>
          <div className={classes.boxSide}>
            <Button variant="contained" onClick={handleClickOpenGalleryDialog}>
              view gallery
            </Button>
          </div>
        </Cube>
      </div>
      <DialogComponent
        open={openTextDialog}
        handleClose={handleCloseTextDialog}
      />
      <GalleryDialog
        open={openGalleryDialog}
        handleClose={handleCloseGalleryDialog}
      ></GalleryDialog>
    </div>
  );
}

export default App;
