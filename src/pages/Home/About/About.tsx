import Container from "@/components/ui/Container";
import useScrollX from "@/hooks/scrollXAnimateHook";
import { motion } from "framer-motion";
import Img from "../../../assets/images/about.jpg";

const About = () => {
  const { styleLeft, styleRight, componentRef } = useScrollX();

  return (
    <Container className="md:flex gap-20 my-16 md:my-24 overflow-hidden">
      <motion.div
        style={styleLeft}
        ref={componentRef}
        className="mb-12 md:mb-0"
      >
        <img src={Img} className="rounded-sm" alt="" />
      </motion.div>

      <motion.div
        style={styleRight}
        ref={componentRef}
        className="md:w-1/2 flex flex-col justify-center items-center md:items-start"
      >
        <h4 className="text-[#D9A868] text-[30px] satisfy-regular">Discover</h4>
        <h2 className="text-[40px] md:text-[44px] font-bold domine-font">
          WHAT WE ARE?
        </h2>
        <p className="text-dark-light max-w-[60ch] pt-4 text-justify">
          Ultrices vitae auctor eu augue. Pellentesque dignissim eni amet
          venenatis Vulputate enim nulla aliquet porttitor la. Dictumst quisque
          sagittis purus sit a. Praesent elementum facil fringilla est. Volutpat
          sed cras ornare arcu dui vivamus arcu felis. Ma etiam tempor orci eu
          lobortis elementum nibh tellus. Lectus proin nibh nisl condimentum id
          venenatis.
        </p>
      </motion.div>
    </Container>
  );
};

export default About;
