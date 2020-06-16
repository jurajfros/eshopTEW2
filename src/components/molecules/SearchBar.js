import React from "react";
import styled from "@emotion/styled";

import Button from "../atoms/Button";
import Input from "../atoms/Input";

const SearchBarWrapper = styled.div`
  display: flex;
`;

const SearchBar = ({ handleChange, ItemName, handleSearchItem }) => {
  return (
    <SearchBarWrapper>
      <Input type="text" onChange={handleChange} value={ItemName} />
      <Button onClick={handleSearchItem}>Search Item</Button>
    </SearchBarWrapper>
  );
};

export default SearchBar;
