import { useState } from "react";
import reactLogo from "./assets/react.svg";
// import "./App.css";

import "bootstrap/dist/css/bootstrap.css";

import Message from "./Component/Message";
import Header from "./Component/Header";
import Menu from "./Component/Menu";
import Content from "./Component/Content";
import Footer from "./Component/Footer";

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <section>
        <Message />
        <Content />
      </section>
      <Footer />
    </div>
  );
}

export default App;
