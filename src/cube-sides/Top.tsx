import { Button } from "@mui/material";
import React from "react";

function Top(props) {
  const { classes } = props;
  return (
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
  );
}

export default Top;
