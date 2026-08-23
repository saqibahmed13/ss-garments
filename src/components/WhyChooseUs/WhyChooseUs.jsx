import "./WhyChooseUs.css";

const reasons = [
  {
    number: "01",
    title: "20+ Years of Experience",
    description:
      "Decades of experience in garment manufacturing and tailoring, with a strong understanding of quality and customer requirements.",
  },
  {
    number: "02",
    title: "Quality Fabrics",
    description:
      "We carefully select fabrics that offer comfort, durability, colour retention and a quality finish.",
  },
  {
    number: "03",
    title: "Customized Garments",
    description:
      "From colours and designs to sizes and finishing, garments can be customized according to your specific requirements.",
  },
  {
    number: "04",
    title: "School & Bulk Orders",
    description:
      "Experienced in handling school uniforms, institutional requirements and bulk garment orders.",
  },
  {
    number: "05",
    title: "Attention to Detail",
    description:
      "Every garment is carefully stitched and finished with attention to fitting, comfort and overall appearance.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="why-us">

      <div className="why-us__container">

        {/* Header */}

        <div className="why-us__header">

          <span className="why-us__eyebrow">
            Why Choose Us
          </span>

          <h2 className="why-us__title">
            Quality you can
            <span> count on.</span>
          </h2>

          <p className="why-us__description">
            From fabric selection to final finishing, we focus on
            delivering garments that meet your requirements with
            quality and care.
          </p>

        </div>


        {/* Reasons */}

        <div className="why-us__grid">

          {reasons.map((reason) => (
            <div className="why-us__card" key={reason.number}>

              <div className="why-us__number">
                {reason.number}
              </div>

              <div className="why-us__card-content">

                <h3 className="why-us__card-title">
                  {reason.title}
                </h3>

                <p className="why-us__card-description">
                  {reason.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default WhyChooseUs;