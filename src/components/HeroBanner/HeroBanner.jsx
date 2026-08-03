import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

import "./HeroBanner.css";

const HeroBanner = () => {
  return (
    <section className="hero">
      <div className="hero__container">

        {/* Left Content */}
        <div className="hero__content">

          <span className="hero__eyebrow">
            Crafted for Every Moment
          </span>

          <h1 className="hero__title">
            Quality You Can Feel.
            <span> Crafted to Last.</span>
          </h1>

          <p className="hero__description">
            Premium school uniforms, cultural wear, and custom garments
            crafted with quality fabrics, comfort, and attention to every
            stitch.
          </p>

          <div className="hero__actions">

            <Link
              to="/products"
              className="hero__primary-btn"
            >
              Explore Collection
              <FaArrowRight />
            </Link>

            <Link
              to="/contact"
              className="hero__secondary-btn"
            >
              Contact Us
            </Link>

          </div>

          {/* Small trust indicators */}
          <div className="hero__highlights">

            <div className="hero__highlight">
              <strong>Quality</strong>
              <span>Premium Fabrics</span>
            </div>

            <div className="hero__divider"></div>

            <div className="hero__highlight">
              <strong>Custom</strong>
              <span>Tailored Orders</span>
            </div>

            <div className="hero__divider"></div>

            <div className="hero__highlight">
              <strong>Bulk</strong>
              <span>School Orders</span>
            </div>

          </div>

        </div>

        {/* Right Visual */}
        <div className="hero__visual">

          <div className="hero__image-placeholder">
            <span>SS</span>

            <p>
              Garment Image
            </p>
          </div>

          {/* Decorative element */}
          <div className="hero__shape hero__shape--one"></div>
          <div className="hero__shape hero__shape--two"></div>

        </div>

      </div>
    </section>
  );
};

export default HeroBanner;