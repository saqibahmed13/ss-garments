import { useState } from "react";
import "./Products.css";

import Product1 from "../../assets/images/gallery/Product1.png";
import Product2 from "../../assets/images/gallery/Product2.png";
import Product3 from "../../assets/images/gallery/Product3.png";
import Product4 from "../../assets/images/gallery/Product4.png";
import Product5 from "../../assets/images/gallery/Product5.png";
import Product6 from "../../assets/images/gallery/Product6.png";
import Product7 from "../../assets/images/gallery/Product7.png";
import Product8 from "../../assets/images/gallery/Product8.png";
import Product9 from "../../assets/images/gallery/Product9.png";
import SchoolDress from "../../assets/images/gallery/SchoolDress.png";
import Product11 from "../../assets/images/gallery/Product11.png";
import Product12 from "../../assets/images/gallery/Product12.png";

import School1 from "../../assets/images/gallery/Product-School.png";
import School2 from "../../assets/images/gallery/Product-School2.png";
import School3 from "../../assets/images/gallery/schoolPant.png";
import School4 from "../../assets/images/gallery/schoolShirt.png";
import School5 from "../../assets/images/gallery/schoolSkirt.png";

import IndoWest1 from "../../assets/images/gallery/IndoWestern1.png";
import IndoWest2 from "../../assets/images/gallery/IndoWestern2.png";
import IndoWest3 from "../../assets/images/gallery/IndoWestern3.png";
import IndoWest4 from "../../assets/images/gallery/IndoWestern4.png";


// ==============================
// Product Data
// ==============================

const products = [
  // School Wear
  {
    image: School4,
    category: "school",
    name: "School Shirts",
  },
  {
    image: School3,
    category: "school",
    name: "School Trousers",
  },
  {
    image: School2,
    category: "school",
    name: "School Blazers",
  },
  {
    image: School1,
    category: "school",
    name: "Complete School Uniform",
  },
  {
    image: School5,
    category: "school",
    name: "School Skirts",
  },

  // Kids & Occasion Wear
  {
    image: Product1,
    category: "kids",
    name: "Kids Costume",
  },
  {
    image: Product2,
    category: "kids",
    name: "Kids Traditional Wear",
  },
  {
    image: Product3,
    category: "kids",
    name: "Kids Party Wear",
  },
  {
    image: Product4,
    category: "kids",
    name: "Kids Traditional Costume",
  },
  {
    image: Product5,
    category: "kids",
    name: "Kids Designer Dress",
  },
  {
    image: Product6,
    category: "kids",
    name: "Kids Occasion Wear",
  },
  {
    image: Product7,
    category: "kids",
    name: "Kids Ethnic Wear",
  },
  {
    image: Product8,
    category: "kids",
    name: "Kids Festive Wear",
  },
  {
    image: Product9,
    category: "kids",
    name: "Kids Costume",
  },
  {
    image: SchoolDress,
    category: "kids",
    name: "Kids Special Occasion Dress",
  },
  {
    image: Product11,
    category: "kids",
    name: "Kids Traditional Dress",
  },
  {
    image: Product12,
    category: "kids",
    name: "Kids Party Dress",
  },

  // Indo-Western & Professional
  {
    image: IndoWest1,
    category: "indo-western",
    name: "Indo-Western Costume",
  },
  {
    image: IndoWest2,
    category: "indo-western",
    name: "Indo-Western Dress",
  },
  {
    image: IndoWest3,
    category: "indo-western",
    name: "Indo-Western Costume",
  },
  {
    image: IndoWest4,
    category: "indo-western",
    name: "Indo-Western Dance Costume",
  },
];


// ==============================
// Filters
// ==============================

const filters = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "School",
    value: "school",
  },
  {
    label: "Kids & Cultural",
    value: "kids",
  },
  {
    label: "Indo-Western",
    value: "indo-western",
  },
];


const Products = () => {

  const [activeFilter, setActiveFilter] = useState("all");


  const filteredProducts =
    activeFilter === "all"
      ? products
      : products.filter(
        (product) => product.category === activeFilter
      );


  return (
    <section id="collections" className="products">

      <div className="products__container">

        {/* Header */}
       <div className="products__header">

  <span className="products__eyebrow">
    Our Collection
  </span>

  <h2 className="products__title">
    Quality garments for
    <span> every occasion.</span>
  </h2>

  <p className="products__description">
    School uniforms, traditional wear and custom garments,
    crafted with quality and attention to detail.
  </p>

  <p className="products__custom-note">
    <strong>Looking for a different design?</strong>{" "}
    We also create customized garments to match your design,
    fabric, colour and requirements.
  </p>

</div>


        {/* Filters */}
        <div className="products__filters">

          {filters.map((filter) => (

            <button
              key={filter.value}
              type="button"
              className={`products__filter ${activeFilter === filter.value
                  ? "products__filter--active"
                  : ""
                }`}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </button>

          ))}

        </div>


        {/* Products */}
        <div className="products__grid">

          {filteredProducts.map((product, index) => (

            <div
              className="products__card"
              key={`${product.name}-${index}`}
            >

              <img
                src={product.image}
                alt={product.name}
                className="products__image"
              />

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Products;