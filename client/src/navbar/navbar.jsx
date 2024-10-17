import { useState } from 'react';
import { ThemeContext } from "../util/ThemeContext";
import { useContext } from "react";
import './Navbar.css';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <div className="logo">Tharu's</div>
      <ul className="nav-links">
        <li className={activeLink === 'home' ? 'active' : ''}>
          <a href="#home" onClick={() => setActiveLink('home')}>Home</a>
        </li>
        <li className={activeLink === 'about' ? 'active' : ''}>
          <a href="#about" onClick={() => setActiveLink('about')}>About</a>
        </li>
        <li className={activeLink === 'services' ? 'active' : ''}>
          <a href="#services" onClick={() => setActiveLink('services')}>Services</a>
        </li>
        <li className={activeLink === 'contact' ? 'active' : ''}>
          <a href="#contact" onClick={() => setActiveLink('contact')}>Contact</a>
        </li>
        <li>
        <button onClick={toggleTheme}>
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

