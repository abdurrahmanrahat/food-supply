import { TSupply } from "@/pages/Admin/AllSupplies/AllSupplies";
import { useCurrentUser } from "@/redux/features/auth/authSlice";
import { useAddSupplyDonationMutation } from "@/redux/features/supplyDonation/supplyDonationApi";
import { useAppSelector } from "@/redux/hooks";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

type TDonateSupplyModalProps = {
  item: TSupply;
};

const DonateSupplyModal = ({ item }: TDonateSupplyModalProps) => {
  const user = useAppSelector(useCurrentUser);

  const [addSupplyDonation] = useAddSupplyDonationMutation();

  // react hook form
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    const { userName, userEmail, newSupplyQuantity } = data;

    const donation = {
      userName,
      userEmail,
      ...item,
      newSupplyQuantity,
    };

    await addSupplyDonation(donation);

    toast.success("Supply donation successful", {
      duration: 2000,
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="px-[20px] md:px-[24px] py-[6px] bg-[#DABC95] hover:bg-[#F2D1A5] duration-500 text-white font-semibold cursor-pointer rounded-md">
          Donate Now
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Donate Selected Food
          </DialogTitle>
          <DialogDescription>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </DialogDescription>
        </DialogHeader>

        {/* form start */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="m-8 space-y-4 md:space-y-2 md:grid md:grid-cols-2 items-center gap-8">
            {/* user name */}
            <div>
              <input
                type="text"
                placeholder="User name"
                // defaultValue={item.supplyTitle}
                {...register("userName", { required: true })}
                className="w-full px-3 py-3 focus:outline-none text-md border border-gray-200 bg-[#F2F2F2]"
              />
            </div>

            {/* email */}
            <div>
              <input
                type="email"
                placeholder="Email"
                defaultValue={user?.email}
                {...register("userEmail", { required: true })}
                className="w-full px-3 py-3 focus:outline-none text-md border border-gray-200 bg-[#F2F2F2]"
              />
            </div>

            {/* title */}
            <div>
              <input
                type="text"
                placeholder="Supply title"
                readOnly
                defaultValue={item?.supplyTitle}
                {...register("supplyTitle", { required: true })}
                className="w-full px-3 py-3 focus:outline-none text-md border border-gray-200 bg-[#F2F2F2]"
              />
            </div>

            {/* Quantity */}
            <div>
              <input
                type="text"
                placeholder="Supply quantity"
                defaultValue={item.supplyQuantity}
                {...register("newSupplyQuantity", { required: true })}
                className="w-full px-3 py-3 focus:outline-none text-md border border-gray-200 bg-[#F2F2F2]"
              />
            </div>
          </div>

          <div className="flex items-center justify-center">
            <DialogClose asChild>
              <input
                className="px-[42px] py-[10px] bg-[#3D0066] text-white font-semibold cursor-pointer rounded-md"
                type="submit"
                value="Confirm"
              />
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DonateSupplyModal;
