import Categories from "../../components/Categories/Categories";
import ContactCTA from "../../components/ContactCTA/ContactCTA";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <Categories/>
      <WhyChooseUs/>
      <FeaturedProducts />
      <ContactCTA />
     
    </>
  );
};

export default Home;