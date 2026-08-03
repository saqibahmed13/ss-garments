import { LuShirt, LuScissors, LuBoxes, LuTruck } from "react-icons/lu";

import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: <LuShirt />,
      title: "Quality Fabrics",
      description:
        "Carefully selected fabrics designed for comfort, durability and everyday wear.",
    },
    {
      id: 2,
      icon: <LuScissors />,
      title: "Custom Tailoring",
      description:
        "Garments tailored to meet specific sizing, design and institutional requirements.",
    },
    {
      id: 3,
      icon: <LuBoxes />,
      title: "Bulk Orders",
      description:
        "Reliable production for schools, institutions, events and large-volume requirements.",
    },
    {
      id: 4,
      icon: <LuTruck />,
      title: "Reliable Delivery",
      description:
        "Organized production and dependable delivery for every order, large or small.",
    },
  ];

  return (
    <section className="why-choose-us">
      <div className="why-choose-us__container">

        <div className="why-choose-us__header">
          <span className="why-choose-us__eyebrow">
            Why SS Garments
          </span>

          <h2>Made with Quality. Built on Trust.</h2>

          <p>
            From fabric selection to the final stitch, we focus on creating
            garments that combine comfort, durability and dependable
            craftsmanship.
          </p>
        </div>

        <div className="why-choose-us__grid">
          {features.map((feature) => (
            <div className="feature-card" key={feature.id}>
              <div className="feature-card__icon">
                {feature.icon}
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;