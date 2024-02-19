import Loading from "@/components/ui/Loading";
import { useGetSingleSupplyQuery } from "@/redux/features/foodSupply/foodSupplyApi";
import { useParams } from "react-router-dom";

const SupplyDetails = () => {
  const { id } = useParams();

  const { data, isLoading } = useGetSingleSupplyQuery(id);

  if (isLoading) {
    return <Loading />;
  }

  console.log(data);

  return <div>SupplyDetails</div>;
};

export default SupplyDetails;
