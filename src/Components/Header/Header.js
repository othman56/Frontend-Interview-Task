import React from "react";
import styled from "styled-components";
import Nav from "../Nav/Nav";

function Header() {
  return (
    <HeaderContainer>
      <Nav />
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
