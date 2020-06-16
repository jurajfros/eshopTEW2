import React from "react";
import styled from "@emotion/styled";
import { useHistory } from "react-router-dom";

import ItemImg from "../atoms/ItemImg";
import Item from "../atoms/Item";
import NoImage from "./noimage.jpg";
import Title from "../atoms/Title";

const ItemWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Items = ({ data }) => {
  const { push } = useHistory();
  const handleGoToItemDetail = (itemId) => push(`/item/${itemId}`);

  return (
    <ItemWrapper>
      {data.map(({ productName, productId, img }) => (
        <Item key={productId}>
          <ItemImg
            key={productId}
            src={NoImage}
            width="240"
            height="330"
            onClick={() => handleGoToItemDetail(productId)}
          ></ItemImg>
          <Title onClick={() => handleGoToItemDetail(productId)}>
            {productName}
          </Title>
        </Item>
      ))}
    </ItemWrapper>
  );
};

export default Items;
