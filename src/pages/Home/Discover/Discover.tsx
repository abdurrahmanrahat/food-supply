import Container from "@/components/ui/Container";
import useScrollX from "@/hooks/scrollXAnimateHook";
import { motion } from "framer-motion";
import Img1 from "../../../assets/images/disc/1.jpg";
import Img2 from "../../../assets/images/disc/2.jpg";

const Discover = () => {
  const { styleLeft, styleRight, componentRef } = useScrollX();

  return (
    <>
      <Container className="md:flex justify-between gap-6 my-16 md:my-24 hidden overflow-hidden">
        <motion.div
          style={styleLeft}
          ref={componentRef}
          className="md:w-1/2 flex flex-col justify-center"
        >
          <h4 className="text-[#D9A868] text-[30px] satisfy-regular">
            Discover
          </h4>
          <h2 className="text-[40px] md:text-[44px] font-bold">OUR STORY</h2>
          <p className="text-dark-light max-w-[60ch] pt-4">
            This initiative focuses on implementing sustainable practices to
            minimize food waste while simultaneously distributing surplus food
            to regions in need. By adopting responsible sourcing and
            distribution strategies.
          </p>
          <div className="pt-4">
            <button className="font-medium hover:border-b-[1.5px] border-[#D9A868] transition-all">
              Learn More
            </button>
          </div>
        </motion.div>

        <motion.div
          style={styleRight}
          ref={componentRef}
          className="md:w-1/2 flex gap-10 mt-14 md:mt-0"
        >
          <div>
            <img src={Img1} className="rounded-md" alt="" />
          </div>
          <div>
            <img src={Img2} className="rounded-md" alt="" />
          </div>
        </motion.div>
      </Container>

      {/* for mobile */}
      <Container className="justify-between gap-6 my-16 md:my-24 md:hidden">
        <div className="md:w-1/2 flex flex-col justify-center">
          <h4 className="text-[#D9A868] text-[30px] satisfy-regular">
            Discover
          </h4>
          <h2 className="text-black-text text-[40px] md:text-[44px] font-bold">
            OUR STORY
          </h2>
          <p className="text-dark-light max-w-[60ch] pt-4">
            This initiative focuses on implementing sustainable practices to
            minimize food waste while simultaneously distributing surplus food
            to regions in need. By adopting responsible sourcing and
            distribution strategies.
          </p>
          <div className="pt-4">
            <button className="text-black-text font-medium hover:border-b-[1.5px] border-[#D9A868] transition-all">
              Learn More
            </button>
          </div>
        </div>

        <div className="md:w-1/2 flex gap-10 mt-14 md:mt-0">
          <div>
            <img src={Img1} className="rounded-md" alt="" />
          </div>
          <div>
            <img src={Img2} className="rounded-md" alt="" />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Discover;
