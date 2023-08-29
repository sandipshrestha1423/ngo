// import React from 'react'
import { Link } from "react-scroll";

function Header() {
  return (
    <>
      <div className="header">
        <div className="logo">
          <p>
            Go<span>Green</span>
          </p>
        </div>
        <div className="nav">
          <Link to="home" spy={true} smooth={true} offset={0} duration={300}>
            Home
          </Link>
          <Link to="about" spy={true} smooth={true} offset={0} duration={300}>
            About
          </Link>
          <Link to="about" spy={true} smooth={true} offset={0} duration={300}>
            Donate
          </Link>
          <Link to="product" spy={true} smooth={true} offset={0} duration={300}>
            Product
          </Link>
          <Link to="contact" spy={true} smooth={true} offset={0} duration={500}>
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
