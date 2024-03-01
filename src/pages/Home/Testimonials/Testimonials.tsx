import { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "../../../components/ui/Container";

type TTestimonial = {
  _id: number;
  name: string;
  review: string;
  image: string;
  role: string;
};

const Testimonials = () => {
  const [reviews, setReviews] = useState<TTestimonial[]>([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <Container className="my-16 md:my-24">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-[40px] md:text-[44px] font-bold domine-font">
          What Donors Say
        </h2>

        <p className="text-dark-light max-w-[56ch] pb-2 text-center">
          Ut posuere felis arcu tellus tempus in in ultricies. Gravida tempus id
          nibh ornare viverra.
        </p>
      </div>

      {/* slider section start */}
      <Swiper
        spaceBetween={50}
        slidesPerView={2}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          620: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          840: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
      >
        {/* map section start */}
        {reviews?.map((data) => (
          <SwiperSlide key={data._id}>
            <div className="group group/item mt-10 bg-[#F5F6F7] lg:px-12 mx-3 rounded-md">
              <div className="flex items-center justify-center mb-5 pt-6">
                <FaQuoteLeft className="text-4xl text-[#B7BAC7] duration-500" />
              </div>

              <div>
                <p className="font-medium text-gray-700 text-center lg:text-base text-sm">
                  {data?.review}
                </p>
              </div>

              <div className="flex items-center justify-center">
                <div className="flex items-center">
                  <div className="w-20 h-20 mt-5">
                    <img
                      className="rounded-full hover:border-4 group-hover:border-[#FFAB3C] border-4 border-gray-300 duration-300 w-36 h-20"
                      src={data?.image}
                      alt=""
                    />
                  </div>
                  <div className="ms-4 mt-5">
                    <h2 className="text-xl font-black">{data?.name}</h2>
                    <p className="text-center font-semibold text-gray-500 text-sm">
                      {data?.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        {/* map section end */}
      </Swiper>
    </Container>
  );
};

export default Testimonials;
