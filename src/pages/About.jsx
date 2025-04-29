import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>About Dumsday</h1>
        <p>Your go-to place for cool, curated products with a twist of personality.</p>
      </section>

      <section className="about-section">
        <h2>Our Story</h2>
        <p>
          Dumsday started with a simple idea: bring humor, creativity, and usefulness into everyday products.
          What began as a weekend project turned into a passion-driven venture.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          We aim to deliver quality items that don’t just serve a function—but make you smile, think, or
          laugh while doing it.
        </p>
      </section>

      <section className="about-section">
        <h2>Why Dumsday?</h2>
        <p>
          Because life’s too short to shop boring. Join the dums revolution—we’re weird in all the right ways.
        </p>
      </section>
    </div>
  );
};

export default About;