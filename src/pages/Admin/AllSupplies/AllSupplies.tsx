import Loading from "@/components/ui/Loading";
import { useGetSupplyQuery } from "@/redux/features/foodSupply/foodSupplyApi";

const AllSupplies = () => {
  const { data, isLoading } = useGetSupplyQuery(undefined);

  if (isLoading) {
    return <Loading />;
  }

  console.log(data);

  return <div>AllSupplies</div>;
};

export default AllSupplies;
