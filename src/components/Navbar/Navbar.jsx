import { FaWhatsapp } from "react-icons/fa";

import logo from "../../assets/images/ss-garments1.png";

import "./Navbar.css";

const Navbar = () => {
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
            <span>Quality in Every Stitch</span>
          </div>
        </a>

        {/* Navigation */}
        <nav className="navbar__links">

          <a href="#home">Home</a>

          <a href="#about">About</a>

          <a href="#collections">Collections</a>

          <a href="#why-us">Why Us</a>

          <a href="#gallery">Gallery</a>

          <a href="#contact">Contact</a>

        </nav>

        {/* WhatsApp */}
        <a
          href="https://wa.me/YOUR_NUMBER"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar__whatsapp"
        >
          <FaWhatsapp />
          <span>WhatsApp</span>
        </a>

      </div>

    </header>
  );
};

export default Navbar;