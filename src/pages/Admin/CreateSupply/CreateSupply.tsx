import { useForm } from "react-hook-form";

const img_hosting_token = import.meta.env.VITE_image_uplode_token;

const CreateSupply = () => {
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  // react hook form
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const { supplyTitle, supplyCategory, supplyQuantity, supplyDesc } = data;

    // img hosting to imgbb
    const formData = new FormData();
    formData.append("image", data.supplyImg[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgRes) => {
        if (imgRes.success) {
          const supplyImg = imgRes.data.display_url;

          //  new supply
          const newSupply = {
            supplyImg,
            supplyTitle,
            supplyCategory,
            supplyQuantity,
            supplyDesc,
          };
          console.log("new supply", newSupply);

          // Send new supply to database store
        }
      });
  };

  return (
    <div className="my-10">
      <div className="text-center mb-14">
        <span className="text-[32px] md:text-[40px] text-[#333333] font-bold border-b-[3px] border-b-[#3D0066]">
          Create Supply
        </span>
      </div>

      {/* form start */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="m-8 space-y-2 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* title */}
          <div>
            <input
              type="text"
              placeholder="Supply title"
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
              {...register("supplyCategory", { required: true })}
              className="w-full px-3 py-3 focus:outline-none text-md border border-gray-200 bg-[#F2F2F2]"
            />
          </div>

          {/* Quantity */}
          <div>
            <input
              type="text"
              placeholder="Supply quantity"
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
            {...register("supplyDesc", { required: true })}
            className="w-full px-3 py-3 focus:outline-none text-md border border-gray-200 bg-[#F2F2F2]"
          ></textarea>
        </div>

        <div className="flex items-center justify-center">
          <input
            className="px-[42px] py-[10px] bg-[#3D0066] text-white font-semibold cursor-pointer rounded-md"
            type="submit"
            value="Add Supply"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateSupply;