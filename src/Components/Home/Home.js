import React from "react";
import styled from "styled-components";
import Nav from "../Nav/Nav";

function Home() {
  return (
    <Wrapper>
      <Title>welcome to the dashboard</Title>
      <Nav />
    </Wrapper>
  );
}

export default Home;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 20vh;
  width: 100vw;
  overflow: hidden;
  background-color: blue;
`;

const Title = styled.h1`
  font-family: Inter;
`;
