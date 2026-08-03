import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

import ProductCard from "../ProductCard/ProductCard";

import products from "../../data/products";

import "./FeaturedProducts.css";

const FeaturedProducts = () => {
  const featuredProducts = products
    .filter((product) => product.featured)
    .slice(0, 4);

  return (
    <section className="featured-products">

      <div className="featured-products__container">

        {/* Header */}

        <div className="featured-products__header">

          <div>
            <span className="featured-products__eyebrow">
              Our Products
            </span>

            <h2>
              Featured Collection
            </h2>

            <p>
              Explore some of our popular uniforms and custom
              garment solutions.
            </p>
          </div>

          <Link
            to="/products"
            className="featured-products__view-all"
          >
            View All Products

            <FaArrowRight />
          </Link>

        </div>

        {/* Products */}

        <div className="featured-products__grid">

          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default FeaturedProducts;