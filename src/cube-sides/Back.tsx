import { Button } from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

function Back(props) {
  const { classes } = props;
  return (
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
  );
}

export default Back;
