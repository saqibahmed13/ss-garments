import "./About.css";

import ownerImage from "../../assets/images/gallery/Owner.jpeg";

const About = () => {
  return (
    <section id="about" className="about">

      <div className="about__container">

        {/* ==========================
            Left - Owner Information
        ========================== */}

        <div className="about__content">

          <span className="about__eyebrow">
            About SS Garments
          </span>

          <h2 className="about__title">
            Experience you can
            <span>trust.</span>
          </h2>

          <p className="about__description">
            SS Garments is built on years of experience in garment
            manufacturing and tailoring, with a strong focus on quality,
            comfort and customer satisfaction.
          </p>

          <p className="about__description">
            Our Founder &amp; Owner, <strong>Mohammed Inayath</strong>, brings
            extensive experience from the garment industry, including
            <strong> 5 years of professional experience in Saudi Arabia</strong>.
            This international experience has helped build a strong
            understanding of garment quality, craftsmanship, fabrics,
            finishing and customer requirements.
          </p>

          <p className="about__description">
            We specialize in manufacturing <strong>school uniforms,
              children's wear and adult garments</strong>, serving schools,
            institutions, families and individual customers with carefully
            crafted clothing for everyday and special occasions.
          </p>

          <p className="about__description">
            We also create a wide range of <strong>traditional, ethnic and
              Indo-Western costumes</strong> for children and adults. Our
            collection includes festive outfits, cultural costumes, dance
            costumes, stage performance outfits and customized garments
            designed for special events and celebrations.
          </p>

          <p className="about__description">
            From fabric selection and fitting to embroidery, zari work,
            decorative detailing and final finishing, we pay attention to
            every detail to deliver garments that combine comfort, quality
            and style while meeting our customers' specific requirements.
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
            Kinto High School
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