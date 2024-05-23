// components/Nav.js
import React from 'react';


const Nav = ({ ele, onClick }) => {
  return (
    <li className="nav-item m-10">
      <a href="#" className="nav-link" onClick={onClick}>
        {ele}
      </a>
    </li>
  );
};

export default Nav;
