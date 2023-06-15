import logo from './logo.svg';
import './App.css';

import React from 'react';
import Content from ".Content"
import Header from "./Header"
import Menu from "./Menu"
import Footer from "./Footer"

function App() {
  return (
    <div>
      <Header />
      <Menu />
        <Content />
      <Footer />
    </div>
  );
}

export default App;
