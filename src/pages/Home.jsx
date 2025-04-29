import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";

function Home() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        closeMenu();
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className="home-page">
      <section className="home-hero">
        <div className="hero-overlay">
          <div className="hero-top-bar" ref={menuRef}>
            <div className="logo">Dumsday</div>
            <div className={`nav-links ${menuOpen ? "open" : ""}`}>
              <Link to="/" onClick={closeMenu}>Home</Link>
              <Link to="/products" onClick={closeMenu}>Products</Link>
              <Link to="/about" onClick={closeMenu}>About</Link>
              <Link to="/contact" onClick={closeMenu}>Contact</Link>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </div>

          <div className="hero-content">
            <h1>Welcome to Dumsday</h1>
            <button onClick={() => navigate("/products")}>Explore Products</button>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-item">Fast & Reliable</div>
          <div className="feature-item">Modern Design</div>
          <div className="feature-item">User Focused</div>
        </div>
      </section>

      <section className="about-preview">
        <h2>Who We Are</h2>
        <p>At Dumsday, we're all about building smart, useful things that make life easier.</p>
        <button className="cta-button" onClick={() => navigate("/about")}>Learn More</button>
      </section>

      <section className="reviews">
  <h2>What Our Customers Say</h2>
  <Slider
    dots={true}
    infinite={true}
    speed={500}
    slidesToShow={1}
    slidesToScroll={1}
    autoplay={true}
    autoplaySpeed={3000}
  >
    <div className="review-card">
      <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Customer 1" />
      <p>"Dumsday made my life so much easier. Highly recommend!"</p>
      <h4>- John Doe</h4>
    </div>
    <div className="review-card">
      <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="Customer 2" />
      <p>"Great service and beautiful design. Will come back again!"</p>
      <h4>- Sarah Lee</h4>
    </div>
    <div className="review-card">
      <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="Customer 3" />
      <p>"Fast, reliable, and user-friendly. Couldn't ask for more."</p>
      <h4>- Mike Johnson</h4>
    </div>
  </Slider>
</section>
    </div>
  );
}

export default Home;