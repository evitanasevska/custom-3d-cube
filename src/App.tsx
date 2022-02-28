import * as React from "react";
import { makeStyles } from "@mui/styles";
import Cube from "./cube-component/Cube";
import Front from "./cube-sides/Front";
import Right from "./cube-sides/Right";
import Back from "./cube-sides/Back";
import Left from "./cube-sides/Left";
import Top from "./cube-sides/Top";
import Bottom from "./cube-sides/Bottom";

const cubeSize = 350;
const cubeBackground = "rgba(237, 31, 36, 0.55)";
const cubeBorder = "rgba(237, 31, 36) 0px 0px 0px 3px";
const imgOverlay = "rgb(242, 232, 223, 0.2)";
const onHoverImgOverlay =
  "rgba(212,234,237, 0.16) 0px 1px 4px, rgb(242, 232, 223) 0px 0px 0px 3px;";

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
    backgroundColor: cubeBackground,
    boxShadow: cubeBorder,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  imgContainer: {
    position: "relative",
    display: "flex",
    width: 275,
    height: 225,
    borderRadius: 10,
    "& img": {
      objectFit: "cover",
      borderRadius: 10,
    },
  },
  imgOverlay: {
    position: "absolute",
    borderRadius: 10,
    zIndex: 1,
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor: imgOverlay,
    "&:hover": {
      boxShadow: onHoverImgOverlay,
    },
  },
  whiteJoeElliottButton: {
    backgroundColor: "white !important",
    width: 250,
    marginBottom: "5px !important",
  },
  redJoeElliottButton: {
    width: 250,
  },
  marginRight: {
    marginRight: "5px !important",
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <img className={classes.backgoundImg} src="/background.png" alt="logo" />
      <div className={classes.center}>
        <div className={classes.boxCanvas}>
          <Cube size={cubeSize} index="front">
            <div className={classes.boxSide}>
              <Front classes={classes} />
            </div>
            <div className={classes.boxSide}>
              <Right classes={classes} />
            </div>
            <div className={classes.boxSide}>
              <Back classes={classes} />
            </div>
            <div className={classes.boxSide}>
              <Left classes={classes} />
            </div>
            <div className={classes.boxSide}>
              <Top classes={classes} />
            </div>
            <div className={classes.boxSide}>
              <Bottom classes={classes} />
            </div>
          </Cube>
        </div>
      </div>
    </div>
  );
}

export default App;
