import AboutUsTop from "@/components/slice/AboutUsTop";
import Container from "@/components/ui/Container";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Discover from "../Discover/Discover";
import DistriHub from "../DistriHub/DistriHub";
import FoodSupply from "../FoodSupply/FoodSupply";
import Gallery from "../Gallery/Gallery";
import Testimonials from "../Testimonials/Testimonials";
import UpcomingEvents from "../UpcomingEvents/UpcomingEvents";

const Home = () => {
  return (
    <div>
      <Banner />

      <Discover />

      <FoodSupply />

      {/* what we do */}

      <Gallery />

      <Container>
        <AboutUsTop />
      </Container>

      <Testimonials />

      <UpcomingEvents />

      <About />

      <DistriHub />
    </div>
  );
};

export default Home;
