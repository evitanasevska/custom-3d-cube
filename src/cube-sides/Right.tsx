import { Button } from "@mui/material";
import CollectionsIcon from "@mui/icons-material/Collections";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

function Right(props) {
  const { classes } = props;
  return (
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
  );
}

export default Right;
