import Container from "@/components/ui/Container";
import { FieldValues, useForm } from "react-hook-form";

const Volunteer = () => {
  // react hook form
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: FieldValues) => {
    console.log(data);

    //  new supply
    //   const newSupply = {
    //     supplyImg,
    //     name,
    //     supplyCategory,
    //     supplyQuantity,
    //     supplyDesc,
    //   };

    // Send new supply to database store
    //   const res = await addSupply(newSupply);
    //   console.log(res);
    //   if (res) {
    //     reset();
    //     toast.success("Supply inserted successfully", {
    //       duration: 2000,
    //     });
    //   }
  };

  return (
    <Container className="my-16">
      <div className="text-center mb-14 relative">
        <span className="text-[32px] md:text-[40px] font-bold border-b-[3px] border-b-[#DABC95]">
          Digital Hub
        </span>
      </div>

      {/* form */}
      <div className="pb-8 md:mx-[100px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="m-8 space-y-2 grid grid-cols-1 md:grid-cols-2 items-center gap-8 pb-8">
            {/* name */}
            <div>
              <input
                type="text"
                placeholder="Name"
                {...register("name", { required: true })}
                className="w-full px-3 py-3 focus:outline-none text-md border border-gray-200 bg-[#F2F2F2]"
              />
            </div>

            {/* email */}
            <div>
              <input
                type="email"
                placeholder="Email"
                {...register("email", { required: true })}
                className="w-full px-3 py-3 focus:outline-none text-md border border-gray-200 bg-[#F2F2F2]"
              />
            </div>

            {/* number */}
            <div>
              <input
                type="text"
                placeholder="Phone Number"
                {...register("number", { required: true })}
                className="w-full px-3 py-3 focus:outline-none text-md border border-gray-200 bg-[#F2F2F2]"
              />
            </div>

            {/* location */}
            <div>
              <input
                type="text"
                placeholder="Location"
                {...register("location", { required: true })}
                className="w-full px-3 py-3 focus:outline-none text-md border border-gray-200 bg-[#F2F2F2]"
              />
            </div>
          </div>

          <div className="flex items-center justify-center">
            <input
              className="px-[20px] md:px-[32px] py-[8px] font-semibold cursor-pointer rounded-md border border-[#DABC95] hover:bg-[#F2D1A5]  duration-700"
              type="submit"
              value="Make Volunteer"
            />
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Volunteer;
