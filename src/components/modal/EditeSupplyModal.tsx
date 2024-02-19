import { TSupply } from "@/pages/Admin/AllSupplies/AllSupplies";
import { useUpdateSupplyMutation } from "@/redux/features/foodSupply/foodSupplyApi";
import { FieldValues, useForm } from "react-hook-form";
import { FaRegEdit } from "react-icons/fa";
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

const img_hosting_token = import.meta.env.VITE_image_uplode_token;

type TSupplyModalProps = {
  item: TSupply;
  id: string;
};

const EditeSupplyModal = ({ item, id }: TSupplyModalProps) => {
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const [updateSupply] = useUpdateSupplyMutation();

  // react hook form
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: FieldValues) => {
    const { supplyTitle, supplyCategory, supplyQuantity, supplyDesc } = data;

    // img hosting to imgbb
    const formData = new FormData();
    formData.append("image", data.supplyImg[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then(async (imgRes) => {
        if (imgRes.success) {
          const supplyImg = imgRes.data.display_url;

          //  new supply
          const newData = {
            supplyImg,
            supplyTitle,
            supplyCategory,
            supplyQuantity,
            supplyDesc,
          };

          const payload = { id, newData };

          // Send new supply to database store
          const res = await updateSupply(payload);
          if (res) {
            // reset();
            toast.success("Supply inserted successfully", {
              duration: 2000,
            });
          }
        }
      });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="bg-[#0B63E5] py-2 px-3 text-lg text-white rounded-md">
          <FaRegEdit />
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[625px] h-full">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Edit Selected Supply
          </DialogTitle>
          <DialogDescription>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </DialogDescription>
        </DialogHeader>

        {/* form start */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="m-8 space-y-4 md:space-y-2 md:grid md:grid-cols-2 items-center gap-8">
            {/* title */}
            <div>
              <input
                type="text"
                placeholder="Supply title"
                defaultValue={item.supplyTitle}
                {...register("supplyTitle", { required: true })}
                className="w-full px-3 py-3 focus:outline-none text-md border border-gray-200 bg-[#F2F2F2]"
              />
            </div>

            {/* Photo Field */}
            <div>
              <input
                type="file"
                {...register("supplyImg", { required: true })}
                className="w-full px-3 py-3 focus:outline-none text-md border border-gray-200 bg-[#F2F2F2]"
              />
            </div>

            {/* category */}
            <div>
              <input
                type="text"
                placeholder="Supply category"
                defaultValue={item.supplyCategory}
                {...register("supplyCategory", { required: true })}
                className="w-full px-3 py-3 focus:outline-none text-md border border-gray-200 bg-[#F2F2F2]"
              />
            </div>

            {/* Quantity */}
            <div>
              <input
                type="text"
                placeholder="Supply quantity"
                defaultValue={item.supplyQuantity}
                {...register("supplyQuantity", { required: true })}
                className="w-full px-3 py-3 focus:outline-none text-md border border-gray-200 bg-[#F2F2F2]"
              />
            </div>
          </div>

          {/* supply description */}
          <div className="m-8">
            <textarea
              cols={30 as number}
              rows={4 as number}
              placeholder="Description"
              defaultValue={item.supplyDesc}
              {...register("supplyDesc", { required: true })}
              className="w-full px-3 py-3 focus:outline-none text-md border border-gray-200 bg-[#F2F2F2]"
            ></textarea>
          </div>

          <div className="flex items-center justify-center">
            <DialogClose asChild>
              <input
                className="px-[42px] py-[10px] bg-[#3D0066] text-white font-semibold cursor-pointer rounded-md"
                type="submit"
                value="Add Supply"
              />
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditeSupplyModal;
