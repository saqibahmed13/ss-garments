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
import Product10 from "../../assets/images/gallery/Product10.png";
import Product11 from "../../assets/images/gallery/Product11.png";
import Product12 from "../../assets/images/gallery/Product12.png";

const products = [
  Product1,
  Product2,
  Product3,
  Product4,
  Product5,
  Product6,
  Product7,
  Product8,
  Product9,
  Product10,
  Product11,
  Product12,
];

const Products = () => {
  return (
    <section id="products" className="products">
      <div className="products__container">

        <div className="products__header">
          <span className="products__eyebrow">
            Our Collection
          </span>

          <h2 className="products__title">
            Quality garments for
            <span> every occasion.</span>
          </h2>

          <p className="products__description">
            From school uniforms to professional and traditional
            garments, we design and manufacture clothing with
            attention to quality, comfort and detail.
          </p>
        </div>

        <div className="products__grid">
          {products.map((image, index) => (
            <div className="products__card" key={index}>
              <img
                src={image}
                alt={`SS Garments product ${index + 1}`}
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