// import React from 'react'
import { Element } from "react-scroll";
import Carousel from "./Carousel";
import About from "./About";
import Footer from "./Footer";
import Card from "./Card";

function Content() {
  return (
    <>
      <Carousel />
      <Element name="about donate" className="element">
        <About />
      </Element>
      <Element name="product" className="element">
        <Card />
      </Element>
      <Element name="contact" className="element">
        <Footer />
      </Element>
    </>
  );
}

export default Content;
