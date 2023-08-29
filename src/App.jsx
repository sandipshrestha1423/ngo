// import React from 'react'
import { Element } from "react-scroll";
import "./style.scss";
import Header from "./Header";
import Content from "./Content/Content";

function App() {
  return (
    <>
      <Header />
      <Element name="home" className="element">
        <Content />
      </Element>
    </>
  );
}

export default App;
