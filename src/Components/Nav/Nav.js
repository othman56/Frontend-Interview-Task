import React from "react";
import styled from "styled-components";
import Link from "../Link/Link";

function Nav() {
  const links = [
    { title: "Sign Up", id: 0, url: "/signup" },
    { title: "Login", id: 1, url: "/login" },
  ];
  return (
    <NavHolder>
      {links.map((link) => (
        <Link link={link} id={link.id} key={link.id} />
      ))}
    </NavHolder>
  );
}

export default Nav;

const NavHolder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 10em;

  > link {
    text-decoration: none;
  }
`;
