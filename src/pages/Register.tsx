import FSInput from "@/components/form/FSInput";
import FormWrap from "@/components/form/FormWrap";
import { useRegisterMutation } from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [register, { error }] = useRegisterMutation();

  console.log("error from register", error);

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("User registering...");

    try {
      const res = await register(data);
      console.log(res);

      dispatch(setUser({ user: data, token: null }));
      toast.success("User logged in successfully", {
        id: toastId,
        duration: 2000,
      });
      navigate("/");
      console.log("user registered");
    } catch (error) {
      console.log("error from catch", error);
    }
  };

  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <div className="p-10 rounded-md own-shadow">
        <FormWrap onSubmit={onSubmit}>
          <FSInput type="text" name="name" label="User Name:" />

          <FSInput type="text" name="email" label="Email:" />

          <FSInput type="text" name="password" label="Password:" />

          <Button htmlType="submit" className="md:text-[15px]">
            Register
          </Button>

          <p className="mt-5 text-center 2xl:text-[15px]">
            Already have an account?{" "}
            <Link to="/login" className="text-secondary-text font-medium">
              Login
            </Link>{" "}
            now
          </p>
        </FormWrap>
      </div>
    </Row>
  );
};

export default Register;
