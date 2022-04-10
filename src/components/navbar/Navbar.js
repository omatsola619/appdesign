import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="navbar container">
      <div class="logo">
        <img src={Logo} alt="logo" />
        <h1 class="logo-text">BARBE & CIMON NOTAIRES</h1>
      </div>
      <nav>
        <div class="item">A PROPOS</div>
        <div class="item">NOS SERVICES</div>
        <div class="item">ARTICLES</div>
        <div class="item">CONTACT</div>
        <div class="item">EN</div>
      </nav>
      <div class="mobile-nav" onClick={toggle}>
        {isOpen ? <i class="fa fa-times"></i> : <i class="fa fa-bars"></i>}
      </div>
      {/*mobile navigation display */}

      <div className="mob-nav" style={{ display: isOpen ? "block" : "none" }}>
        <div class="item1">A PROPOS</div>
        <div class="item1">NOS SERVICES</div>
        <div class="item1">ARTICLES</div>
        <div class="item1">CONTACT</div>
        <div class="item1">EN</div>
      </div>
    </div>
  );
}

export default Navbar;
