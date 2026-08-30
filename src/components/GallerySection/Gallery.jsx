import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

import "./GallerySection.css";

const GallerySection = () => {
  const galleryImages = [
    {
      id: 1,
      image: "/images/gallery/gallery-1.jpg",
      alt: "SS Garments school uniforms",
    },
    {
      id: 2,
      image: "/images/gallery/gallery-2.jpg",
      alt: "School event wear",
    },
    {
      id: 3,
      image: "/images/gallery/gallery-3.jpg",
      alt: "Custom school uniforms",
    },
    {
      id: 4,
      image: "/images/gallery/gallery-4.jpg",
      alt: "Garment stitching",
    },
    {
      id: 5,
      image: "/images/gallery/gallery-5.jpg",
      alt: "Cultural event garments",
    },
    {
      id: 6,
      image: "/images/gallery/gallery-6.jpg",
      alt: "SS Garments collection",
    },
  ];

  return (
    <section className="gallery-section">
      <div className="gallery-section__container">

        {/* Header */}

        <div className="gallery-section__header">
          <div>
            <span className="gallery-section__eyebrow">
              Our Work
            </span>

            <h2>
              Crafted with Care,
              <span> Worn with Confidence.</span>
            </h2>

            <p>
              Take a closer look at our uniforms, custom garments and
              creations made for schools, events and special occasions.
            </p>
          </div>

          <Link
            to="/gallery"
            className="gallery-section__link"
          >
            View Gallery
            <FaArrowRight />
          </Link>
        </div>

        {/* Gallery */}

        <div className="gallery-section__grid">
          {galleryImages.map((item, index) => (
            <div
              key={item.id}
              className={`gallery-section__item ${
                index === 0 ? "gallery-section__item--large" : ""
              }`}
            >
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
              />

              <div className="gallery-section__overlay" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GallerySection;