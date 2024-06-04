import React, { useEffect } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from '../../assets/img/logo.png';

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const menu = [
    { name: "Home", path: "/" },
    { name: "Why Choose Us", path: "/why-choose-us" },
    { name: "Courses", path: "/courses" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <header className="header" data-aos="fade-down">
      <nav className="navbar navbar-expand-md navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand logo" to="/">
            <img src={logo} alt="Logo" className='logo-img' />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto me-80">
              {menu.map((item, index) => (
                <li className="nav-item" key={index}>
                  <Link className="nav-link" to={item.path}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
