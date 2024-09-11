import { useCurrentUser } from "@/redux/features/auth/authSlice";
import { useAddGratitudeMutation } from "@/redux/features/gratitude/gratitude.api";
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

const GratitudeModal = () => {
  const user = useAppSelector(useCurrentUser);

  // post data function from redux.
  const [addGratitude] = useAddGratitudeMutation();

  // react hook form
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data: FieldValues) => {
    const { userName, userEmail, comment } = data;

    const gratitude = { userName, userEmail, comment };

    const res = (await addGratitude(gratitude)) as any;

    if (res.data.success) {
      toast.success("Gratitude successfully send", {
        duration: 2000,
      });
      reset();
    } else {
      toast.error(res.data.message, { duration: 1500 });
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="px-[20px] md:px-[28px] py-[8px] font-medium cursor-pointer rounded-md border border-[#DABC95] bg-[#DABC95] hover:bg-transparent text-white hover:text-black duration-700">
          Say Something
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Comment of Appreciation
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
                {...register("userName", { required: true })}
                className="w-full px-3 py-3 focus:outline-none text-md border border-gray-200 bg-[#F2F2F2]"
              />
            </div>

            {/* email */}
            <div>
              <input
                type="email"
                placeholder="Email"
                defaultValue={(user as any)?.email}
                {...register("userEmail", { required: true })}
                className="w-full px-3 py-3 focus:outline-none text-md border border-gray-200 bg-[#F2F2F2]"
              />
            </div>
          </div>

          {/* description */}
          <div className="m-8">
            <textarea
              cols={30 as number}
              rows={4 as number}
              placeholder="Comment"
              {...register("comment", { required: true })}
              className="w-full px-3 py-3 focus:outline-none text-md border border-gray-200 bg-[#F2F2F2]"
            ></textarea>
          </div>

          <div className="flex items-center justify-center">
            <DialogClose asChild>
              <input
                className="px-[20px] md:px-[28px] py-[8px] font-medium cursor-pointer rounded-md border border-[#DABC95] bg-[#DABC95] hover:bg-transparent text-white hover:text-black duration-700"
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

export default GratitudeModal;
