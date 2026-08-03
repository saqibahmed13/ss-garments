import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

import "./AboutSection.css";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-section__container">

        {/* Left Image */}
        <div className="about-section__visual">
          <div className="about-section__image-placeholder">
            <span>SS</span>
            <p>Crafted with Care</p>
          </div>

          <div className="about-section__badge">
            <strong>Quality</strong>
            <span>In Every Stitch</span>
          </div>
        </div>

        {/* Right Content */}
        <div className="about-section__content">

          <span className="about-section__eyebrow">
            About SS Garments
          </span>

          <h2>
            Garments Made with
            <span> Purpose & Precision.</span>
          </h2>

          <p>
            At SS Garments, we focus on creating comfortable, durable and
            well-crafted garments for schools, institutions and special
            occasions.
          </p>

          <p>
            From everyday school uniforms to customized event wear, every
            garment is made with attention to fabric, fit and finishing.
          </p>

          <div className="about-section__features">
            <div>
              <strong>Premium</strong>
              <span>Fabric Selection</span>
            </div>

            <div>
              <strong>Custom</strong>
              <span>Design & Sizing</span>
            </div>

            <div>
              <strong>Reliable</strong>
              <span>Bulk Production</span>
            </div>
          </div>

          <Link to="/about" className="about-section__button">
            Discover Our Story
            <FaArrowRight />
          </Link>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;