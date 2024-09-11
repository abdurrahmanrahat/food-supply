import Container from "@/components/ui/Container";
import Loading from "@/components/ui/Loading";
import { useGetSupplyQuery } from "@/redux/features/foodSupply/foodSupplyApi";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { Button, IconButton } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TSupply } from "../Admin/AllSupplies/AllSupplies";

const Supplies = () => {
  /***************************
    SEARCH FUNCTION
   ****************************/
  // const query: Record<string, any> = {};
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [supplyCategory, setSupplyCategory] = useState<string>("");

  const query: Record<string, any> = {};

  if (searchTerm) {
    query["searchTerm"] = searchTerm;
  }

  // const debouncedTerm = useDebounced({ searchQuery: searchTerm, delay: 600 });
  // if (debouncedTerm) {
  //   query["searchTerm"] = searchTerm;
  // }

  /***************************
    FILTER FUNCTION
   ****************************/

  if (supplyCategory) {
    query["supplyCategory"] = supplyCategory;
  }

  /***************************
    PAGINATION FUNCTION
   ****************************/

  const [active, setActive] = useState(1);
  const [totalDocument, setTotalDocument] = useState(0);
  const paginationLimit = 9;

  const totalPages = Math.ceil(totalDocument / paginationLimit);

  const getItemProps = (index: number) =>
    ({
      variant: active === index ? "filled" : "text",
      color: "gray",
      onClick: () => setActive(index),
    } as any);

  const next = () => {
    if (active === totalPages) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };

  if (active) {
    query["page"] = active;
    query["limit"] = paginationLimit;
  }

  const { data: supplies, isLoading } = useGetSupplyQuery({
    ...query,
  });

  useEffect(() => {
    if (supplies?.data) {
      setTotalDocument(supplies.data.documentCount);
    }
  }, [supplies]);

  if (isLoading) {
    return <Loading />;
  }

  const renderPageNumbers = () => {
    return Array.from({ length: totalPages }, (_, index) => (
      <IconButton {...getItemProps(index + 1)} key={index + 1}>
        {index + 1}
      </IconButton>
    ));
  };

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
              <div className="relative w-full h-[50px] col-span-12 md:col-span-8">
                <input
                  type="search"
                  className="w-full px-3 py-3 focus:outline-none text-md border border-gray-200 bg-[#F2F2F2]"
                  placeholder="Search supply ..."
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setActive(1);
                  }}
                />
              </div>

              <div className="col-span-12 md:col-span-4">
                <select
                  className="w-full h-[50px] px-3 py-3 focus:outline-none text-md border border-gray-200 bg-[#F2F2F2]"
                  defaultValue=""
                  onChange={(e) => {
                    setSupplyCategory(e.target.value);
                    setActive(1);
                  }}
                >
                  <option value="">All Categories</option>
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

      {supplies.data.data.length === 0 ? (
        <div className="py-20 flex justify-center items-center">
          <h2 className="text-[24px] font-semibold">No Data Found!!</h2>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 my-16 pb-8">
          {supplies.data?.data.map((supply: TSupply) => (
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

      <div className="flex items-center justify-center md:justify-end gap-1 md:gap-4">
        <Button
          variant="text"
          className="flex items-center gap-2"
          onClick={prev}
          disabled={active === 1}
          placeholder=""
        >
          <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
        </Button>
        <div className="flex items-center gap-1 md:gap-2">
          {renderPageNumbers()}
        </div>
        <Button
          variant="text"
          className="flex items-center gap-2"
          onClick={next}
          disabled={active === totalPages}
          placeholder=""
        >
          Next
          <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
        </Button>
      </div>
    </Container>
  );
};

export default Supplies;
