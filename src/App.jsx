import React from "react";
import styled from "styled-components";
import BgImg from "./assets/bg.png";
import Main from "./components/Main";
import SideBar from "./components/SideBar";

function App() {
  return (
    <Container>
      <Wrapper>
       <SideBar />
       <Main />
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  background: #eefcff;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  
`;
const Wrapper = styled.div`
  background-image: url(${BgImg});
  width:100%;
  height:100%;
  background-size:cover;
  background-repeat:no-repeat;
  display:flex;
`;

export default App;
