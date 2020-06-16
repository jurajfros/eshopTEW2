import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import CartButton from "../components/atoms/CartButton";
import Details from "../components/organisms/Details";
import Layout from "../components/organisms/Layout";
import Header from "../components/organisms/Header";
import Heading from "../components/organisms/Heading";
import GoToCart from "../components/molecules/GoToCart";
import Api from "../api/api";

const ItemDetail = () => {
  const { itemId } = useParams();

  useEffect(() => {
    (async function callhelp() {
      await helpme();
    })();
  }, []);

  const [ItemData, setItemData] = useState({
    data: [],
    isLoading: false,
    error: "",
  });

  const helpme = async () => {
    try {
      const resa = await Api().get(`${itemId}`);
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

  const addToCart = () => {
    if (window.localStorage.getItem("cart") === null) {
      window.localStorage.setItem("cart", itemId);
    } else {
      window.localStorage.setItem(
        "cart",
        window.localStorage.getItem("cart") + ";" + itemId
      );
    }
  };

  const renderDetails = () => {
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

    return <Details data={data} error={ItemData.error} />;
  };

  return (
    <Layout>
      <Heading>
        <Header />
        <GoToCart />
      </Heading>
      {renderDetails()}
      <CartButton>
        <AddShoppingCartIcon fontSize="large" onClick={addToCart} />
      </CartButton>
    </Layout>
  );
};
export default ItemDetail;
