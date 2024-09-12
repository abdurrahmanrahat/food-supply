import Container from "@/components/ui/Container";
import Loading from "@/components/ui/Loading";
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
  const { data: suppliesDonations, isLoading } =
    useGetSupplyDonationQuery(undefined);

  if (isLoading) {
    return <Loading />;
  }

  const myDonations = [...suppliesDonations.data];

  const sortData = myDonations.sort((a, b) => {
    const quantityA = parseFloat(a.newSupplyQuantity.split(" ")[0]);
    const quantityB = parseFloat(b.newSupplyQuantity.split(" ")[0]);

    return quantityB - quantityA;
  });

  return (
    <Container className="my-16">
      <div className="flex flex-col justify-center items-center md:items-start mb-16">
        <h2 className="text-[28px] md:text-[32px] font-bold domine-font">
          Leaderboard
        </h2>

        <p className="text-dark-light text-center md:text-start ">
          Donations list by the random people to help the disabilities people
          are listed in the table with top rank.
        </p>
      </div>

      {/* table list */}
      <div className="md:mx-[200px] pb-8">
        {/* head */}
        <div className="grid grid-cols-12 bg-gray-400 py-2 px-4 font-medium text-[18px] md:text-[20px] overflow-auto">
          <div className="col-span-2">Rank</div>
          <div className="col-span-4">Donator Name</div>
          <div className="col-span-3">Supply Product</div>
          <div className="col-span-3 ">Donations</div>
        </div>
        {/* body */}
        <div className="my-2 overflow-auto">
          {sortData?.map((item: TDonations, index: number) => (
            <div
              className="md:text-[18px] grid grid-cols-12 items-center pb-2 border-b border-gray-300 py-2 px-4"
              key={item._id}
            >
              <div className="col-span-2 font-medium">{index + 1}</div>
              <div className="col-span-4">{item.userName}</div>
              <div className="col-span-3">
                <img
                  src={item.supplyImg}
                  className="w-20 rounded-full"
                  alt=""
                />
              </div>
              <div className="col-span-3">{item.newSupplyQuantity}</div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Leaderboard;
