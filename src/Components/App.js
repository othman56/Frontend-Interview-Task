import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import SignUp from "./SignUp/SignUp";
import Login from "./Login/Login";
import Header from "./Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Header />

        <MainContent>
          <Routes>
            <Route path="/" exact element={<SignUp />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </MainContent>
      </Container>
    </BrowserRouter>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 24px;
  background-color: whitesmoke;
  padding: 1rem 0;
  margin: -10px;
`;

const MainContent = styled.div`
  background-color: white;
  height: 100vh;
`;
