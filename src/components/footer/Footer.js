import React from "react";
import "./Footer.css";
import Logo from "../../assets/logo.png";

function Footer() {
  return (
    <footer>
      <div class="container footer-cover">
        <div class="footer-left">
          <img src={Logo} alt="" />
          <div class="logo-text">BARBE & CIMON NOTAIRES</div>
        </div>
        <div class="footer-right">
          <div class="links">
            <div>A PROPOS</div>
            <div>NON SERVICES</div>
            <div>ARTICLES</div>
            <div>CONTACT</div>
          </div>
          <div class="address">
            <h3>BUREAU</h3>
            <p>
              101 BOULEVARD SANIT <br /> JOSEPH O, MONTREAL, QC <br /> H2T 2P7
            </p>
            <h3>NOUS SUIVRE</h3>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
