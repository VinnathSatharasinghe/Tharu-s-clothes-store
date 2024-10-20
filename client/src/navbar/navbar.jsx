import { useState } from "react";
import { ThemeContext } from "../util/ThemeContext";
import { useContext } from "react";
import "./navbar.css";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const { theme, toggleTheme } = useContext(ThemeContext);

  const [active, setActive] = useState(false);
  const [active2, setActive2] = useState(false);

  window.addEventListener("scroll", function () {
    if (this.window.scrollY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  window.addEventListener("scroll", function () {
    if (this.window.scrollY > 70) {
      setActive2(true);
    } else {
      setActive2(false);
    }
  });

  return (
    <nav className="navbar">
      <header className={active ? "activenav" : ""}>
        <div className="logo">Tharu's</div>
        <ul className="nav-links">
          <li className={activeLink === "home" ? "active" : ""}>
            <a href="#home" onClick={() => setActiveLink("home")}>
              Home
            </a>
          </li>
          <li className={activeLink === "about" ? "active" : ""}>
            <a href="#about" onClick={() => setActiveLink("about")}>
              About
            </a>
          </li>
          <li className={activeLink === "services" ? "active" : ""}>
            <a href="#services" onClick={() => setActiveLink("services")}>
              Services
            </a>
          </li>
          <li className={activeLink === "contact" ? "active" : ""}>
            <a href="#contact" onClick={() => setActiveLink("contact")}>
              Contact
            </a>
          </li>
          <li>
            <button className="mode" onClick={toggleTheme}>
              {theme === "light" ? "Dark" : "Light"} Mode
            </button>
          </li>
        </ul>
      </header>

      <section className="secnav">
        <div className={active ? "secondnav" : ""}>
          <ul className="nav-links">
            <li className={activeLink === "home" ? "active2" : ""}>
              <a href="#home" onClick={() => setActiveLink("home")}>
                Home
              </a>
            </li>
            <li className={activeLink === "about" ? "active2" : ""}>
              <a href="#about" onClick={() => setActiveLink("about")}>
                About
              </a>
            </li>
            <li className={activeLink === "services" ? "active2" : ""}>
              <a href="#services" onClick={() => setActiveLink("services")}>
                Services
              </a>
            </li>
            <li className={activeLink === "contact" ? "active2" : ""}>
              <a href="#contact" onClick={() => setActiveLink("contact")}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
