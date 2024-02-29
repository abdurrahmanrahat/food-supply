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
      <div className="text-center mb-14 relative">
        <span className="text-[32px] md:text-[40px] font-bold border-b-[3px] border-b-[#DABC95]">
          All Food Supplies
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 my-16 pb-8">
        {supplies.data?.map((supply: TSupply) => (
          <div key={supply._id} className="relative">
            <img src={supply.supplyImg} className="rounded-sm" alt="" />
            <h4 className="font-medium text-[20px] mt-2">
              {supply.supplyTitle}
            </h4>
            <p className="capitalize">
              <span className="font-medium">Category:</span>{" "}
              {supply.supplyCategory}
            </p>
            <p>
              <span className="font-medium">Quantity:</span>{" "}
              {supply.supplyQuantity}
            </p>
            <div className="absolute bottom-0 right-8">
              <Link to={`/supplies/${supply._id}`}>
                <button className="px-[20px] md:px-[24px] py-[6px] bg-[#DABC95] hover:bg-[#F2D1A5] duration-500 text-white font-semibold cursor-pointer rounded-md">
                  Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Supplies;
