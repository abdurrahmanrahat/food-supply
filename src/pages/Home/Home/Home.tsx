import About from "../About/About";
import Banner from "../Banner/Banner";
import Discover from "../Discover/Discover";
import Gallery from "../Gallery/Gallery";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />

      <Discover />

      <Gallery />

      <Testimonials />

      <About />
    </div>
  );
};

export default Home;
