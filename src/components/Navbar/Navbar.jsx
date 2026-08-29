import { useEffect, useState } from "react";
import logo from "../../assets/images/newlogo2.png";
import "./Navbar.css";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        threshold: 0.3,
        rootMargin: "-80px 0px -40% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (section) => {
    setActiveSection(section);
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar__container">

        {/* Logo */}
        <a href="#home" className="navbar__logo">
          <img
            src={logo}
            alt="SS Garments"
            className="navbar__logo-image"
          />

          <div className="navbar__brand">
            <h1>GARMENTS</h1>
          </div>
        </a>

        {/* Mobile Menu Button */}
        <button
          className={`navbar__menu-button ${
            menuOpen ? "navbar__menu-button--open" : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation */}
        <nav
          className={`navbar__links ${
            menuOpen ? "navbar__links--open" : ""
          }`}
        >
          <a
            href="#home"
            className={activeSection === "home" ? "active" : ""}
            onClick={() => handleNavClick("home")}
          >
            Home
          </a>

          <a
            href="#about"
            className={activeSection === "about" ? "active" : ""}
            onClick={() => handleNavClick("about")}
          >
            About
          </a>

          <a
            href="#collections"
            className={activeSection === "collections" ? "active" : ""}
            onClick={() => handleNavClick("collections")}
          >
            Collections
          </a>

          <a
            href="#why-us"
            className={activeSection === "why-us" ? "active" : ""}
            onClick={() => handleNavClick("why-us")}
          >
            Why Us
          </a>

          <a
            href="#gallery"
            className={activeSection === "gallery" ? "active" : ""}
            onClick={() => handleNavClick("gallery")}
          >
            Gallery
          </a>

          <a
            href="#contact"
            className={activeSection === "contact" ? "active" : ""}
            onClick={() => handleNavClick("contact")}
          >
            Contact
          </a>
        </nav>

      </div>
    </header>
  );
};

export default Navbar;