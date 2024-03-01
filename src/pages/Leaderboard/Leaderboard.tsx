import Container from "@/components/ui/Container";
import { useGetSupplyDonationQuery } from "@/redux/features/supplyDonation/supplyDonationApi";

type TDonations = {
  newSupplyQuantity: string;
  supplyCategory: string;
  supplyDesc: string;
  supplyImg: string;
  supplyQuantity: string;
  supplyTitle: string;
  userEmail: string;
  userName: string;
  _id: string;
};

const Leaderboard = () => {
  const { data: suppliesDonations } = useGetSupplyDonationQuery(undefined);
  console.log(suppliesDonations);

  return (
    <Container className="my-16">
      <div className="text-center mb-14 relative">
        <span className="text-[32px] md:text-[40px] font-bold border-b-[3px] border-b-[#DABC95] domine-font">
          Leaderboard
        </span>
      </div>

      {/* table list */}
      <div className="md:mx-[200px] pb-8">
        {/* head */}
        <div className="grid grid-cols-12 bg-gray-400 py-2 px-4 font-medium text-[18px] md:text-[20px]">
          <div className="col-span-4">Rank</div>
          <div className="col-span-4">Name</div>
          <div className="col-span-4 ">Donations</div>
        </div>
        {/* body */}
        <div className="my-2">
          {suppliesDonations?.data.map((item: TDonations, index: number) => (
            <div className="md:text-[18px] grid grid-cols-12 pb-2 border-b border-gray-300 py-2 px-4">
              <div className="col-span-4 font-medium">{index + 1}</div>
              <div className="col-span-4">{item.userName}</div>
              <div className="col-span-4">{item.newSupplyQuantity}</div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Leaderboard;
