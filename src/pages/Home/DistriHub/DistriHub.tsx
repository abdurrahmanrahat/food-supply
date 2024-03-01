import Container from "@/components/ui/Container";
import { Link } from "react-router-dom";
import Img from "../../../assets/images/restaurants.png";

const DistriHub = () => {
  return (
    <Container className="bg-[#1B1B1B] rounded-xl my-16 md:my-24 md:flex justify-between p-8">
      <div className="md:w-1/2 md:pr-10 flex flex-col justify-center gap-4 md:pl-8">
        <h2 className="domine-font text-[32px] md:text-[46px] font-semibold text-white leading-[56px]">
          Discover DistriHubs Near From You.
        </h2>
        <p className=" text-[#D3D3D3] max-w-[56ch]">
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam
        </p>
        <Link to="/about-us">
          <button className="px-[20px] md:px-[32px] py-[8px] font-semibold cursor-pointer rounded-md text-white border border-[#DABC95] hover:bg-[#F2D1A5]  duration-700">
            More About
          </button>
        </Link>
      </div>
      <div className="md:w-1/2 md:pr-8 mt-12 md:mt-0">
        <img src={Img} alt="" />
      </div>
    </Container>
  );
};

export default DistriHub;
