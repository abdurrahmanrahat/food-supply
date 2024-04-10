import AboutUsTop from "@/components/slice/AboutUsTop";
import Container from "@/components/ui/Container";
import { useGetVolunteersQuery } from "@/redux/features/volunteer/volunteer.api";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

type TVolunteer = {
  email: string;
  image: string;
  location: string;
  name: string;
  number: string;
  profession: string;
  _id: string;
};

const AboutUs = () => {
  const { data: volunteers } = useGetVolunteersQuery(undefined);
  console.log(volunteers);

  return (
    <Container className="my-16">
      <AboutUsTop />

      <div className="text-center mb-14 relative">
        <span className="text-[32px] md:text-[40px] font-bold domine-font border-b-[3px] border-b-[#DABC95]">
          Our Volunteers
        </span>
      </div>

      {/* volunteers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 justify-between pb-8">
        {volunteers?.data.map((item: TVolunteer) => (
          <div key={item._id} className="max-w-sm rounded-lg overflow-hidden">
            <div className="">
              <div className="">
                <img
                  className="w-full h-60 object-cover"
                  src={item.image}
                  alt={item.name}
                />
              </div>
              <div className="flex justify-center -mt-6">
                <h4 className="bg-[#D9A868] px-4 py-2 rounded-md text-white font-bold domine-font md:text-[18px] cursor-pointer">
                  {item.profession}
                </h4>
              </div>
            </div>
            <div className="flex flex-col gap-4 text-center mt-4">
              <div className="">
                <h2 className="text-2xl font-semibold">{item.name}</h2>
              </div>
              <div className="space-y-[0px] text-dark-light">
                <p className=" text-md">{item.number}</p>
                <p className=" text-md">{item.email}</p>
                <p className=" text-md">{item.location}</p>
              </div>

              <div className="flex gap-2 justify-center text-[18px] text-[#D9A868]">
                <p className="border border-[#D9A868] p-[6px] rounded-full cursor-pointer hover:bg-[#D9A868] hover:text-white duration-700">
                  <FaFacebookF />
                </p>
                <p className="border border-[#D9A868] p-[6px] rounded-full cursor-pointer hover:bg-[#D9A868] hover:text-white duration-700">
                  <FaTwitter />
                </p>
                <p className="border border-[#D9A868] p-[6px] rounded-full cursor-pointer hover:bg-[#D9A868] hover:text-white duration-700">
                  <FaLinkedinIn />
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default AboutUs;
