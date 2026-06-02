import React from 'react';
import './Hero.css';
import logoUrl from '../assets/images/logo.png';

function Hero() {
  return (
    <>
      <section className="hero" id="home">
        <header className="hero-header">
          <div className="ct header-container">
            <img src={logoUrl} alt="Acutely AI Logo" className="logo" />
            <nav className="desktop-nav">
              <a href="#man-behind">Founder</a>
              <a href="#services">Services</a>
              <a href="#sample-concepts">Concepts</a>
              <a href="#process">Process</a>
              <a href="https://cal.com/lokesh-joshi/demo-call-30-min" target="_blank" rel="noopener noreferrer" className="contact-btn">Let's Talk</a>
            </nav>
          </div>
        </header>
        <div className="ct" style={{ width: '100%' }}>
          <div className="hero-g">
            <h1 className="ol rv v">Premium Website Designer in India</h1>
            <h2 className="hero-main rv v d1">
              Turn Your Website Into Your<br /><span>Best Salesperson.</span>
            </h2>
            <p className="hero-d rv v d2">
              <b>Acutely AI</b> designs high-converting, premium websites that help your business attract better clients and grow faster. No templates. No shortcuts. Just clean, premium websites that turn visitors into enquiries.
            </p>
            <div className="hero-bt rv v d3">
              <a className="cta" href="#risk-reversal">
                Get a Free Homepage Preview <i className="fas fa-arrow-right"></i>
              </a>
              <a className="ctb" href="#why-us">
                See Demo Work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGIC USP PLACEMENT 1 (HERO) */}
      <section className="usp-highlight rv v">
        <div className="ct">
          <div className="usp-card">
            <div className="usp-card-content">
              <div className="usp-icon"><i className="fas fa-gift"></i></div>
              <div className="usp-text">
                <h3>Try Before You Buy: Free Homepage Design</h3>
                <p>
                  Finding the right web designer is tough, so let me prove my skills upfront. Get a custom-designed homepage preview for your business <strong>completely free.</strong>
                </p>
              </div>
            </div>
            <div className="usp-btn-wrap">
              <a className="bp" href="#risk-reversal">Why It's 100% Risk-Free</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
