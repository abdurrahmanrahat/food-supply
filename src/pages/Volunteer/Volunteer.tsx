import Container from "@/components/ui/Container";
import { useAddVolunteerMutation } from "@/redux/features/volunteer/volunteer.api";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";

const img_hosting_token = import.meta.env.VITE_image_uplode_token;

const Volunteer = () => {
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const [addVolunteer] = useAddVolunteerMutation();

  // react hook form
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data: FieldValues) => {
    console.log(data);
    const { name, email, number, location, profession } = data;

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

          //  new volunteer
          const newVolunteer = {
            name,
            image,
            email,
            number,
            location,
            profession,
          };
          console.log(newVolunteer);

          // Send valunteer to database store
          const res = await addVolunteer(newVolunteer);
          if (res) {
            reset();
            toast.success("Supply inserted successfully", {
              duration: 1500,
            });
          }
        }
      });
  };

  return (
    <Container className="my-16">
      <div className="text-center mb-14 relative">
        <span className="text-[32px] md:text-[40px] font-bold border-b-[3px] border-b-[#DABC95] domine-font">
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

            {/* Photo Field */}
            <div>
              <input
                type="file"
                {...register("image", { required: true })}
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

            {/* profession */}
            <div>
              <input
                type="text"
                placeholder="Profession"
                {...register("profession", { required: true })}
                className="w-full px-3 py-3 focus:outline-none text-md border border-gray-200 bg-[#F2F2F2]"
              />
            </div>
          </div>

          <div className="flex items-center justify-center">
            <input
              className="px-[20px] md:px-[28px] py-[8px] font-medium cursor-pointer rounded-md border border-[#DABC95] bg-[#DABC95] hover:bg-transparent text-white hover:text-black duration-700"
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
