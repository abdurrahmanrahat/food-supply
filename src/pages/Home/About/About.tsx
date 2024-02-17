import Container from "@/components/ui/Container";
import Img from "../../../assets/images/about.jpg";

const About = () => {
  return (
    <Container className="md:flex gap-20 my-16 md:my-24">
      <div className="mb-12 md:mb-0">
        <img src={Img} className="rounded-sm" alt="" />
      </div>
      <div className="md:w-1/2 flex flex-col justify-center">
        <h4 className="text-[#D9A868] text-[30px] satisfy-regular">Discover</h4>
        <h2 className="text-black-text text-[40px] md:text-[44px] font-bold">
          WHAT WE ARE?
        </h2>
        <p className="text-dark-light max-w-[60ch] pt-4">
          Ultrices vitae auctor eu augue. Pellentesque dignissim eni amet
          venenatis Vulputate enim nulla aliquet porttitor la. Dictumst quisque
          sagittis purus sit a. Praesent elementum facil fringilla est. Volutpat
          sed cras ornare arcu dui vivamus arcu felis. Ma etiam tempor orci eu
          lobortis elementum nibh tellus. Lectus proin nibh nisl condimentum id
          venenatis.
        </p>
        {/* <div className="pt-4">
          <button className="text-black-text font-medium hover:border-b-[1.5px] border-[#D9A868] transition-all">
            Learn More
          </button>
        </div> */}
      </div>
    </Container>
  );
};

export default About;
