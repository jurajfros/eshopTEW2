import React from "react";

import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import CartButton from "../atoms/CartButton";

const EraseCart = () => {
  const handleEraseCart = () => {
    window.localStorage.setItem("cart", "");
  };

  return (
    <CartButton>
      <RemoveShoppingCartIcon />
    </CartButton>
  );
};

export default EraseCart;
