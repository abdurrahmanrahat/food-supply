import Container from "@/components/ui/Container";
import Loading from "@/components/ui/Loading";
import { useGetSupplyQuery } from "@/redux/features/foodSupply/foodSupplyApi";
import { Link } from "react-router-dom";
import { TSupply } from "../Admin/AllSupplies/AllSupplies";

const Supplies = () => {
  const { data: supplies, isLoading } = useGetSupplyQuery(undefined);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container className="my-16 md:my-16">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-12">
        <div className="flex flex-col justify-center items-center md:items-start">
          <h2 className="text-[28px] md:text-[32px] font-bold domine-font">
            All Food Supplies
          </h2>

          <p className="text-dark-light text-center md:text-start max-w-[46ch]">
            Ut posuere felis arcu tellus tempus in in ultricies. Gravida tempus
            id nibh ornare viverra.
          </p>
        </div>

        {/* search */}
        <div>search</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 my-16 pb-8">
        {supplies.data?.map((supply: TSupply) => (
          <div key={supply._id} className="shadow-cardShadow">
            <img src={supply.supplyImg} className="" alt="" />
            <div className="p-6">
              <h4 className="font-medium text-[20px] mb-[10px]">
                {supply.supplyTitle}
              </h4>

              <div className="flex justify-between items-end">
                <div>
                  <p className="capitalize">
                    <span className="font-medium">Category:</span>{" "}
                    {supply.supplyCategory}
                  </p>
                  <p>
                    <span className="font-medium">Quantity:</span>{" "}
                    {supply.supplyQuantity}
                  </p>
                </div>

                <Link to={`/supplies/${supply._id}`}>
                  <button className="px-[20px] md:px-[24px] py-[6px] bg-[#DABC95] hover:bg-[#F2D1A5] duration-500 text-white font-semibold cursor-pointer rounded-md">
                    Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Supplies;
