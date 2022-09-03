import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import SignUp from "./SignUp/SignUp";
import Login from "./Login/Login";
import Home from "./Home/Home";
import toast, { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <BrowserRouter>
        <Container>
          <MainContent>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </MainContent>
        </Container>
      </BrowserRouter>
      <Toaster />
    </>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  margin: -10px;
  width: 100vw;
  overflow: hidden;
`;

const MainContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  padding: 2rem;
  color: white;
`;
