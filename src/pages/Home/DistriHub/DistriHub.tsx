import Container from "@/components/ui/Container";
import { Link } from "react-router-dom";
import Img from "../../../assets/images/restaurants.png";

const DistriHub = () => {
  return (
    <div className="px-2 md:px-0">
      <Container className="bg-[#1B1B1B] rounded-xl my-16 md:my-24 md:flex flex-row-reverse justify-between p-8">
        <div className="md:w-1/2 md:pr-8 mb-12 md:mb-0">
          <img src={Img} alt="" />
        </div>
        <div className="md:w-1/2 md:pr-10 flex flex-col justify-center gap-4 md:pl-8">
          <h2 className="domine-font text-[28px] md:text-[46px] font-semibold text-white md:leading-[56px]">
            Discover DistriHubs Near From You.
          </h2>
          <p className=" text-[#D3D3D3] max-w-[56ch]">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam
          </p>
          <Link to="/about-us">
            <button className="px-[20px] md:px-[28px] py-[8px] font-medium cursor-pointer rounded-md border border-[#DABC95] bg-[#DABC95] hover:bg-transparent text-white hover:text-white duration-700">
              More About
            </button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default DistriHub;
