import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

import "./CategoryCard.css";

const CategoryCard = ({ title, description, image, path }) => {
  return (
    <a href={path} className="category-card">
      <img
        src={image}
        alt={title}
        className="category-card__image"
      />

      <div className="category-card__overlay" />

      <div className="category-card__content">
        <h3>{title}</h3>

        <p>{description}</p>

        <span className="category-card__link">
          Explore
          <FaArrowRight />
        </span>
      </div>
    </a>
  );
};

export default CategoryCard;