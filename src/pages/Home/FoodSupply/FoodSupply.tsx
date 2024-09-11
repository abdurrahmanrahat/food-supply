import Container from "@/components/ui/Container";
import { TSupply } from "@/pages/Admin/AllSupplies/AllSupplies";
import { useGetSupplyQuery } from "@/redux/features/foodSupply/foodSupplyApi";
import { Link } from "react-router-dom";

const FoodSupply = () => {
  const { data: supplies, isLoading } = useGetSupplyQuery({});

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <Container className="my-16 md:my-24">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-[40px] md:text-[44px] font-bold domine-font">
          Food Supplies
        </h2>

        <p className="text-dark-light max-w-[66ch] pb-2 text-center">
          Ut posuere felis arcu tellus tempus in in ultricies. Gravida tempus id
          nibh ornare viverra.{" "}
          <span className="hidden md:inline">
            Ut posuere felis arcu tellus tempus in in ultricies. Gravida tempus
            id nibh ornare viverra.
          </span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3  gap-12 mt-12">
        {supplies.data?.slice(0, 6).map((supply: TSupply) => (
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

      <div className="mt-20 flex justify-center items-center">
        <Link to="/supplies">
          <button className="px-[20px] md:px-[28px] py-[8px] font-medium cursor-pointer rounded-md border border-[#DABC95] bg-[#DABC95] hover:bg-transparent text-white hover:text-black duration-700">
            View All
          </button>
        </Link>
      </div>
    </Container>
  );
};

export default FoodSupply;
