import GratitudeModal from "@/components/modal/GratitudeModal";
import CommunityTop from "@/components/slice/CommunityTop";
import Container from "@/components/ui/Container";
import { useGetGratitudesQuery } from "@/redux/features/gratitude/gratitude.api";

type TGratitude = {
  comment: string;
  userEmail: string;
  userName: string;
  _id: string;
};

const Community = () => {
  const { data: gratitudes } = useGetGratitudesQuery(undefined);
  console.log(gratitudes);
  return (
    <Container className="my-16 md:my-20">
      <CommunityTop />

      {/* post appreciation for the support */}
      <div className="my-16 md:my-24 flex flex-col justify-center items-center gap-2">
        <h2 className="text-[28px] md:text-[48px] domine-font font-semibold text-center mb-4 md:mb-0">
          Willingly Want to Appreciate Us?
        </h2>
        <GratitudeModal />
      </div>

      {/* show gratitude data */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {gratitudes?.data.map((item: TGratitude) => (
          <div
            key={item._id}
            className="shadow-cardShadow p-4 md:p-8 rounded-md border-l-4 border-[#D9A868]"
          >
            <p className="text-dark-light domine-font text-[14px] text-justify">
              {item.comment}
            </p>
            <h4 className="satisfy-regular mt-2 text-end">{item.userName}</h4>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Community;
