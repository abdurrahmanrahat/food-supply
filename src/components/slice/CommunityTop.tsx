import { motion } from "framer-motion";
import CommunityImg from "../../assets/images/community.png";
import Container from "../ui/Container";

const CommunityTop = () => {
  return (
    <Container className="md:flex justify-between gap-12 overflow-hidden">
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.1, ease: "easeInOut" }}
        className="md:w-1/2 flex flex-col justify-center"
      >
        <h4 className="text-[#D9A868] text-[30px] satisfy-regular">
          Community
        </h4>
        <h2 className="text-[40px] md:text-[60px] domine-font font-semibold">
          Wall Of Gratitude
        </h2>
        <p className="hidden md:block text-dark-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem tempora
          iste doloribus quidem eaque. Omnis recusandae maiores adipisci earum
          atque!
        </p>
      </motion.div>

      <motion.div
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.1, ease: "easeInOut" }}
        className="md:w-1/2 mt-14 md:mt-0"
      >
        <div>
          <img src={CommunityImg} className="rounded-md" alt="" />
        </div>
      </motion.div>
    </Container>
  );
};

export default CommunityTop;
