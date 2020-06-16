import React from "react";
import { useHistory } from "react-router-dom";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import CartButton from "../atoms/CartButton";

const GoToCart = () => {
  const { push } = useHistory();
  const handleGoToCart = () => push("/cart");

  return (
    <CartButton>
      <ShoppingCartIcon fontSize="large" onClick={handleGoToCart} />
    </CartButton>
  );
};

export default GoToCart;
