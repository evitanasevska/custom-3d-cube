import * as React from "react";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
import Cube from "./cube-component/Cube";
import SpecificationDialog from "./other-components/SpecificationDialog";
import CdcDialog from "./other-components/CdcDialog";
import VideoDialog from "./other-components/VideoDialog";
import CollectionsIcon from "@mui/icons-material/Collections";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

const color = "rgba(36,47,57, 0.55)";
const useStyles = makeStyles({
  container: {
    width: "100%",
    height: "100%",
  },
  backgoundImg: {
    width: "100%",
    height: "100%",
    position: "absolute",
    objectFit: "cover",
  },
  center: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  boxCanvas: {
    width: 350,
    height: 350,
  },
  boxSide: {
    width: "100%",
    height: "100%",
    backgroundColor: color,
    boxShadow: "rgba(36,47,57) 0px 0px 0px 3px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  boxImageContainer: {
    width: 300,
    borderRadius: 10,
    "& img": {
      objectFit: "contain",
      borderRadius: 10,
      "&:hover": {
        boxShadow:
          "rgba(212,234,237, 0.16) 0px 1px 4px, rgb(212,234,237) 0px 0px 0px 3px;",
        cursor: "pointer",
      },
    },
  },
  notClickable: {
    boxShadow: "none !important",
    cursor: "default !important",
  },
  galleryContainer: {
    position: "relative",
    display: "flex",
    width: 300,
    height: 175,
    borderRadius: 10,
    "& img": {
      objectFit: "cover",
      borderRadius: 10,
    },
  },
  galleryOverlay: {
    position: "absolute",
    borderRadius: 10,
    zIndex: 1,
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(212,234,237, 0.3)",
    "&:hover": {
      backgroundColor: "rgba(212,234,237, 0.4)",
      cursor: "pointer",
      boxShadow:
        "rgba(212,234,237, 0.16) 0px 1px 4px, rgb(212,234,237) 0px 0px 0px 3px;",
    },
  },
});

function App() {
  const classes = useStyles();
  const [openSpecificationDialog, setOpenSpecificationDialog] =
    React.useState(false);
  const [openCdcDialog, setOpenCdcDialog] = React.useState(false);
  const [openVideoDialog, setOpenVideoDialog] = React.useState(false);

  const handleClickOpenSpecificationDialog = () => {
    setOpenSpecificationDialog(true);
  };

  const handleCloseSpecificationDialog = () => {
    setOpenSpecificationDialog(false);
  };

  const handleClickOpenVideoDialog = () => {
    setOpenVideoDialog(true);
  };

  const handleCloseVideoDialog = () => {
    setOpenVideoDialog(false);
  };

  const handleClickOpenCdcDialog = () => {
    setOpenCdcDialog(true);
  };

  const handleCloseCdcDialog = () => {
    setOpenCdcDialog(false);
  };

  return (
    <div className={classes.container}>
      <img className={classes.backgoundImg} src="/background.png" alt="logo" />
      <div className={classes.center}>
        <div className={classes.boxCanvas}>
          <Cube size={350} index="front">
            <div className={classes.boxSide}>
              <div className={classes.boxImageContainer}>
                <a
                  href="https://www.uvclc.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/front.png" alt="logo" />
                </a>
              </div>
            </div>
            <div className={classes.boxSide}>
              <div className={classes.boxImageContainer}>
                <a
                  href="https://www.uvclc.com/features"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/right.png" alt="logo" />
                </a>
              </div>
            </div>
            <div className={classes.boxSide}>
              <div className={classes.boxImageContainer}>
                <img
                  className={classes.notClickable}
                  src="/back.png"
                  alt="logo"
                />
              </div>
            </div>
            <div className={classes.boxSide}>
              <div className={classes.galleryContainer}>
                <img src="/left1.jpg" alt="logo" />
                <div
                  className={classes.galleryOverlay}
                  onClick={handleClickOpenCdcDialog}
                >
                  <div>
                    <Button
                      variant="contained"
                      onClick={handleClickOpenCdcDialog}
                      startIcon={<CollectionsIcon />}
                    >
                      view cdc reports
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.boxSide}>
              <div className={classes.galleryContainer}>
                <img src="/top.png" alt="logo" />
                <div
                  className={classes.galleryOverlay}
                  onClick={handleClickOpenVideoDialog}
                >
                  <div>
                    <Button
                      variant="contained"
                      onClick={handleClickOpenVideoDialog}
                      startIcon={<PlayCircleIcon />}
                    >
                      watch video
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.boxSide}>
              <div className={classes.galleryContainer}>
                <img src="/bottom.png" alt="logo" />
                <div
                  className={classes.galleryOverlay}
                  onClick={handleClickOpenSpecificationDialog}
                >
                  <div>
                    <Button
                      variant="contained"
                      onClick={handleClickOpenSpecificationDialog}
                      startIcon={<CollectionsBookmarkIcon />}
                    >
                      uvc led light specification
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Cube>
        </div>
        <SpecificationDialog
          open={openSpecificationDialog}
          handleClose={handleCloseSpecificationDialog}
        />
        <CdcDialog open={openCdcDialog} handleClose={handleCloseCdcDialog} />
        <VideoDialog
          open={openVideoDialog}
          handleClose={handleCloseVideoDialog}
        />
      </div>
    </div>
  );
}

export default App;
