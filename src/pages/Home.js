import React from "react";
import "../pages/Home.css";
import coffeeImage from "../assets/coffee.jpg";
import cafeImage from "../assets/cafe.jpg";

const Hero = () => {
    return (
      <section
        className="hero"
        style={{ backgroundImage: `url(${coffeeImage})` }}
      >
        
        <div className="hero-box overlay-box">
          <h1 className="hero-title">
            Welcome to <span className="highlight">Cafe Central</span>
          </h1>
          <p className="hero-subtitle">Your one stop place to search for cafes</p>
        </div>
  
        
        <div className="hero-container">
          {/* Box 1 */}
          <div className="hero-box hover-box">
            <div className="hero-text">
              <h2>Looking for a place to chill?</h2>
              <p>Check out the listed cafes below</p>
              <button
                onClick={() => (window.location.href = "/cafe-search")}
                className="explore-btn"
              >
                Explore Cafes
              </button>
            </div>
            <img src={coffeeImage} alt="coffee" />
          </div>
  
          {/* Box 2 */}
          <div className="hero-box hover-box">
            <img src={cafeImage} alt="cafe" />
            <div className="hero-text">
              <h2>Cafe Central</h2>
              <p>
                Cafe Central is a simple webpage that helps you find the perfect
                cafe to chill. Browse by mood, taste, and location – it’s that
                easy.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  export default Hero;
  