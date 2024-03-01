import AboutUsTop from "@/components/slice/AboutUsTop";
import Container from "@/components/ui/Container";
import { useGetVolunteersQuery } from "@/redux/features/volunteer/volunteer.api";

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
        <span className="text-[32px] md:text-[40px] font-bold border-b-[3px] border-b-[#DABC95]">
          Our Volunteers
        </span>
      </div>

      {/* volunteers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-between pb-8">
        {volunteers?.data.map((item: TVolunteer) => (
          <div
            key={item._id}
            className="max-w-sm shadow-lg rounded-lg overflow-hidden"
          >
            <img
              className="w-full h-56 object-cover"
              src={item.image}
              alt={item.name}
            />
            <div className="py-4 px-6">
              <div className="">
                <h2 className="text-2xl font-semibold">{item.name}</h2>
                <p className=" text-md font-medium">{item.profession}</p>
              </div>
              <div className="space-y-[1px] mt-2">
                <p className=" text-md">{item.number}</p>
                <p className=" text-md">{item.email}</p>
                <p className=" text-md">{item.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default AboutUs;
