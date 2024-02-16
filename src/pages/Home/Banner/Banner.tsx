// import Swiper styles
import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Autoplay, Pagination]}
        className="mySwiper"
      >
        {/* one */}
        <SwiperSlide className="relative">
          <img
            className="lg:h-[600px] object-cover w-screen"
            src="https://i.ibb.co/vLFvTqH/3.jpg"
          />

          <div className="absolute top-5 lg:top-28 left-8 lg:left-20 space-y-2 lg:space-y-10  w-[190px] lg:w-[420px] 2xl:w-[440px]  text-white text-center">
            <h1 className="text-white text-lg lg:text-[44px] lg:leading-[44px] font-extrabold">
              Zero Waste Food Distribution
            </h1>
            <p className="text-[13px] md:text-[17px] 2xl:text-[18px]">
              Minimize waste, maximize impact! Our project focuses on efficient
              food distribution strategies to reduce waste and ensure surplus
              reaches communities in need.
            </p>
          </div>
        </SwiperSlide>

        {/* two */}
        <SwiperSlide className="relative">
          <img
            className="lg:h-[600px] object-cover w-screen"
            src="https://i.ibb.co/4FmpQhy/1.jpg"
          />

          <div className="absolute top-5 lg:top-28 left-8 lg:left-20 space-y-2 lg:space-y-10  w-[190px] lg:w-[420px] 2xl:w-[440px]  text-white text-center">
            <h1 className="text-white text-lg lg:text-[44px] lg:leading-[44px] font-extrabold">
              Regional Food Redistribution
            </h1>
            <p className="text-[13px] md:text-[17px] 2xl:text-[18px]">
              Connecting surplus to scarcity! Our initiative establishes
              seamless channels for redistributing excess food from one region
              to another, addressing food imbalances.
            </p>
          </div>
        </SwiperSlide>

        {/* three */}
        <SwiperSlide className="relative">
          <img
            className="lg:h-[600px] object-cover w-screen"
            src="https://i.ibb.co/VV4jmHr/2.jpg"
          />

          <div className="absolute top-5 lg:top-28 left-8 lg:left-20 space-y-2 lg:space-y-10  w-[190px] lg:w-[420px] 2xl:w-[440px]  text-white text-center">
            <h1 className="text-white text-lg lg:text-[44px] lg:leading-[44px] font-extrabold">
              Smart Food Supply Networks
            </h1>
            <p className="text-[13px] md:text-[17px] 2xl:text-[18px]">
              Smart solutions for food access! We're creating intelligent supply
              networks to optimize food distribution, making sure it reaches
              every corner that needs it.
            </p>
          </div>
        </SwiperSlide>

        {/* four */}
        <SwiperSlide className="relative">
          <img
            className="lg:h-[600px] object-cover w-screen"
            src="https://i.ibb.co/bgdVbvr/4.jpg"
          />

          <div className="absolute top-5 lg:top-28 left-8 lg:left-20 space-y-2 lg:space-y-10  w-[190px] lg:w-[420px] 2xl:w-[440px]  text-white text-center">
            <h1 className="text-white text-lg lg:text-[44px] lg:leading-[44px] font-extrabold">
              Balancing Surplus and Scarcity
            </h1>
            <p className="text-[13px] md:text-[17px] 2xl:text-[18px]">
              Striking a balance! Our project harmonizes food distribution,
              minimizing excess in one region and addressing scarcity in
              another, fostering food equilibrium.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
