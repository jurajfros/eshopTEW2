import React, { useState, useEffect } from "react";

import Layout from "../components/organisms/Layout";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import CartButton from "../components/atoms/CartButton";
import Cards from "../components/organisms/Cards";
import Header from "../components/organisms/Header";
import Heading from "../components/organisms/Heading";
import Api from "../api/api";

const Cart = () => {
  useEffect(() => {
    (async function callhelp() {
      await helpme();
    })();
  });

  const [ItemData, setItemData] = useState({
    data: [],
    isLoading: false,
    error: "",
  });

  const helpme = async () => {
    const ids = window.localStorage.getItem("cart");
    try {
      const resa = await Api().get(`${ids}`);
      const data = resa.data;
      setItemData({
        ...ItemData,
        data,
        isLoading: false,
      });
    } catch ({ message }) {
      setItemData({
        ...ItemData,
        isLoading: false,
        error: message,
      });
    }
  };

  const renderCards = () => {
    const { isLoading, data, error } = ItemData;
    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>{error}</div>;
    }

    if (!data) {
      return <div>No item found!</div>;
    }

    if (window.localStorage.getItem("cart") === "") {
      return <div>Prázdný košík</div>;
    }

    return <Cards data={data} error={ItemData.error} />;
  };

  const handleEraseCart = () => {
    window.localStorage.setItem("cart", "");
    setItemData({
      ...ItemData,
      isLoading: false,
    });
  };

  return (
    <Layout>
      <Heading>
        <Header />
        <CartButton>
          <RemoveShoppingCartIcon fontSize="large" onClick={handleEraseCart} />
        </CartButton>
      </Heading>
      {renderCards()}
    </Layout>
  );
};

export default Cart;
