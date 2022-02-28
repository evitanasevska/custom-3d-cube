import { Button } from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

function Left(props) {
  const { classes } = props;
  return (
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
  );
}

export default Left;
