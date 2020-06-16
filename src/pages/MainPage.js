import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';

import Layout from "../components/organisms/Layout";
import SearchBar from "../components/molecules/SearchBar";
import Cards from "../components/organisms/Cards";
import Header from "../components/organisms/Header";
import Heading from "../components/organisms/Heading";
import GoToCart from "../components/molecules/GoToCart";
import AdminPageButton from "../components/atoms/AdminPageButton";
import Api from "../api/api";

const MainPage = () => {
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

  const [ItemName, setItemName] = useState("");

  const handleChange = (event) => setItemName(event.target.value);

  const handleSearchItem = async () => {
    try {
      setItemData({
        ...ItemData,
        isLoading: true,
      });
      const result = await Api().get(`${ItemName}`);
      const { data } = result;
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

  const helpme = async () => {
    try {
      const resa = await Api().get();
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

    return <Cards data={data} error={ItemData.error} />;
  };

  const { push } = useHistory();
  const goToAdminPage = () => {
    push(`/adminPage`);
  };

  return (
    <Layout>
      <Heading>
        <Header />
        <GoToCart />
        <SearchBar
          handleChange={handleChange}
          ItemName={ItemName}
          handleSearchItem={handleSearchItem}
        />
        <AdminPageButton onClick={goToAdminPage}>Admin Page</AdminPageButton>
      </Heading>
      {renderCards()}
    </Layout>
  );
};

export default MainPage;
