import * as React from "react";
import { makeStyles } from "@mui/styles";
import { Button, Fab } from "@mui/material";
import Cube from "./cube-component/Cube";
import CollectionsIcon from "@mui/icons-material/Collections";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";

const color = "rgba(237, 31, 36, 0.55)";
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
    boxShadow: "rgba(237, 31, 36) 0px 0px 0px 3px",
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
    backgroundColor: "rgb(242, 232, 223, 0.2)",
    "&:hover": {
      boxShadow:
        "rgba(212,234,237, 0.16) 0px 1px 4px, rgb(242, 232, 223) 0px 0px 0px 3px;",
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
          <Cube size={350} index="front">
            <div className={classes.boxSide}>
              <div className={classes.imgContainer}>
                <img src="/front.png" alt="shop by design" />
                <div className={classes.imgOverlay}>
                  <div>
                    <Button
                      variant="contained"
                      startIcon={<ShoppingBagIcon />}
                      target="_blank"
                      href="https://icjuk.com/design/"
                    >
                      SHOP BY DESIGN
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.boxSide}>
              <div className={classes.imgContainer}>
                <img src="/right.jpg" alt="worn by joe elliott" />
                <div className={classes.imgOverlay}>
                  <div>
                    <Button
                      variant="outlined"
                      startIcon={<CollectionsIcon />}
                      target="_blank"
                      href="https://icjuk.com/design_categories/worn-by-joe-elliott/"
                      size="small"
                      className={classes.whiteJoeElliottButton}
                    >
                      WORN BY JOE ELLIOTT
                    </Button>
                    <Button
                      variant="contained"
                      startIcon={<ShoppingBagIcon />}
                      target="_blank"
                      href="https://icjuk.com/joe-elliott-icjuk-designs/"
                      size="small"
                      className={classes.redJoeElliottButton}
                    >
                      SHOP JOE ELLIOTT DESIGNS
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.boxSide}>
              <div className={classes.imgContainer}>
                <img src="/back.png" alt="shop on sale" />
                <div className={classes.imgOverlay}>
                  <div>
                    <Button
                      variant="contained"
                      startIcon={<ShoppingBagIcon />}
                      target="_blank"
                      href="https://icjuk.com/product-category/sale/"
                    >
                      ON SALE
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.boxSide}>
              <div className={classes.imgContainer}>
                <img src="/left.png" alt="shop bracelets" />
                <div className={classes.imgOverlay}>
                  <div>
                    <Button
                      variant="contained"
                      startIcon={<ShoppingBagIcon />}
                      target="_blank"
                      href="https://www.clairejaneart.com/collections"
                    >
                      SHOP BRACELETS
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.boxSide}>
              <div className={classes.imgContainer}>
                <img src="/top.jpg" alt="shop bracelets" />
                <div className={classes.imgOverlay}>
                  <div>
                    <Button
                      variant="contained"
                      target="_blank"
                      href="https://icjuk.com/about-claire-jane/"
                    >
                      ABOUT CLAIRE JANE
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.boxSide}>
              <Fab
                color="secondary"
                aria-label="facebook"
                target="_blank"
                href="https://www.facebook.com/ICJUK"
                className={classes.marginRight}
              >
                <FacebookIcon />
              </Fab>
              <Fab
                color="secondary"
                aria-label="instagram"
                target="_blank"
                href="https://www.instagram.com/icjuk/"
                className={classes.marginRight}
              >
                <InstagramIcon />
              </Fab>
              <Fab
                color="secondary"
                aria-label="pinterest"
                target="_blank"
                href="https://www.pinterest.com/inspiredbycj/_created/"
              >
                <PinterestIcon />
              </Fab>
            </div>
          </Cube>
        </div>
      </div>
    </div>
  );
}

export default App;
