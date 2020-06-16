import React from "react";
import styled from "@emotion/styled";

import HeadingOne from "../atoms/HeadingOne";

const LogoWrapper = styled.div`
  cursor: pointer;
`;

const Logo = ({ onClick }) => {
  return (
    <LogoWrapper onClick={onClick}>
      <HeadingOne>FroloShop</HeadingOne>
    </LogoWrapper>
  );
};

export default Logo;
