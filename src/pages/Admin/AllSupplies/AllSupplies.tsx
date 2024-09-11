import EditeSupplyModal from "@/components/modal/EditeSupplyModal";
import Container from "@/components/ui/Container";
import Loading from "@/components/ui/Loading";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  useGetSupplyQuery,
  useRemoveSupplyMutation,
} from "@/redux/features/foodSupply/foodSupplyApi";
import { LuTrash2 } from "react-icons/lu";
import { Link } from "react-router-dom";
import { toast } from "sonner";

export type TSupply = {
  _id?: string;
  supplyImg: string;
  supplyTitle: string;
  supplyCategory: string;
  supplyQuantity: string;
  supplyDesc: string;
};

const AllSupplies = () => {
  const [deleteSupply] = useRemoveSupplyMutation();

  const { data: supplies, isLoading } = useGetSupplyQuery({});

  if (isLoading) {
    return <Loading />;
  }

  // delete supply
  const handleDeleteSupply = async (id: string | undefined) => {
    const res = await deleteSupply(id);
    if (res) {
      toast.error("Supply deleted successfully", {
        duration: 500,
      });
    }
  };

  return (
    <Container className="my-10 border py-10 rounded-2xl">
      <div className="text-center mb-14 relative">
        <span className="text-[32px] md:text-[40px] font-bold border-b-[3px] border-b-[#DABC95] domine-font">
          Food Supplies
        </span>
        <div className="absolute right-0 top-[70px] md:top-5">
          <Link to="/admin/create-supply">
            <button className="px-[20px] md:px-[28px] py-[8px] font-medium cursor-pointer rounded-md border border-[#DABC95] bg-[#DABC95] hover:bg-transparent text-white hover:text-black duration-700">
              Add Supply
            </button>
          </Link>
        </div>
      </div>

      {/* table here */}
      <Table className="mt-8 md:mt-0">
        <TableHeader>
          <TableRow className="text-md text-[#333333] md:text-xl font-semibold">
            <TableHead>Supply Name</TableHead>
            <TableHead>Photo</TableHead>
            <TableHead className="">Category</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Update</TableHead>
            <TableHead className="text-right">Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {supplies?.data?.map((item: TSupply) => (
            <TableRow key={item._id}>
              <TableCell className="text-lg">{item.supplyTitle}</TableCell>
              <TableCell>
                <img
                  src={item.supplyImg}
                  className="w-20 rounded-full"
                  alt=""
                />
              </TableCell>
              <TableCell className="capitalize font-medium text-lg">
                {item.supplyCategory}
              </TableCell>
              <TableCell className="text-[16px]">
                {item.supplyQuantity}
              </TableCell>
              <TableCell>
                <EditeSupplyModal item={item} id={item._id!} />
              </TableCell>
              <TableCell className="text-right">
                <button
                  onClick={() => handleDeleteSupply(item._id)}
                  className="bg-red-500 py-2 px-3 text-lg text-white rounded-md"
                >
                  <LuTrash2 />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default AllSupplies;
