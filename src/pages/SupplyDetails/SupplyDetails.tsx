import Container from "@/components/ui/Container";
import Loading from "@/components/ui/Loading";
import { useGetSingleSupplyQuery } from "@/redux/features/foodSupply/foodSupplyApi";
import { useParams } from "react-router-dom";

const SupplyDetails = () => {
  const { id } = useParams();

  const { data: supply, isLoading } = useGetSingleSupplyQuery(id);

  if (isLoading) {
    return <Loading />;
  }

  //   console.log(supply);
  //   console.log(supply.data);
  //   console.log(supply.data.supplyTitle);

  return (
    <Container className="my-16 md:my-24">
      <div className="md:flex gap-10 items-center">
        <div className="md:w-1/2">
          <img src={supply.data.supplyImg} className="rounded-sm" alt="" />
        </div>

        <div className="md:w-1/2 space-y-2 ">
          <h4 className="font-medium text-[20px] md:text-[40px]">
            {supply.data.supplyTitle}
          </h4>
          <p className="capitalize text-[18px]">
            <span className="font-medium">Category:</span>{" "}
            {supply.data.supplyCategory}
          </p>
          <p className="text-[18px]">
            <span className="font-medium">Quantity:</span>{" "}
            {supply.data.supplyQuantity}
          </p>
          <p className="text-dark-light">{supply.data.supplyDesc}</p>

          <div className="pt-4">
            <button className="px-[20px] md:px-[24px] py-[6px] bg-[#DABC95] hover:bg-[#F2D1A5] duration-500 text-white font-semibold cursor-pointer rounded-md">
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SupplyDetails;
