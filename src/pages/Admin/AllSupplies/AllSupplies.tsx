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
import { useGetSupplyQuery } from "@/redux/features/foodSupply/foodSupplyApi";
import { LuTrash2 } from "react-icons/lu";
import { Link } from "react-router-dom";

export type TSupply = {
  _id: string;
  supplyImg: string;
  supplyTitle: string;
  supplyCategory: string;
  supplyQuantity: string;
  supplyDesc: string;
};

const AllSupplies = () => {
  const { data: supplies, isLoading } = useGetSupplyQuery(undefined);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container className="my-10 border p-0 rounded-2xl">
      <div className="text-center mb-14 relative">
        <span className="text-[32px] md:text-[40px] text-[#333333] font-bold border-b-[3px] border-b-[#3D0066]">
          Food Supplies
        </span>
        <div className="absolute right-0 top-[70px] md:top-5">
          <Link to="/admin/create-supply">
            <button className="px-[20px] md:px-[32px] py-[8px] bg-[#3D0066] text-white font-semibold cursor-pointer rounded-md">
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
          {supplies.data?.map((item: TSupply) => (
            <TableRow key={item._id}>
              <TableCell className="font-medium text-lg">
                {item.supplyTitle}
              </TableCell>
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
                {/* <EditEventModal item={item} id={item._id} refetch={refetch} /> */}
                <p>e</p>
              </TableCell>
              <TableCell className="text-right">
                <button
                  // onClick={() => handleDeleteEvent(item._id)}
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
