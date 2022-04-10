import React from 'react'
import './Header.css';
import Pen from "../../assets/pen.png";

function Header() {
  return (
    <div class="title">
    <div class="container">
      <div class="title-desc col-md-5">
        <div class="info">NOUS VALORISONS LA</div>
        <h2>CLARTE</h2>
        <p className="title-p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
          doloribus voluptatem tempore hic ex incidunt odio dolore ad
          ullam sequi fuga dolorum laboriosam rem eius, ipsa fugiat optio
          saepe voluptatum architecto.
        </p>
        <button class="act">En savior plus</button>
      </div>
      <div class="title-img col-md-8">
        <img src={Pen} alt="pen" />
      </div>
    </div>
  </div>
  )
}

export default Header