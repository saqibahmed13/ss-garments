import { useState } from "react";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa6";

import "./HeroBanner.css";

// Change these paths to your actual image names

import uniformBanner from "../../assets/images/gallery/SchoolUniform.png";
import culturalBanner from "../../assets/images/gallery/Cultural.png";
import eventBanner from "../../assets/images/gallery/Cultural2.png";

import uniformBannerMobile from "../../assets/images/gallery/heroBanner-mobile1.png";

const banners = [
  {
    image: uniformBanner,
    mobileImage: uniformBannerMobile,
    eyebrow: "Quality in Every Stitch",
    title: "School",
    highlight: "Uniforms",
    description:
      "Smart, comfortable and durable uniforms crafted for everyday excellence.",
  },
  {
    image: culturalBanner,
    eyebrow: "Celebrate Tradition",
    title: "Indian Cultural",
    highlight: "Costumes",
    description:
      "Beautifully crafted traditional costumes for cultural events and performances.",
  },
  {
    image: eventBanner,
    eyebrow: "Made for Every Occasion",
    title: "Event",
    highlight: "Wear",
    description:
      "Stylish outfits designed to make every special occasion memorable.",
  },
];

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === banners.length - 1 ? 0 : prev + 1
    );
  };

  const previousSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? banners.length - 1 : prev - 1
    );
  };

  return (
    <section className="hero">

      {/* ==========================
          Slider
      ========================== */}

      <div className="hero__slider">

        {banners.map((banner, index) => (
          <div
            key={index}
            className={`hero__slide ${index === currentSlide ? "hero__slide--active" : ""
              }`}
          >
            <picture className="hero__picture">
              {banner.mobileImage && (
                <source
                  media="(max-width: 768px)"
                  srcSet={banner.mobileImage}
                />
              )}

              <img
                src={banner.image}
                alt={`${banner.title} ${banner.highlight}`}
                className="hero__background"
              />
            </picture>

            {/* Overlay */}
            <div className="hero__overlay" />

            {/* ==========================
                Content
            ========================== */}

            <div className="hero__container">
              <div className="hero__content">

                <span className="hero__eyebrow">
                  {banner.eyebrow}
                </span>

                <h1 className="hero__title">
                  {banner.title}
                  <span>{banner.highlight}</span>
                </h1>

                <p className="hero__description">
                  {banner.description}
                </p>

                <div className="hero__actions">
                  <a
                    href="#collections"
                    className="hero__primary-btn"
                  >
                    Explore Collection
                    <FaArrowRight />
                  </a>
                </div>

              </div>
            </div>
          </div>
        ))}

      </div>

      {/* ==========================
          Navigation
      ========================== */}

      <button
        type="button"
        className="hero__arrow hero__arrow--left"
        onClick={previousSlide}
        aria-label="Previous slide"
      >
        <FaChevronLeft />
      </button>

      <button
        type="button"
        className="hero__arrow hero__arrow--right"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <FaChevronRight />
      </button>

      {/* ==========================
          Dots
      ========================== */}

      <div className="hero__dots">
        {banners.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`hero__dot ${index === currentSlide ? "hero__dot--active" : ""
              }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </section>
  );
};

export default HeroBanner;