import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
function Link({ link }) {
  return (
    <NavHolder>
      <NavLink to={link.url} className="link">
        {link.title}
      </NavLink>
    </NavHolder>
  );
}

export default Link;

const NavHolder = styled.div``;
