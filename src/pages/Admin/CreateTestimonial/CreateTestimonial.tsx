import { useAddTestimonialMutation } from "@/redux/features/testimonial/testimonial.api";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";

const img_hosting_token = import.meta.env.VITE_image_uplode_token;

const CreateTestimonial = () => {
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const [addTestimonial] = useAddTestimonialMutation();

  // react hook form
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data: FieldValues) => {
    const { name, role, review } = data;

    // img hosting to imgbb
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then(async (imgRes) => {
        if (imgRes.success) {
          const image = imgRes.data.display_url;

          //  new supply
          const newSupply = {
            image,
            name,
            role,
            review,
          };

          // Send new supply to database store
          const res = await addTestimonial(newSupply);

          if (res) {
            reset();
            toast.success("Review make successfully", {
              duration: 2000,
            });
          }
        }
      });
  };

  return (
    <div className="my-10">
      <div className="text-center mb-14">
        <span className="text-[32px] md:text-[40px] font-bold border-b-[3px] border-b-[#DABC95]">
          Create Testimonial
        </span>
      </div>

      {/* form start */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="m-8 space-y-2 grid grid-cols-1 md:grid-cols-3 items-center gap-8">
          {/* title */}
          <div>
            <input
              type="text"
              placeholder="Your name"
              {...register("name", { required: true })}
              className="w-full px-3 py-3 focus:outline-none text-md border border-gray-200 bg-[#F2F2F2]"
            />
          </div>

          {/* Photo Field */}
          <div>
            <input
              type="file"
              {...register("image", { required: true })}
              className="w-full px-3 py-3 focus:outline-none text-md border border-gray-200 bg-[#F2F2F2]"
            />
          </div>

          {/* category */}
          <div>
            <input
              type="text"
              placeholder="Role"
              {...register("role", { required: true })}
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
            {...register("review", { required: true })}
            className="w-full px-3 py-3 focus:outline-none text-md border border-gray-200 bg-[#F2F2F2]"
          ></textarea>
        </div>

        <div className="flex items-center justify-center">
          <input
            className="px-[20px] md:px-[32px] py-[8px] font-semibold cursor-pointer rounded-md border border-[#DABC95] hover:bg-[#F2D1A5]  duration-700"
            type="submit"
            value="Make Review"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateTestimonial;
