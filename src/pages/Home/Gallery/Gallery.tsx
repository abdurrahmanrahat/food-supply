import Container from "@/components/ui/Container";
import useScrollGrow from "@/lib/hooks/ScrollGrowHook";
import { motion } from "framer-motion";
import Img1 from "../../../assets/images/gallery/1.jpg";
import Img2 from "../../../assets/images/gallery/2.jpg";
import Img3 from "../../../assets/images/gallery/3.jpg";
import Img4 from "../../../assets/images/gallery/4.jpg";
import Img5 from "../../../assets/images/gallery/5.jpg";
import Img6 from "../../../assets/images/gallery/6.jpg";
import Img7 from "../../../assets/images/gallery/7.jpg";

const Gallery = () => {
  const { style, componentRef } = useScrollGrow();

  return (
    <Container className="my-16 md:my-24">
      <motion.div ref={componentRef} style={style}>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-[40px] md:text-[44px] font-bold domine-font">
            Photos
          </h2>

          <p className="text-dark-light max-w-[65ch] pb-2 text-center">
            Ut posuere felis arcu tellus tempus in in ultricies. Gravida tempus
            id nibh ornare viverra. Ut posuere felis arcu tellus tempus in in
            ultricies. Gravida tempus id nibh ornare viverra.
          </p>
        </div>

        <div className="flex gap-1 md:gap-6 mt-10">
          {/* col 1 */}
          <div className="w-[30%]">
            <img src={Img1} className="w-full rounded-[2px]" alt="" />
          </div>

          {/* col 2 */}
          <div className="w-[35%] flex flex-col gap-1 md:gap-6">
            <div>
              <img src={Img2} className="rounded-[2px]" alt="" />
            </div>
            <div className="flex gap-1 md:gap-6">
              <div>
                <img src={Img3} className="rounded-[2px]" alt="" />
              </div>
              <div>
                <img src={Img4} className="rounded-[2px]" alt="" />
              </div>
            </div>
          </div>

          {/* col 3 */}
          <div className="w-[35%] flex flex-col gap-1 md:gap-6">
            <div className="flex gap-1 md:gap-6">
              <div>
                <img src={Img5} className="rounded-[2px]" alt="" />
              </div>
              <div>
                <img src={Img6} className="rounded-[2px]" alt="" />
              </div>
            </div>
            <div>
              <img src={Img7} className="rounded-[2px]" alt="" />
            </div>
          </div>
        </div>
      </motion.div>
    </Container>
  );
};

export default Gallery;
