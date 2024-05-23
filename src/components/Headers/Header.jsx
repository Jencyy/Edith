// Header.js
import React, { useEffect } from 'react';
import './Header.css';
import Nav from './Nav/Nav';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menu = ["Home", "Why Choose Us", "Courses", "Contact"]; // Update menu order

  return (
    <header className="header" data-aos="fade-down">
      <nav className="navbar navbar-expand-md navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand logo" href="#">
            {/* Logo */}
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto me-80">
              {menu.map((item, index) => (
                <Nav key={index} ele={item} onClick={() => {
                  if(item === 'Why Choose Us') { // If the menu item is "About Us"
                    scrollToSection('why-choose-us'); // Scroll to the 'WhyChooseUs' component
                  } else {
                    scrollToSection(item.toLowerCase().replace(' ', '-'));
                  }
                }} />
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
