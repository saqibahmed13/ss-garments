import "./About.css";

import ownerImage from "../../assets/images/gallery/Owner.jpeg";

const About = () => {
  return (
    <section id="about" className="about">

      <div className="about__container">

        {/* ==========================
            Left - About Information
        ========================== */}

        <div className="about__content">

          <span className="about__eyebrow">
            About SS Garments
          </span>

          <h2 className="about__title">
            Experience you can
            <span> trust.</span>
          </h2>

          <p className="about__description">
            SS Garments is a garment manufacturing and tailoring business
            built on <strong>20+ years of experience</strong>, with a strong
            focus on quality, comfort, craftsmanship and customer
            satisfaction.
          </p>

          <p className="about__description">
            Our Founder &amp; Owner, <strong>Mohammed Inayath</strong>, brings
            valuable industry experience, including <strong>5 years of
            professional experience in Saudi Arabia</strong>.
          </p>

          <p className="about__description">
            We specialize in <strong>school uniforms, children's wear,
            adult garments, traditional and Indo-Western costumes</strong>.
            From everyday uniforms to festive, dance and special-event
            outfits, we provide customized garments to meet individual
            requirements.
          </p>

          <p className="about__description">
            With careful attention to fabrics, fitting, stitching and
            finishing, we aim to deliver garments that combine
            <strong> quality, comfort and style</strong>.
          </p>


          {/* Owner */}

          <div className="about__owner">

            <div className="about__owner-info">

              <strong>
                Mohammed Inayath
              </strong>

              <span>
                Founder &amp; Owner, SS Garments
              </span>

            </div>

          </div>


          {/* Highlights */}

          <div className="about__highlights">

            <div className="about__highlight">
              <strong>20+</strong>
              <span>Years Experience</span>
            </div>

            <div className="about__highlight">
              <strong>50+</strong>
              <span>Schools Served</span>
            </div>

            <div className="about__highlight">
              <strong>1000+</strong>
              <span>Customers</span>
            </div>

          </div>

        </div>


        {/* ==========================
            Right - Owner Photo
        ========================== */}

        <div className="about__owner-visual">

          <div className="about__owner-photo-wrapper">

            <img
              src={ownerImage}
              alt="Founder and Owner of SS Garments"
              className="about__owner-photo"
            />

          </div>

          <div className="about__experience-card">

            <strong>20+</strong>

            <span>
              Years of
              <br />
              Experience
            </span>

          </div>

        </div>

      </div>


      {/* ==========================
          Schools Section
      ========================== */}

      <div className="about__schools">

        <span className="about__schools-eyebrow">
          Trusted By
        </span>

        <h3 className="about__schools-title">
          Schools &amp; Institutions
        </h3>

        <p className="about__schools-description">
          Proud to serve schools and institutions with quality uniforms
          and customized garments.
        </p>

        <div className="about__school-list">

          <div className="about__school">
            Bethel Public School
          </div>
          
          <div className="about__school">
            King Kits Public School
          </div>

          <div className="about__school">
            Global Public School
          </div>

          <div className="about__school">
            SMS High School
          </div>

        </div>

      </div>

    </section>
  );
};

export default About;