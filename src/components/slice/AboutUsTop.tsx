import { BiDonateHeart } from "react-icons/bi";
import { RiCustomerServiceLine } from "react-icons/ri";
import AboutImg1 from "../../assets/images/about/about-us-1.jpg";
import AboutImg2 from "../../assets/images/about/about-us-2.jpg";

const AboutUsTop = () => {
  return (
    <div className="md:flex gap-20 flex-row-reverse pb-16 md:py-16">
      {/* content section */}
      <div className="md:w-1/2 mb-12 md:mt-0 flex flex-col justify-center">
        <h4 className="text-[#D9A868] text-[30px] satisfy-regular">
          About Community
        </h4>
        <h2 className="text-[32px] md:text-[48px] domine-font font-semibold">
          Living Well Begins with Eating Well
        </h2>
        <p className=" text-dark-light">
          Duis nec semper ligula. Nullam nec justo vel metus gravida consequat.
          Suspendisse potenti. Quisque fermentum, nisl vitae auctor commodo,
          justo metus tincidunt elit,
        </p>
        {/* cards */}
        <div className="flex justify-between p-8">
          <div>
            <p>
              <BiDonateHeart className="text-[40px] text-[#D9A868]" />
            </p>
            <h4 className="domain-font text-[24px] font-semibold">
              Online Donation
            </h4>
            <p className="text-dark-light max-w-[20ch]">
              Duis nec semper ligula. Nullam nec.
            </p>
          </div>
          <div>
            <p>
              <RiCustomerServiceLine className="text-[40px] text-[#D9A868]" />
            </p>
            <h4 className="domain-font text-[24px] font-semibold">
              24X7 Services
            </h4>
            <p className="text-dark-light max-w-[20ch]">
              Duis nec semper ligula. Nullam nec.
            </p>
          </div>
        </div>
      </div>

      {/* img section */}
      <div className="md:w-1/2 flex gap-6 relative">
        <div>
          <img src={AboutImg1} className="rounded-md" alt="" />
        </div>
        <div>
          <img src={AboutImg2} className="rounded-md" alt="" />
        </div>
        <div className="absolute hidden md:flex flex-col justify-center items-center md:-top-14 md:-right-14 bg-[#D9A868] p-8 rounded-full text-white border-[10px] border-white domine-font">
          <h3 className="text-[24px] font-semibold">Since</h3>
          <h2 className="text-[42px] font-semibold -mt-2">1870</h2>
        </div>
      </div>
    </div>
  );
};

export default AboutUsTop;
