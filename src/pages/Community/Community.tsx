import GratitudeModal from "@/components/modal/GratitudeModal";
import CommunityTop from "@/components/slice/CommunityTop";
import Container from "@/components/ui/Container";

const Community = () => {
  return (
    <Container className="my-16 md:my-24">
      <CommunityTop />

      {/* post appreciation for the support */}
      <div className="my-16 md:my-24 flex flex-col justify-center items-center gap-2">
        <h2 className="text-[32px] md:text-[48px] domine-font font-semibold">
          Willingly Want to Appreciate Us?
        </h2>
        <GratitudeModal />
      </div>
    </Container>
  );
};

export default Community;
