import CategoryCard from "../CategoryCard/CategoryCard";

import schoolUniform from "../../assets/images/ss-garments.png";
import eventWear from "../../assets/images/ss-garments.png";
import customOrders from "../../assets/images/ss-garments.png";

import "./Categories.css";

const Categories = () => {
  const categories = [
    {
      id: 1,
      title: "School Uniforms",
      description:
        "Comfortable, durable and professionally crafted uniforms for schools.",
      image: schoolUniform,
      path: "/school-uniforms",
    },
    {
      id: 2,
      title: "Cultural & Event Wear",
      description:
        "Custom outfits designed for school functions, cultural events and celebrations.",
      image: eventWear,
      path: "/event-wear",
    },
    {
      id: 3,
      title: "Custom & Bulk Orders",
      description:
        "Reliable garment manufacturing for customized and large-volume requirements.",
      image: customOrders,
      path: "/contact",
    },
  ];

  return (
    <section className="categories">
      <div className="categories__container">

        <div className="categories__header">
          <span className="categories__eyebrow">
            Our Collections
          </span>

          <h2>
            Crafted for Every Occasion
          </h2>

          <p>
            From everyday school uniforms to special event wear,
            we create garments designed for comfort, quality and durability.
          </p>
        </div>

        <div className="categories__grid">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              title={category.title}
              description={category.description}
              image={category.image}
              path={category.path}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Categories;