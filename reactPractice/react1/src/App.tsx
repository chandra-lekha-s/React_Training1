import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Message from "./Component/Message";
import Header from "./Component/Header";
import Menu from "./Component/Menu";
import Content from "./Component/Content";
import Footer from "./Component/Footer";

function App() {
  return (
    <section>
      <Header></Header>
      <Menu></Menu>
      <section>
        <Message></Message>
        <Content></Content>
      </section>
      <Footer></Footer>
    </section>
  );
}

export default App;
