
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import About from "../../components/About/About";
import Products from "../Products/Products";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import Contact from "../../components/Contact/Contact";

const Home = () => {
  return (
    <>
      <HeroBanner />

      <Products />

      <About />

      <WhyChooseUs />
      
      <Contact />


    </>
  );
};

export default Home;