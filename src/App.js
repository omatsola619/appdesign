import React from "react";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import House from "./assets/bg-houses.png";
import Footer from "./components/footer/Footer";
import Article from "./components/article/Article";
import Services from "./components/services/Services";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="app">
      <Navbar />
      {/*main content starts here */}
      <main>
        <Header />
        {/*house image section */}
        <div class="house">
          <img src={House} alt="house" />
        </div>
        {/*services section */}
        <Services />
        {/*articles section */}
        <Article />
        {/*footer section */}
        <Footer />
      </main>
    </div>
  );
}

export default App;
