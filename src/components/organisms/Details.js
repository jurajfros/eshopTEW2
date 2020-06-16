import React from "react";
import styled from "@emotion/styled";

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
  return (
    <ItemWrapper>
      {data.map(({ productName, productId, img, description, piecePrice }) => (
        <Item key={productId}>
          <ItemImg
            key={productId}
            src={NoImage}
            width="240"
            height="330"
          ></ItemImg>
          <Title>{productName}</Title>
        </Item>
      ))}
    </ItemWrapper>
  );
};

export default Items;
