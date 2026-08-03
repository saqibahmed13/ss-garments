import { FaWhatsapp } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

import "./ContactCTA.css";

const ContactCTA = () => {
  return (
    <section className="contact-cta">
      <div className="contact-cta__container">
        <div className="contact-cta__content">
          <span className="contact-cta__eyebrow">
            Bulk & Custom Orders
          </span>

          <h2>
            Looking for Uniforms for Your
            <span> School or Event?</span>
          </h2>

          <p>
            Get in touch with SS Garments for school uniforms, cultural
            event wear, custom designs and bulk garment requirements.
          </p>
        </div>

        <div className="contact-cta__actions">
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-cta__whatsapp"
          >
            <FaWhatsapp />
            Chat on WhatsApp
          </a>

          <a href="/contact" className="contact-cta__contact">
            Contact Us
            <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;