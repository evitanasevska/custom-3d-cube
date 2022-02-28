import { Fab } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";

function Bottom(props) {
  const { classes } = props;
  return (
    <div>
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
  );
}

export default Bottom;
