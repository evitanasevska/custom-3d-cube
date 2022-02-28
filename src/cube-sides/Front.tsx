import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Button } from "@mui/material";

function Front(props) {
  const {classes} = props;
  
  return (
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
  );
}

export default Front;
