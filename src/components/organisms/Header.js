import styled from "@emotion/styled";
import React from "react";
import { useHistory } from "react-router-dom";

import Logo from "../molecules/Logo";

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Header = () => {
  const { push } = useHistory();
  const handleGoToHomepage = () => push("/");

  return (
    <HeaderWrapper>
      <Logo onClick={handleGoToHomepage} />
    </HeaderWrapper>
  );
};

export default Header;
