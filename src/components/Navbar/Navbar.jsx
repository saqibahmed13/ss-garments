import { NavLink } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

import logo from "../../assets/images/ss-garments2.png";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__container">
                {/* Logo */}
                <NavLink to="/" className="navbar__logo">
                    <img
                        src={logo}
                        alt="SS Garments Logo"
                        className="navbar__logo-image"
                    />
                </NavLink>

                {/* Navigation */}
                <ul className="navbar__links">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"
                            }
                        >
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/products"
                            className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"
                            }
                        >
                            Products
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/gallery"
                            className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"
                            }
                        >
                            Gallery
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"
                            }
                        >
                            About
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"
                            }
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>

                {/* CTA */}
                <div className="navbar__actions">
                    <button className="whatsapp-btn">
                        <FaWhatsapp />
                        WhatsApp
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;