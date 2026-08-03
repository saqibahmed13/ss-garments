import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <article className="product-card">

      <Link
        to={`/products/${product.id}`}
        className="product-card__image-wrapper"
      >
        <img
          src={product.image}
          alt={product.name}
          className="product-card__image"
        />

        <span className="product-card__category">
          {product.category}
        </span>
      </Link>

      <div className="product-card__content">

        <h3 className="product-card__title">
          {product.name}
        </h3>

        <p className="product-card__description">
          {product.description}
        </p>

        <Link
          to={`/products/${product.id}`}
          className="product-card__link"
        >
          View Details

          <FaArrowRight />
        </Link>

      </div>

    </article>
  );
};

export default ProductCard;