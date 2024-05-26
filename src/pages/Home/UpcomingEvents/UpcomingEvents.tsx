import Img1 from "@/assets/images/events/1.jpg";
import Img2 from "@/assets/images/events/2.jpg";
import Img3 from "@/assets/images/events/3.jpg";
import Container from "@/components/ui/Container";
import { Link } from "react-router-dom";

const UpcomingEvents = () => {
  return (
    <Container className="my-16 md:mt-24 md:mb-32">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-[40px] md:text-[44px] font-bold domine-font">
          Upcoming Events
        </h2>

        <p className="text-[14px] md:text-[15px] text-dark-light max-w-[80ch] pb-2 text-center">
          Ut posuere felis arcu tellus tempus in in ultricies. Gravida tempus id
          nibh ornare viverra. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Iste nam deserunt minus accusamus.
        </p>
      </div>

      {/* cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <Link to="#" className="bg-[#F7F4ED] rounded-t-3xl">
          <div className="rounded-t-3xl overflow-hidden">
            <img
              src={Img1}
              className="rounded-t-3xl hover:scale-105 duration-1000"
              alt=""
            />
          </div>
          <div className="px-4 py-8">
            <p className="text-[#D9A868] font-medium">Nov 17, 2024</p>
            <h4 className="text-[20px] font-semibold domine-font mt-2">
              Wine and Dine: Perfect Pairings for an Unforgettable Meal
            </h4>
          </div>
        </Link>
        <Link to="#" className="bg-[#F7F4ED] rounded-t-3xl">
          <div className="rounded-t-3xl overflow-hidden">
            <img
              src={Img2}
              className="rounded-t-3xl hover:scale-105 duration-1000"
              alt=""
            />
          </div>
          <div className="px-4 py-8">
            <p className="text-[#D9A868] font-medium">Oct 17, 2024</p>
            <h4 className="text-[20px] font-semibold domine-font mt-2">
              A Spotlight on Our Culinary Innovations
            </h4>
          </div>
        </Link>
        <Link to="#" className="bg-[#F7F4ED] rounded-t-3xl">
          <div className="rounded-t-3xl overflow-hidden">
            <img
              src={Img3}
              className="rounded-t-3xl hover:scale-105 duration-1000"
              alt=""
            />
          </div>
          <div className="px-4 py-8">
            <p className="text-[#D9A868] font-medium">Dec 17, 2024</p>
            <h4 className="text-[20px] font-semibold domine-font mt-2">
              Tantalizing Tidbits: Fun Facts About Our Menu Creations
            </h4>
          </div>
        </Link>
      </div>
    </Container>
  );
};

export default UpcomingEvents;
