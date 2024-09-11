import Container from "@/components/ui/Container";
import Loading from "@/components/ui/Loading";
import { useGetSupplyQuery } from "@/redux/features/foodSupply/foodSupplyApi";
import { useState } from "react";
import { Link } from "react-router-dom";
import { TSupply } from "../Admin/AllSupplies/AllSupplies";

const Supplies = () => {
  // const query: Record<string, any> = {};
  const [searchTerm, setSearchTerm] = useState<string>("");

  const { data: supplies, isLoading } = useGetSupplyQuery({ searchTerm });

  // const debouncedTerm = useDebounced({ searchQuery: searchTerm, delay: 600 });
  // if (debouncedTerm) {
  //   query["searchTerm"] = searchTerm;
  // }

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
        <div>
          <div className="w-full mx-auto">
            <div className="grid grid-cols-12 gap-2 md:gap-4">
              <div className="relative w-full h-[50px] col-span-8">
                <input
                  type="search"
                  className="w-full px-3 py-3 focus:outline-none text-md border border-gray-200 bg-[#F2F2F2]"
                  placeholder="Search supply ..."
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="col-span-4">
                <select
                  className="w-full h-[50px] px-3 py-3 focus:outline-none text-md border border-gray-200 bg-[#F2F2F2]"
                  defaultValue=""
                >
                  <option value="" disabled>
                    All Categories
                  </option>
                  <option value="food">Food</option>
                  <option value="fish">Fish</option>
                  <option value="paper products">Paper Products</option>
                  <option value="vegetable">Vegetable</option>
                  <option value="meat">Meat</option>
                  <option value="dairy products">Dairy Products</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {supplies.data.length === 0 ? (
        <div className="py-20 flex justify-center items-center">
          <h2 className="text-[24px] font-semibold">No Data Found!!</h2>
        </div>
      ) : (
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
      )}
    </Container>
  );
};

export default Supplies;
