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
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { Button, IconButton } from "@material-tailwind/react";
import { useEffect, useState } from "react";
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

  const query: Record<string, any> = {};
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
          {supplies?.data.data?.map((item: TSupply) => (
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

      <div className="flex items-center justify-center md:justify-end gap-1 md:gap-4 mt-8">
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

export default AllSupplies;
