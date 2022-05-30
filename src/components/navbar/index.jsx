import React from 'react';
import './navbar.css';
import { BiSearchAlt2 } from 'react-icons/bi';

function Navbar() {
  return (
    <div className="nav__container">
      <nav>
        <div className="logo">LAOS.</div>
        <ul className="link__wrapper">
          <li className="link__wrapper link__list">Home</li>
          <li className="link__wrapper link__list"> About</li>
          <li className="link__wrapper link__list"> Service</li>
          <li className="link__wrapper link__list">Doctors</li>
          <li className="link__wrapper link__list">Departments</li>
          <li className="link__wrapper link__list">Blog</li>
          <li className="link__wrapper link__list">Contact</li>
        </ul>
        <div className="icons">
          <BiSearchAlt2 />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
